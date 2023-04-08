import { SCALE } from "./settings";
import {
  meanMotion,
  meanAnomaly,
  eccentricAnomaly,
  trueAnomaly,
  radiusVector,
  positionInOrbitalPlane,
  positionIn3DSpace,
} from "./orbitalMechanics";

export const scaleDistance = (distance) => distance * SCALE;
export const secondsToMilliseconds = (seconds) => seconds * 1000;
export const millisecondsToSeconds = (milliseconds) => milliseconds / 1000;

export const getCartesianCoordinates = (
  orbitalElements,
  elapsedTime,
  parentPosition
) => {
  const {
    M1,
    M2,
    semiMajorAxis: a,
    eccentricity: e,
    meanAnomalyAtEpoch: M0,
    inclination: i,
    longitudeOfAscendingNode: Ω,
    argumentOfPeriapsis: ω,
  } = orbitalElements;

  // Calculate mean motion, mean anomaly, and eccentric anomaly
  const n = meanMotion(M1, M2, a);
  const M = meanAnomaly(M0, n, elapsedTime);
  const E = eccentricAnomaly(M, e);

  // Calculate true anomaly, radius vector, and position in the orbital plane
  const ν = trueAnomaly(E, e);
  const r = radiusVector(a, e, E);
  const { x, y } = positionInOrbitalPlane(r, ν, i, Ω);

  // Calculate position in 3D space
  const position = positionIn3DSpace(x, y, i, Ω, ω);

  return position;
};

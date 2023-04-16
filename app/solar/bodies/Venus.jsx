import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useKeplerOrbit } from "../hooks";
import { scaleDistance } from "../util";
import { sun, venus } from "../constants";

const Venus = ({ parentPosition }) => {
  const map = useLoader(TextureLoader, venus.texture);
  const meshRef = useRef();
  const {
    semiMajorAxis,
    eccentricity,
    inclination,
    longitudeOfAscendingNode,
    argumentOfPeriapsis,
    meanAnomalyAtEpoch,
  } = venus;
  const position = useKeplerOrbit(
    {
      M1: sun.mass,
      M2: venus.mass,
      semiMajorAxis,
      eccentricity,
      inclination,
      longitudeOfAscendingNode,
      argumentOfPeriapsis,
      meanAnomalyAtEpoch,
    },
    parentPosition
  );

  const scaledPosition = [
    scaleDistance(position.x),
    scaleDistance(position.y),
    scaleDistance(position.z),
  ];

  return (
    <mesh position={scaledPosition} ref={meshRef}>
      <sphereGeometry args={[scaleDistance(sun.radius), 32, 32]} />
      <meshStandardMaterial color="pink" map={map} />
    </mesh>
  );
};

export default Venus;

import React from "react";
import { Vector3, BufferGeometry } from "three";
import { scaleDistance } from "./util";

const OrbitPath = ({ semiMajorAxis, eccentricity, color }) => {
  const points = [];

  const numPoints = 1000;
  for (let i = 0; i < numPoints; i++) {
    const trueAnomaly = (i / numPoints) * 2 * Math.PI;
    const radius =
      (semiMajorAxis * (1 - Math.pow(eccentricity, 2))) /
      (1 + eccentricity * Math.cos(trueAnomaly));
    points.push(
      new Vector3(
        scaleDistance(radius * Math.cos(trueAnomaly)),
        0,
        scaleDistance(radius * Math.sin(trueAnomaly))
      )
    );
  }

  // Close the loop
  points.push(points[0]);

  const geometry = new BufferGeometry().setFromPoints(points);

  return (
    <mesh position={[0, 0, 0]}>
      <lineSegments geometry={geometry}>
        <lineBasicMaterial color={color} linewidth={1} />
      </lineSegments>
    </mesh>
  );
};

export default OrbitPath;

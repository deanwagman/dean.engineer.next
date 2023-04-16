import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useKeplerOrbit } from "../hooks";
import { scaleDistance } from "../util";
import { sun, earth } from "../constants";

const Earth = ({ parentPosition }) => {
  const map = useLoader(TextureLoader, earth.texture);
  const meshRef = useRef();
  const {
    semiMajorAxis,
    eccentricity,
    inclination,
    longitudeOfAscendingNode,
    argumentOfPeriapsis,
    meanAnomalyAtEpoch,
  } = earth;
  const position = useKeplerOrbit(
    {
      M1: sun.mass,
      M2: earth.mass,
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
      <meshStandardMaterial color="blue" map={map} />
    </mesh>
  );
};

export default Earth;

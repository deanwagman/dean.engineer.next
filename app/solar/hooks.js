import { useState, useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  getCartesianCoordinates,
  secondsToMilliseconds,
  millisecondsToSeconds,
} from "./util";
import { EPOCH, TIME_FACTOR } from "./settings";

export const useKeplerOrbit = (orbitalElements, parentPosition) => {
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  const lastUpdateTime = useRef(EPOCH);

  useEffect(() => {
    // Set the initial position of the celestial body
    const initialPosition = getCartesianCoordinates(
      orbitalElements,
      EPOCH,
      parentPosition
    );
    setPosition({
      x: initialPosition.x + parentPosition.x,
      y: initialPosition.y + parentPosition.y,
      z: initialPosition.z + parentPosition.z,
    });
  }, []);

  useFrame((_, deltaTime) => {
    const scaledDelta = deltaTime * TIME_FACTOR;
    const elapsedSeconds =
      millisecondsToSeconds(lastUpdateTime.current - EPOCH) + scaledDelta;

    const newPosition = getCartesianCoordinates(
      orbitalElements,
      elapsedSeconds,
      parentPosition
    );

    const offsetPosition = {
      x: newPosition.x + parentPosition.x,
      y: newPosition.y + parentPosition.y,
      z: newPosition.z + parentPosition.z,
    };

    setPosition(offsetPosition);

    lastUpdateTime.current =
      lastUpdateTime.current + secondsToMilliseconds(scaledDelta);
  });

  return position;
};

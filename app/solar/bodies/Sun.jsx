import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import OrbitPath from "../OrbitPath";
import { scaleDistance } from "../util";
import { sun, mercury } from "../constants";

const Sun = () => {
  const map = useLoader(TextureLoader, sun.texture);
  const emissiveMap = useLoader(TextureLoader, sun.emissiveTexture);
  const meshRef = useRef();

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[scaleDistance(sun.radius), 32, 32]} />
      <meshStandardMaterial
        color="yellow"
        map={map}
        emissive={0xffffff}
        emissiveMap={emissiveMap}
        emissiveIntensity={15}
      />
      {/* <OrbitPath
        semiMajorAxis={mercury.semiMajorAxis}
        eccentricity={mercury.eccentricity}
        color="white"
      /> */}
    </mesh>
  );
};

export default Sun;

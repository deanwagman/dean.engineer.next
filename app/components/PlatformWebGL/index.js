"use client";
import React, { useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrthographicCamera, Plane } from "@react-three/drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PlaneBufferGeometry, MeshBasicMaterial, Mesh, Fog } from "three";
import Platform from "./Platform";
import Particles from "./Particles";
import styles from "./styles.module.css";

const CameraOrbitController = () => {
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.update();

    return () => {
      controls.dispose();
    };
  }, [camera, gl]);

  return null;
};

const PlatformWebGL = () => (
  <div className={styles.container}>
    <Canvas className={styles.canvas}>
      <OrthographicCamera
        makeDefault
        position={[300, 300, 300]}
        zoom={30}
        near={0.01}
        far={1000}
      />
      {/* Fog fades out elements into tranparent */}
      <fog 
        attach="fog" 
        args={["#5B1D2A", 0, 1000]}
      />
      <CameraOrbitController />
      <ambientLight />
      <Platform />
    </Canvas>
  </div>
);

export default PlatformWebGL;

import { Canvas, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { AxesHelper } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useKeplerOrbit } from "./hooks";
import Sun from "./bodies/Sun";
import Mercury from "./bodies/Mercury";
import Venus from "./bodies/Venus";
import Earth from "./bodies/Earth";
import Mars from "./bodies/Mars";

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

export default () => {
  return (
    <Canvas style={{ background: "black" }}>
      <CameraOrbitController />
      <axesHelper args={[1000]} />

      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 0]} color={0xffffff} emissive={1.5} />

      <Sun />
      <Mercury parentPosition={{ x: 0, y: 0, z: 0 }} />
      <Venus parentPosition={{ x: 0, y: 0, z: 0 }} />
      <Earth parentPosition={{ x: 0, y: 0, z: 0 }} />
      <Mars parentPosition={{ x: 0, y: 0, z: 0 }} />
    </Canvas>
  );
};

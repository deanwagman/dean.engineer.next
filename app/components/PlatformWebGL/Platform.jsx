import { useSprings, animated, config } from "@react-spring/three";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Plane } from "@react-three/drei";
import { NoiseTexture, TextureLoader } from "three";

const numPlatforms = 100;

const Platforms = ({ index: i }) => {
  const noiseTexture = useLoader(TextureLoader, "/textures/grunge.png");
  const [springs] = useSprings(
    numPlatforms,
    (index) => {
      const z = index * Math.random() * 5 * (Math.random() > 0.5 ? 1 : -1);
      return {
        loop: { reverse: true },
        from: {
          position: [
            Math.random() + index * -3 * (Math.random() > 0.5 ? 1 : -1),
            Math.ceil(Math.random() * -3),
            z,
          ],
        },
        to: {
          position: [
            Math.random() + index * 3 * (Math.random() > 0.5 ? 1 : -1),
            Math.ceil(Math.random() * -3),
            z,
          ],
        },
        config: {
          ...config.molasses,
          mass: Math.random() * 100_000,
        },
      };
    },
    []
  );

  return (
    <>
      <fog attach="fog" args={["#00202e", 50, 1000]} />
      <ambientLight color="#ffffff" intensity={0.2} />
      <directionalLight color="#ffffff" intensity={0.5} position={[0, 1, 0]} />
      {springs.map((props, index) => {
        return (
          <animated.mesh
            position={props.position}
            rotation={[Math.PI / 2, 0, 0]}
            key={index}
          >
            <boxGeometry
              args={[
                Math.ceil(1 * Math.random() * 6),
                Math.ceil(2 * Math.random()),
                0.1,
              ]}
            />
            <meshStandardMaterial color="#ef3c44" map={noiseTexture} />
          </animated.mesh>
        );
      })}
    </>
  );
};

export default Platforms;

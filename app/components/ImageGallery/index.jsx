"use client";
import { useState, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import LightBox from "./LightBox";
import data from "../../art/data";

import styles from "./styles.module.css";

const ImageTile = ({ url, description, onClick }) => {
  const [imageTileSpringProps, imageTileSpring] = useSpring(() => ({
    scale: 1,
    config: { mass: 1, tension: 200, friction: 20 },
  }));
  const mouseEnter = () => imageTileSpring.start({ scale: 1.1 });
  const mouseLeave = () => imageTileSpring.start({ scale: 1 });
  return (
    <div>
      <animated.img
        src={url}
        alt={description}
        className={styles.thumbnail}
        onClick={onClick}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        style={{
          ...imageTileSpringProps,
          boxShadow: imageTileSpringProps.scale.to(
            (value) =>
              `rgba(0px 0px ${Math.round(value * 6)}px ${Math.round(
                value * 2
              )}px rgba(0,0,0,0.75))`
          ),
        }}
      />
    </div>
  );
};

export default () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [showLightBox, setShowLightBox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(data.images[0]);
  const lightBoxRef = useRef(null);
  const tileRef = useRef(null); // Ref for the image tile, used for the transition

  return (
    <div className={styles.container}>
      <LightBox
        image={selectedImage}
        onClose={() => setShowLightBox(false)}
        show={showLightBox}
        nodeRef={lightBoxRef}
        tileRef={tileRef}
      />

      {data.images.map((image, index) => (
        <ImageTile
          key={index}
          url={image.src}
          description={image.description}
          onClick={({ target }) => {
            tileRef.current = target;
            setSelectedImage(image);
            setShowLightBox(true);
          }}
        />
      ))}
    </div>
  );
};

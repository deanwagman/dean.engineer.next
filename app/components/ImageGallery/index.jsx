"use client";
import { useState, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import LightBox from "./LightBox";

import styles from "./styles.module.css";

// Image Gallery
const data = {
  name: "Image Gallery",
  description: "Image Gallery",
  images: [
    {
      name: "Speed Racer",
      description: "Speed Racer in the 1920s with his car",
      url: "https://cdn.discordapp.com/attachments/1067194492077228134/1091863275337170944/deanwagman_Speed_Racer_in_the_1920s_with_his_car_vivid_cartoon_b0b0c8a2-c5dc-431f-9d20-dce246565e0d.png",
    },
    {
      name: "NightHawks",
      description: "Nighthawks",
      url: "https://cdn.discordapp.com/attachments/1067194492077228134/1093610183307055104/deanwagman_Nighthawks_by_Edward_Hopper_but_a_San_Francisco_gay__5e6f8a0f-bffe-48fe-a730-d67af2b79bc7.png",
    },
    {
      name: "Dolo Palm",
      description: "Dolo palm tree",
      url: "https://cdn.discordapp.com/attachments/1067194492077228134/1089647335925104650/deanwagman_a_hyper_realistica_vibrant_photo_of_a_palm_tree_on_f_b38fb0d2-5097-4b59-9820-72b8aad0aad4.png",
    },
    {
      name: "3D thing",
      description: "3D thing",
      url: "https://cdn.discordapp.com/attachments/1067194492077228134/1087859875163422730/deanwagman_a_3D_interactive_web_site_517c4c85-1ed7-469d-b8c2-cde15c2089e1.png",
    },
    {
      name: "Dog and Man",
      description: "Dog and Man",
      url: "https://cdn.discordapp.com/attachments/1067194492077228134/1086796235572265060/deanwagman_a_man_and_his_dog_walking_through_nature_in_the_styl_f1aef31d-7313-4a2e-aca1-508a12edd126.png",
    },
    {
      name: "Hamburger Menu",
      description: "Hamburger Menu",
      url: "https://cdn.discordapp.com/attachments/1067194492077228134/1081085341538209862/deanwagman_hamburger_menu_icon_2b144da8-eac2-4829-868a-a70edd46f047.png",
    },
    {
      name: "Shield",
      description: "Shield",
      url: "https://cdn.discordapp.com/attachments/1067194492077228134/1081020707531669564/deanwagman_website_logo_centered_and_symetrical_b830b3b6-d283-41b4-89d2-7bb78dabdcd2.png",
    },
    {
      name: "Speed Racer 2",
      description: "Speed Racer in the 1920s with his car",
      url: "https://cdn.discordapp.com/attachments/1067194492077228134/1091863275337170944/deanwagman_Speed_Racer_in_the_1920s_with_his_car_vivid_cartoon_b0b0c8a2-c5dc-431f-9d20-dce246565e0d.png",
    },
    {
      name: "NightHawks 2",
      description: "Nighthawks",
      url: "https://cdn.discordapp.com/attachments/1067194492077228134/1093610183307055104/deanwagman_Nighthawks_by_Edward_Hopper_but_a_San_Francisco_gay__5e6f8a0f-bffe-48fe-a730-d67af2b79bc7.png",
    },
    {
      name: "Dolo Palm 2",
      description: "Dolo palm tree",
      url: "https://cdn.discordapp.com/attachments/1067194492077228134/1089647335925104650/deanwagman_a_hyper_realistica_vibrant_photo_of_a_palm_tree_on_f_b38fb0d2-5097-4b59-9820-72b8aad0aad4.png",
    },
    {
      name: "3D thing 2",
      description: "3D thing",
      url: "https://cdn.discordapp.com/attachments/1067194492077228134/1087859875163422730/deanwagman_a_3D_interactive_web_site_517c4c85-1ed7-469d-b8c2-cde15c2089e1.png",
    },
    {
      name: "Dog and Man 2",
      description: "Dog and Man",
      url: "https://cdn.discordapp.com/attachments/1067194492077228134/1086796235572265060/deanwagman_a_man_and_his_dog_walking_through_nature_in_the_styl_f1aef31d-7313-4a2e-aca1-508a12edd126.png",
    },
    {
      name: "Hamburger Menu 2",
      description: "Hamburger Menu",
      url: "https://cdn.discordapp.com/attachments/1067194492077228134/1081085341538209862/deanwagman_hamburger_menu_icon_2b144da8-eac2-4829-868a-a70edd46f047.png",
    },
    {
      name: "Shield 2",
      description: "Shield",
      url: "https://cdn.discordapp.com/attachments/1067194492077228134/1081020707531669564/deanwagman_website_logo_centered_and_symetrical_b830b3b6-d283-41b4-89d2-7bb78dabdcd2.png",
    },
  ],
};

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
          url={image.url}
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

// Main Image
// Next
// Previous
// Description

{
  /* <img
  style={imageStyle}
  src={data.images[imageIndex].url}
  alt={data.images[imageIndex].name}
  width={900}
  height={900}
/>
<h3>{data.images[imageIndex].name}</h3>
<p>{data.images[imageIndex].description}</p>
<button onClick={goPrevious}>Previous</button>
<button onClick={goNext}>Next</button> */
}

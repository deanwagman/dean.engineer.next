import React, { useLayoutEffect, useEffect, useRef } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import ReactDOM from "react-dom";
import styles from "./styles.module.css";

const getRect = (ref) => ref?.current?.getBoundingClientRect();

const LightBox = ({ image, onClose, nodeRef, tileRef, show }) => {
  const [imageSpringProps, imageSpringAPI] = useSpring(
    () => ({
      from: {
        x: getRect(tileRef).x,
        y: getRect(tileRef).y,
        width: getRect(tileRef).width,
        height: getRect(tileRef).height,
      },
      config: config.stiff,
    }),
    [tileRef]
  );
  const [shadowSpringProps, shadowSpringAPI] = useSpring(
    () => ({
      from: {
        opacity: 0,
      },
      config: config.slow,
    }),
    [show]
  );

  useEffect(() => {
    const tileX = getRect(tileRef).x;
    const tileY = getRect(tileRef).y;
    const tileWidth = getRect(tileRef).width;
    const tileHeight = getRect(tileRef).height;
    const newWidth = window.innerWidth * 0.86;
    const newHeight = window.innerHeight * 0.86;
    const newX = (window.innerWidth - newWidth) / 2;
    const newY = (window.innerHeight - newHeight) / 2;

    if (show) {
      imageSpringAPI.set({
        x: tileX,
        y: tileY,
        width: tileWidth,
        height: tileHeight,
      });
      imageSpringAPI.start({
        to: {
          x: newX,
          y: newY,
          width: newWidth,
          height: newHeight,
        },
      });
      shadowSpringAPI.start({
        to: {
          opacity: 1,
        },
      });

      tileRef.current.style.opacity = 0;
    }
  }, [show]);

  const prepareForClose = () => {
    imageSpringAPI.start({
      to: {
        x: getRect(tileRef).x,
        y: getRect(tileRef).y,
        width: getRect(tileRef).width,
        height: getRect(tileRef).height,
      },
      onRest: () => {
        tileRef.current.style.opacity = 1;
        onClose();
      },
    });
    shadowSpringAPI.start({
      to: {
        opacity: 0,
      },
    });
  };

  if (!show) {
    return null;
  }

  return (
    <div
      id="light-box-container"
      className={styles["light-box-container"]}
      onClick={({ target }) => {
        if (target.id === "light-box-container") {
          prepareForClose();
        }
      }}
      ref={nodeRef}
    >
      <button className={styles["close-button"]} onClick={prepareForClose}>
        &times;
      </button>
      <animated.img
        src={image?.url}
        alt={image?.description}
        className={styles["hero-image"]}
        style={imageSpringProps}
        onClick={prepareForClose}
      />

      <animated.div className={styles["shadow"]} style={shadowSpringProps} />
    </div>
  );
};

const Modal = (props) => {
  // Get the DOM element where you want to render the portal content
  const portalRoot = document.getElementById("modal-root");

  if (!portalRoot) {
    return null;
  }

  // Render the content using ReactDOM.createPortal
  return ReactDOM.createPortal(<LightBox {...props} />, portalRoot);
};

export default Modal;

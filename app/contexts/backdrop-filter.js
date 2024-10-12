"use client";

import { createContext, useState, useContext, useRef, useEffect } from "react";

const BackdropFilterContext = createContext();

export default BackdropFilterContext;

export const useBackdropFilterItem = (ref) => {
  const [blur, setBlur] = useState(0);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [grayscale, setGrayscale] = useState(0);
  const elemnetRef = useRef();

  useEffect(() => {
    const element = elemnetRef.current;

    if (element?.style) {
      element.style.backdropFilter = `blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%)`;
    }
  }, [blur, brightness, contrast, grayscale, elemnetRef]);

  return {
    blur,
    setBlur,
    brightness,
    setBrightness,
    contrast,
    setContrast,
    grayscale,
    setGrayscale,
    ref: elemnetRef,
  };
};

export const BackdropFilterProvider = ({ elementRef, children }) => {
  const value = useBackdropFilterItem(elementRef);

  return (
    <BackdropFilterContext.Provider value={value}>
      {children}
    </BackdropFilterContext.Provider>
  );
};

export const useBackdropFilter = () => {
  const context = useContext(BackdropFilterContext);
  if (context === undefined) {
    throw new Error(
      `useBackdropFilter must be used within a BackdropFilterProvider`
    );
  }
  return context;
};

export const BackdropFilterDisplayName = "BackdropFilterContext";

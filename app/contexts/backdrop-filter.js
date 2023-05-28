"use client";

import { createContext } from "react";

const BackdropFilterContext = createContext();

export default BackdropFilterContext;

export const BackdropFilterProvider = ({ children }) => {
  const [blur, setBlur] = useState(0);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [grayscale, setGrayscale] = useState(0);

  const value = {
    blur,
    setBlur,
    brightness,
    setBrightness,
    contrast,
    setContrast,
    grayscale,
    setGrayscale,
  };

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

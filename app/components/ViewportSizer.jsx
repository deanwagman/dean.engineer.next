"use client";

import { useEffect } from "react";
import { debounce } from "../utilities";

// Listens to window resize events and updates the viewport size in CSS variables
// Could eventually be used to stash the viewport size in context for use by other components

const ViewportSizer = () => {
  const updateViewportSize = () => {
    const vh = window.innerHeight * 0.01;
    const vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`); // 1vh = 1% of viewport height
    document.documentElement.style.setProperty("--vw", `${vw}px`); // 1vw = 1% of viewport width
  };

  useEffect(() => {
    updateViewportSize();
    window.addEventListener("resize", debounce(updateViewportSize, 100), {
      passive: true,
    });
    return () =>
      window.removeEventListener("resize", updateViewportSize, {
        passive: true,
      });
  }, []);

  return null;
};

export default ViewportSizer;

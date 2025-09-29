"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { Navigation } from "../components/Nav";
import { BackdropFilterProvider } from "../contexts/backdrop-filter";
import FullscreenChatbot from "../components/Chat/FullscreenChat";

import backgroundImage from "../cyber-tower-background.jpg";

import styles from "./styles/layouts.module.css";

// Make PlatformWebGL optional and disable SSR to avoid React version conflicts
const PlatformWebGL = dynamic(() => import("../components/PlatformWebGL"), {
  ssr: false,
  loading: () => null,
});

export const CenterLayout = ({ children }: { children: any }) => {
  return (
    <div className={styles.centerLayout}>
      <Navigation />
      <div className={styles.mainColumn}>{children}</div>
    </div>
  );
};

export const DistopiaLayout = ({ children }: { children: any }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <BackdropFilterProvider elementRef={ref}>
      <div
        style={{
          transition: "backdrop-filter 1s ease-in-out",
          // overflowX: "hidden",
        }}
        ref={ref}
      >
        {/* Custom SVG filter for plasma effect */}
        <svg
          style={{
            width: 0,
            height: 0,
            position: "absolute",
            visibility: "hidden",
          }}
        >
          <defs>
            <filter id="plasma">
              <feTurbulence baseFrequency="0.009" numOctaves="5" seed="2">
                {/* <animate
                  attributeName="baseFrequency"
                  dur="100s"
                  values="0.005;0.02;0.005;0.005"
                  keyTimes="0;0.5;0.999;1"
                  repeatCount="indefinite"
                /> */}
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" scale="50" />
            </filter>

            <filter id="plasma-menu">
              <feTurbulence baseFrequency="0.009" numOctaves="5" seed="2">
                <animate
                  attributeName="baseFrequency"
                  dur="60s"
                  values="0.005;0.02;0.005"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" scale="100" />
            </filter>

            <filter id="noise" x="0" y="0" width="500" height="500">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.02"
                numOctaves="5"
                result="noise"
              />
              <feColorMatrix type="saturate" values="0" />
              <feComposite operator="in" in2="SourceGraphic" />
            </filter>
          </defs>
        </svg>

        {children}
      </div>
      <FullscreenChatbot />
      {/* Only render PlatformWebGL on client side to avoid SSR issues */}
      {typeof window !== 'undefined' && <PlatformWebGL />}
    </BackdropFilterProvider>
  );
};
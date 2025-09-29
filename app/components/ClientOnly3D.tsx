"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Completely isolate 3D components from SSR
const PlatformWebGL = dynamic(() => import("./PlatformWebGL"), {
  ssr: false,
  loading: () => null,
});

const ClientOnly3D = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render on client side after hydration
  if (!isClient) {
    return null;
  }

  return <PlatformWebGL />;
};

export default ClientOnly3D;

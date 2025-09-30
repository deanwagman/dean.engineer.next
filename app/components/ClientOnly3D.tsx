"use client";

import { useEffect, useState } from "react";

// Temporarily disable 3D components to fix React version conflicts
// This can be re-enabled once the build issues are resolved
const ClientOnly3D = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Temporarily return null to avoid React version conflicts
  // TODO: Re-enable 3D components once build issues are resolved
  return null;

  // Original code (commented out for now):
  // if (!isClient) {
  //   return null;
  // }
  // return <PlatformWebGL />;
};

export default ClientOnly3D;
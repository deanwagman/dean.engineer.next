"use client";

import dynamic from "next/dynamic";

// Temporarily disable 3D components to fix React version conflicts
// This can be re-enabled once the build issues are resolved
const SolarSystem = dynamic(() => Promise.resolve(() => (
  <div style={{ 
    width: "100%", 
    height: "90vh", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center",
    background: "black",
    color: "white",
    fontSize: "1.5rem"
  }}>
    Solar System (3D components temporarily disabled for build compatibility)
  </div>
)), {
  ssr: false,
  loading: () => (
    <div style={{ 
      width: "100%", 
      height: "90vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      background: "black",
      color: "white"
    }}>
      Loading Solar System...
    </div>
  ),
});

const Page = () => {
  return (
    <div style={{ width: "100%", height: "90vh" }}>
      <SolarSystem />
    </div>
  );
};

export default Page;
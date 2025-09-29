"use client";

import dynamic from "next/dynamic";

// Make SolarSystem client-side only to avoid React version conflicts during build
const SolarSystem = dynamic(() => import("./main"), {
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
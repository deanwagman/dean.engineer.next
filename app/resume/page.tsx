"use client";

import dynamic from "next/dynamic";

// Make Resume component client-side only to avoid React version conflicts
const Resume = dynamic(() => import("app/components/Resume"), {
  ssr: false,
  loading: () => (
    <div style={{ 
      height: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      background: "white",
      color: "black"
    }}>
      Loading Resume...
    </div>
  ),
});

const Page = () => {
  return (
    <div style={{ height: "100%" }}>
      <Resume />
    </div>
  );
};

export default Page;

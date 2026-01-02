"use client";

import dynamic from "next/dynamic";

// #region agent log
const log = (msg: string, data: any) => { fetch('http://127.0.0.1:7243/ingest/d660db73-b79e-4303-86a5-191f6c312f66',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'resume/page.tsx:8',message:msg,data:data,timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{}); };
// #endregion

// Make Resume component client-side only to avoid React version conflicts
const Resume = dynamic(() => {
  // #region agent log
  log('Dynamic import started', {});
  // #endregion
  return import("app/components/Resume").then(module => {
    // #region agent log
    log('Dynamic import success', { hasDefault: !!module.default, keys: Object.keys(module) });
    // #endregion
    return module;
  }).catch(error => {
    // #region agent log
    log('Dynamic import error', { error: error.message, stack: error.stack });
    // #endregion
    throw error;
  });
}, {
  ssr: false,
  loading: () => {
    // #region agent log
    log('Loading state rendered', {});
    // #endregion
    return (
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
    );
  },
});

const Page = () => {
  // #region agent log
  log('Page component rendered', {});
  // #endregion
  return (
    <div style={{ height: "100%" }}>
      <Resume />
    </div>
  );
};

export default Page;

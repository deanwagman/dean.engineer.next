"use client";

// #region agent log
const log = (msg: string, data: any) => { fetch('http://127.0.0.1:7243/ingest/d660db73-b79e-4303-86a5-191f6c312f66',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Resume/index.tsx:8',message:msg,data:data,timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'B'})}).catch(()=>{}); };
// #endregion

import React, { useState, useEffect } from "react";

// #region agent log
log('Before resumeData import', {});
// #endregion
import { resumeData } from "./resumeData";
// #region agent log
log('resumeData imported', { hasData: !!resumeData, keys: resumeData ? Object.keys(resumeData) : [] });
// #endregion

// Main Resume component with professional HTML layout
const Resume = () => {
  // #region agent log
  log('Resume component function called', {});
  // #endregion
  const [isClient, setIsClient] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  useEffect(() => {
    // #region agent log
    log('useEffect called, setting isClient to true', {});
    // #endregion
    setIsClient(true);
  }, []);

  const handleDownloadPDF = async () => {
    // #region agent log
    log('handleDownloadPDF called', {});
    // #endregion
    setIsGeneratingPDF(true);
    try {
      // #region agent log
      log('Before dynamic PDF imports', {});
      // #endregion
      // Lazy load PDF dependencies only when needed
      const [{ pdf }, { default: ResumePDF }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("./ResumePDF")
      ]);
      // #region agent log
      log('PDF imports loaded', { hasPdf: typeof pdf === 'function', hasResumePDF: !!ResumePDF });
      // #endregion
      // #region agent log
      log('Before pdf() call', {});
      // #endregion
      const blob = await pdf(<ResumePDF />).toBlob();
      // #region agent log
      log('pdf() call success', { blobSize: blob?.size });
      // #endregion
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Dean_Wagman_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error: any) {
      // #region agent log
      log('PDF generation error', { error: error?.message, stack: error?.stack });
      // #endregion
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  if (!isClient) {
    // #region agent log
    log('Rendering loading state (isClient=false)', {});
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
  }

  // #region agent log
  log('Before destructuring resumeData', { hasResumeData: !!resumeData });
  // #endregion
  let header, summary, skills, experience, education;
  try {
    ({ header, summary, skills, experience, education } = resumeData);
    // #region agent log
    log('resumeData destructured successfully', { hasHeader: !!header, hasSummary: !!summary, hasSkills: !!skills, hasExperience: !!experience, hasEducation: !!education });
    // #endregion
  } catch (error: any) {
    // #region agent log
    log('resumeData destructuring error', { error: error?.message, stack: error?.stack });
    // #endregion
    throw error;
  }

  // #region agent log
  log('Rendering main resume content', {});
  // #endregion
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      background: "white",
      color: "black",
      padding: "2rem",
      overflow: "auto",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem", borderBottom: "2px solid #65000B", paddingBottom: "1rem" }}>
          <h1 style={{ fontSize: "2.5rem", color: "#65000B", marginBottom: "0.5rem", fontWeight: "bold" }}>
            {header.name}
          </h1>
          <h2 style={{ fontSize: "1.5rem", color: "#CD5C5C", marginBottom: "1rem", fontWeight: "bold" }}>
            {header.title}
          </h2>
          <div style={{ fontSize: "1rem", color: "#666", lineHeight: "1.6" }}>
            <p>📧 {header.contact.email}</p>
            <p>📱 {header.contact.phone}</p>
            <p>🌐 {header.contact.website}</p>
            <p>📍 {header.contact.location}</p>
          </div>
        </div>

        {/* Professional Summary */}
        <section style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.5rem", color: "#CD5C5C", marginBottom: "1rem", fontWeight: "bold", borderBottom: "1px solid #F08080", paddingBottom: "0.5rem" }}>
            Professional Summary
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", textAlign: "justify" }}>
            {summary}
          </p>
        </section>

        {/* Technical Skills */}
        <section style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.5rem", color: "#CD5C5C", marginBottom: "1rem", fontWeight: "bold", borderBottom: "1px solid #F08080", paddingBottom: "0.5rem" }}>
            Technical Skills
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            <div>
              <h4 style={{ fontSize: "1.2rem", color: "#F08080", marginBottom: "0.5rem", fontWeight: "bold" }}>Languages</h4>
              <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>{skills.languages}</p>
            </div>
            <div>
              <h4 style={{ fontSize: "1.2rem", color: "#F08080", marginBottom: "0.5rem", fontWeight: "bold" }}>Frameworks</h4>
              <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>{skills.frameworks}</p>
            </div>
            <div>
              <h4 style={{ fontSize: "1.2rem", color: "#F08080", marginBottom: "0.5rem", fontWeight: "bold" }}>Databases</h4>
              <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>{skills.databases}</p>
            </div>
            <div>
              <h4 style={{ fontSize: "1.2rem", color: "#F08080", marginBottom: "0.5rem", fontWeight: "bold" }}>Cloud & Tools</h4>
              <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>{skills.cloudTools}</p>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.5rem", color: "#CD5C5C", marginBottom: "1rem", fontWeight: "bold", borderBottom: "1px solid #F08080", paddingBottom: "0.5rem" }}>
            Professional Experience
          </h3>
          {experience.map((job, index) => (
            <div key={index} style={{ marginBottom: "1.5rem" }}>
              <h4 style={{ fontSize: "1.3rem", color: "#65000B", marginBottom: "0.5rem", fontWeight: "bold" }}>
                {job.title}
              </h4>
              <p style={{ fontSize: "1rem", color: "#F08080", marginBottom: "0.5rem", fontWeight: "bold" }}>
                {job.company} | {job.location} | {job.period}
              </p>
              <ul style={{ fontSize: "1rem", lineHeight: "1.6", marginLeft: "1rem" }}>
                {job.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education */}
        <section>
          <h3 style={{ fontSize: "1.5rem", color: "#CD5C5C", marginBottom: "1rem", fontWeight: "bold", borderBottom: "1px solid #F08080", paddingBottom: "0.5rem" }}>
            Education
          </h3>
          <div>
            <h4 style={{ fontSize: "1.3rem", color: "#65000B", marginBottom: "0.5rem", fontWeight: "bold" }}>
              {education.degree}
            </h4>
            <p style={{ fontSize: "1rem", color: "#F08080", fontWeight: "bold" }}>
              {education.school} | {education.year}
            </p>
          </div>
        </section>

        {/* Print and Download Buttons */}
        <div style={{ textAlign: "center", marginTop: "2rem", paddingTop: "1rem", borderTop: "1px solid #ddd", display: "flex", gap: "1rem", justifyContent: "center" }}>
          <button
            onClick={() => window.print()}
            style={{
              backgroundColor: "#65000B",
              color: "white",
              padding: "0.75rem 1.5rem",
              border: "none",
              borderRadius: "0.5rem",
              fontSize: "1rem",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Print Resume
          </button>
          <button
            onClick={handleDownloadPDF}
            disabled={isGeneratingPDF}
            style={{
              backgroundColor: isGeneratingPDF ? "#999" : "#65000B",
              color: "white",
              padding: "0.75rem 1.5rem",
              border: "none",
              borderRadius: "0.5rem",
              fontSize: "1rem",
              cursor: isGeneratingPDF ? "not-allowed" : "pointer",
              fontWeight: "bold",
              opacity: isGeneratingPDF ? 0.6 : 1
            }}
          >
            {isGeneratingPDF ? "Generating PDF..." : "Download PDF"}
          </button>
        </div>
      </div >
    </div >
  );
};

export default Resume;
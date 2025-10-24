"use client";

import React, { useState, useEffect } from "react";

// Main Resume component with professional HTML layout
const Resume = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
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
            Dean Wagman
          </h1>
          <h2 style={{ fontSize: "1.5rem", color: "#CD5C5C", marginBottom: "1rem", fontWeight: "bold" }}>
            Senior Software Engineer
          </h2>
          <div style={{ fontSize: "1rem", color: "#666", lineHeight: "1.6" }}>
            <p>📧 deanwagman@gmail.com</p>
            <p>📱 +1 (407) 325-9770</p>
            <p>🌐 https://dean.engineer/</p>
            <p>📍 San Francisco, CA</p>
          </div>
        </div>

        {/* Professional Summary */}
        <section style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.5rem", color: "#CD5C5C", marginBottom: "1rem", fontWeight: "bold", borderBottom: "1px solid #F08080", paddingBottom: "0.5rem" }}>
            Professional Summary
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", textAlign: "justify" }}>
            Experienced Senior Software Engineer specializing in full-stack development, technical leadership, and cross-functional collaboration.
            Skilled in TypeScript, NestJS, NextJS, Python, Express.js, React Native (including Expo), and AWS. Adept at gathering and refining
            requirements, challenging assumptions, and delivering high-impact solutions. Passionate about driving innovation, improving workflows,
            and mentoring teams to success. Advocate for Agile methodologies to enhance productivity and align development with business goals.
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
              <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>JavaScript, TypeScript, Python, Java, C++, Go</p>
            </div>
            <div>
              <h4 style={{ fontSize: "1.2rem", color: "#F08080", marginBottom: "0.5rem", fontWeight: "bold" }}>Frameworks</h4>
              <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>React, Next.js, Node.js, Express, NestJS, React Native</p>
            </div>
            <div>
              <h4 style={{ fontSize: "1.2rem", color: "#F08080", marginBottom: "0.5rem", fontWeight: "bold" }}>Databases</h4>
              <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>PostgreSQL, MongoDB, Redis, MySQL</p>
            </div>
            <div>
              <h4 style={{ fontSize: "1.2rem", color: "#F08080", marginBottom: "0.5rem", fontWeight: "bold" }}>Cloud & Tools</h4>
              <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>AWS, Vercel, Docker, Kubernetes, Git, Webpack, Three.js, WebGL, OpenAI API, Playwright</p>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.5rem", color: "#CD5C5C", marginBottom: "1rem", fontWeight: "bold", borderBottom: "1px solid #F08080", paddingBottom: "0.5rem" }}>
            Professional Experience
          </h3>


          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ fontSize: "1.3rem", color: "#65000B", marginBottom: "0.5rem", fontWeight: "bold" }}>
              Software Engineer
            </h4>
            <p style={{ fontSize: "1rem", color: "#F08080", marginBottom: "0.5rem", fontWeight: "bold" }}>
              Swamp Labs | San Francisco, CA / Orlando, FL | December 2024 - Current
            </p>
            <ul style={{ fontSize: "1rem", lineHeight: "1.6", marginLeft: "1rem" }}>
              <li>We design and build iOS and web applications that are reliable, fast, and thoughtfully made.</li>
              <li>Our work balances clean design with practical engineering, focusing on clarity and long-term maintainability.</li>
              <li>We care about the details — how things look, feel, and perform in the real world.</li>
            </ul>
          </div>


          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ fontSize: "1.3rem", color: "#65000B", marginBottom: "0.5rem", fontWeight: "bold" }}>
              Senior Software Engineer
            </h4>
            <p style={{ fontSize: "1rem", color: "#F08080", marginBottom: "0.5rem", fontWeight: "bold" }}>
              Beacon AI | San Francisco, CA | December 2024 - September 2025
            </p>
            <ul style={{ fontSize: "1rem", lineHeight: "1.6", marginLeft: "1rem" }}>
              <li>Drove the development of high-performance web applications with a focus on scalability, maintainability, and end-user experience</li>
              <li>Designed and implemented interactive data visualizations using modern JavaScript frameworks and 3D rendering libraries</li>
              <li>Optimized front-end architecture in React and TypeScript, improving responsiveness across large displays and diverse device types</li>
              <li>Strengthened system reliability by integrating end-to-end test automation (Playwright) into the CI/CD pipeline</li>
              <li>Specialized in CesiumJS, WebSockets, Service Workers, and advanced visualization tooling</li>
            </ul>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ fontSize: "1.3rem", color: "#65000B", marginBottom: "0.5rem", fontWeight: "bold" }}>
              Senior Software Engineer / Manufacturing Apps Tech Lead
            </h4>
            <p style={{ fontSize: "1rem", color: "#F08080", marginBottom: "0.5rem", fontWeight: "bold" }}>
              Moxion Power | San Francisco, CA | October 2023 - August 2024
            </p>
            <ul style={{ fontSize: "1rem", lineHeight: "1.6", marginLeft: "1rem" }}>
              <li>Led the end-to-end development of "Unity," a full-stack application for manufacturing teams to track Battery Units</li>
              <li>Architected a robust resource filtering system for managing Battery Units, Rental Reservations, Faults, Alerts, Accounts, and Users</li>
              <li>Developed a comprehensive PDF document generation system, allowing users to create customized templates</li>
              <li>Engineered a File Upload workflow supporting drag-and-drop, file selection, and pasting functionalities</li>
              <li>Served as Tech Lead for manufacturing applications, making architectural decisions and providing support</li>
            </ul>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ fontSize: "1.3rem", color: "#65000B", marginBottom: "0.5rem", fontWeight: "bold" }}>
              Senior Software Engineer
            </h4>
            <p style={{ fontSize: "1rem", color: "#F08080", marginBottom: "0.5rem", fontWeight: "bold" }}>
              Tesla | San Francisco, CA | November 2020 - December 2022
            </p>
            <ul style={{ fontSize: "1rem", lineHeight: "1.6", marginLeft: "1rem" }}>
              <li>Scaled applications by developing internal libraries and reusable components, improving code reusability by 30%</li>
              <li>Managed internationalization for applications, supporting 10+ languages for new launches</li>
              <li>Developed a React Native iPad application for scheduling vehicle test drives</li>
              <li>Led the styling of the vehicle ordering web application experience in mobile applications</li>
              <li>Resolved performance issues through research and iteration, increasing app speed by 20%</li>
            </ul>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ fontSize: "1.3rem", color: "#65000B", marginBottom: "0.5rem", fontWeight: "bold" }}>
              Software Engineer
            </h4>
            <p style={{ fontSize: "1rem", color: "#F08080", marginBottom: "0.5rem", fontWeight: "bold" }}>
              Uber Eats | San Francisco, CA | April 2019 - May 2020
            </p>
            <ul style={{ fontSize: "1rem", lineHeight: "1.6", marginLeft: "1rem" }}>
              <li>Led and delivered the development of the Promotions feature, enabling users to benefit from special offers</li>
              <li>Led and developed the storefront filtering system, allowing users to filter feeds by rating, price, dietary restrictions</li>
              <li>Collaborated with design and product teams to ensure efficient project delivery</li>
              <li>Supported the rollout of a redesigned application utilizing internal libraries and tools</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 style={{ fontSize: "1.5rem", color: "#CD5C5C", marginBottom: "1rem", fontWeight: "bold", borderBottom: "1px solid #F08080", paddingBottom: "0.5rem" }}>
            Education
          </h3>
          <div>
            <h4 style={{ fontSize: "1.3rem", color: "#65000B", marginBottom: "0.5rem", fontWeight: "bold" }}>
              Bachelor of Arts in Humanities/Humanistic Studies
            </h4>
            <p style={{ fontSize: "1rem", color: "#F08080", fontWeight: "bold" }}>
              Florida State University | 2012
            </p>
          </div>
        </section>

        {/* Print Button */}
        <div style={{ textAlign: "center", marginTop: "2rem", paddingTop: "1rem", borderTop: "1px solid #ddd" }}>
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
        </div>
      </div >
    </div >
  );
};

export default Resume;
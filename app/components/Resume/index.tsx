"use client";

import dynamic from "next/dynamic";

import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

// Create styles
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  page: {
    padding: 30,
  },
  section: {
    marginTop: 10,
  },
  subSection: {
    paddingTop: 30,
  },
  header: {
    fontSize: 24,
    marginBottom: 15,
    color: "#65000B",
  },
  subHeader: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    color: "#CD5C5C",
  },
  subHeaderDetail: {
    marginBottom: 15,
    color: "#F08080",
    textTransform: "uppercase",
    fontSize: 10,
    lineHeight: 1.5,
  },
  text: {
    fontSize: 10,
    marginBottom: 5,
    lineHeight: 1.5,
  },
  listItem: {
    marginBottom: 5,
    fontSize: 10,
    lineHeight: 1.5,
  },
  list: {
    marginLeft: 15,
    marginBottom: 10,
  },
  contact: {
    fontSize: 10,
    marginBottom: 5,
    color: "#F08080",
  },
});

// Create Document Component
const MyDocument = () => (
  <PDFViewer style={styles.container}>
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>DEAN WAGMAN</Text>
          <Text style={styles.contact}>https://dean.engineer/</Text>
          <Text style={styles.contact}>deanwagman@gmail.com</Text>
          <Text style={styles.contact}>+1 (407) 325-9770</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeader}>Summary</Text>
          <Text style={styles.text}>
            Experienced Senior Software Engineer specializing in full-stack
            development, technical leadership, and cross-functional
            collaboration. Skilled in TypeScript, NestJS, NextJS, Python,
            Express.js, React Native (including Expo), and AWS. Adept at
            gathering and refining requirements, challenging assumptions, and
            delivering high-impact solutions. Passionate about driving
            innovation, improving workflows, and mentoring teams to success.
            Advocate for Agile methodologies to enhance productivity and align
            development with business goals.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeader}>Skills</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              • Full-Stack Development: JavaScript, TypeScript, React, React
              Native, NestJS, NextJS, Node.js, Python, Express.js
            </Text>
            <Text style={styles.listItem}>
              • UI/UX Design: Material UI, Responsive Design, Component
              Libraries (including experience building custom component
              libraries)
            </Text>
            <Text style={styles.listItem}>
              • Cloud & DevOps: AWS (EC2, RDS, S3, Lambda), Docker,
              Containerization, CI/CD, CDK for Terraform
            </Text>
            <Text style={styles.listItem}>
              • Backend & APIs: RESTful Services, GraphQL, Microservices
              Architecture
            </Text>
            <Text style={styles.listItem}>
              • Database Management: SQL, PostgreSQL, TypeORM, NoSQL Databases
            </Text>
            <Text style={styles.listItem}>
              • Version Control & Collaboration: Git, GitHub, Bitbucket, Code
              Reviews
            </Text>
            <Text style={styles.listItem}>
              • Agile Methodologies: Scrum, Kanban, Sprint Planning, Iteration
              Cycles
            </Text>
            <Text style={styles.listItem}>
              • Testing & Quality Assurance: Unit Testing, Integration Testing,
              Automated Testing Frameworks
            </Text>
            <Text style={styles.listItem}>
              • Tooling & Workflow Optimization: JIRA, Confluence, Trello,
              Continuous Integration
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.subSection}>
            <Text style={styles.subHeader}>Professional Experience</Text>

            <Text style={styles.subHeaderDetail}>
              Moxion Power | Senior Software Engineer / Manufacturing Apps Tech
              Lead | October 2023 - August 2024
            </Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>
                • Led the end-to-end development of “Unity,” a full-stack
                application for manufacturing teams to track Battery Units
                throughout their lifecycle. Engaged with stakeholders to gather
                requirements, challenge assumptions, and refine features.
                Migrated teams from spreadsheets to a unified platform on AWS,
                improving collaboration and scalability.
              </Text>
              <Text style={styles.listItem}>
                • Architected a robust resource filtering system for managing
                Battery Units, Rental Reservations, Faults, Alerts, Accounts,
                and Users. Included advanced features like saving/sharing
                filters and integrated pagination for optimized performance.
              </Text>
              <Text style={styles.listItem}>
                • Developed a comprehensive PDF document generation system,
                allowing users to create customized templates, collect form
                data, and generate documents. Integrated with backend services
                for centralized record-keeping, enhancing operational
                efficiency.
              </Text>
              <Text style={styles.listItem}>
                • Engineered a File Upload workflow supporting drag-and-drop,
                file selection, and pasting functionalities, with validation for
                file type and size, ensuring streamlined user interaction and
                data integrity.
              </Text>
              <Text style={styles.listItem}>
                • Spearheaded the adoption of Agile methodologies, reducing
                development timelines and improving iteration cycles, aligning
                products more closely with user needs.
              </Text>
              <Text style={styles.listItem}>
                • Served as Tech Lead for manufacturing applications from April
                2024 onwards, making architectural decisions, incorporating team
                feedback, and providing support across initiatives.
              </Text>
            </View>
          </View>

          <View style={styles.subSection}>
            <Text style={styles.subHeaderDetail}>
              Tesla | Senior Software Engineer | November 2020 - December 2022
            </Text>

            <View style={styles.list}>
              <Text style={styles.listItem}>
                • Scaled applications by developing internal libraries and
                reusable components, improving code reusability by 30%. Created
                a structured approach for identifying components suitable for
                reuse, documented them comprehensively, and integrated them
                across multiple projects.
              </Text>
              <Text style={styles.listItem}>
                • Managed internationalization for applications, supporting 10+
                languages for new launches, and added the ability to display
                multiple currencies. Coordinated with regional stakeholders to
                ensure accurate localization and currency conversions, resulting
                in improved user experience for global customers.
              </Text>
              <Text style={styles.listItem}>
                • Developed a React Native iPad application for scheduling
                vehicle test drives, streamlining the process. This involved
                integrating backend services, ensuring data synchronization, and
                optimizing the app for a seamless user interface.
              </Text>
              <Text style={styles.listItem}>
                • Led the styling of the vehicle ordering web application
                experience in our mobile applications with a team of junior
                engineers. Provided mentorship, conducted regular code reviews,
                and ensured adherence to best practices, significantly improving
                design consistency.
              </Text>
              <Text style={styles.listItem}>
                • Resolved performance issues through research and iteration,
                increasing app speed by 20%. Leveraged profiling tools to
                identify bottlenecks and implemented optimizations such as lazy
                loading and efficient data fetching.
              </Text>
            </View>
          </View>

          <View style={styles.subSection}>
            <Text style={styles.subHeaderDetail}>
              Uber Eats | Software Engineer | April 2019 - May 2020
            </Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>
                • Led and delivered the development of the Promotions feature,
                enabling users to benefit from special offers and discounts.
                Worked closely with cross-functional teams to define
                requirements, develop the architecture, and ensure seamless
                integration with the existing platform.
              </Text>
              <Text style={styles.listItem}>
                • Led and developed the storefront filtering system, which
                allowed users to filter feeds by rating, price, dietary
                restrictions, and sorting. Collaborated with product managers
                and UX designers to create an intuitive user experience, leading
                to increased user engagement and satisfaction.
              </Text>
              <Text style={styles.listItem}>
                • Collaborated with design and product teams to ensure efficient
                project delivery, providing technical guidance and aligning
                efforts to meet tight deadlines.
              </Text>
              <Text style={styles.listItem}>
                • Supported the rollout of a redesigned application utilizing
                internal libraries and tools, ensuring smooth deployment and
                minimizing disruptions.
              </Text>
            </View>
          </View>

          <View style={styles.subSection}>
            <Text style={styles.subHeaderDetail}>
              Helix | Web Engineer | May 2017 - January 2019
            </Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>
                • Led the development of multiple retail microsites, including
                holiday-themed sites. Delivered these projects on tight
                deadlines while ensuring a high-quality user experience and
                responsive design.
              </Text>
              <Text style={styles.listItem}>
                • Led store migration from a custom solution to Shopify,
                improving operational efficiency by reducing manual processes
                and enhancing scalability. Worked closely with stakeholders to
                identify key features and ensure a seamless transition.
              </Text>
              <Text style={styles.listItem}>
                • Implemented an A/B testing framework for evaluating design and
                feature changes, enabling data-driven decision-making that
                improved conversion rates and user engagement.
              </Text>
              <Text style={styles.listItem}>
                • Introduced code linting guidelines and tools for large
                projects with multiple contributors, which standardized code
                quality and reduced bugs during development, ultimately leading
                to faster and more maintainable code.
              </Text>
            </View>
          </View>

          <View style={styles.subSection}>
            <Text style={styles.subHeaderDetail}>
              Purple, Rock, Scissors | Web Engineer | August 2014 - October 2016
            </Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>
                • Developed websites, web applications, and content management
                systems for clients across industries. Focused on ensuring
                responsive design, user-friendly interfaces, and scalability to
                meet client needs.
              </Text>
              <Text style={styles.listItem}>
                • Worked with content management and eCommerce solutions like
                WordPress, Drupal, Expression Engine, Magento, and
                Microsoft&rsquo;s .NET.
              </Text>
              <Text style={styles.listItem}>
                • Collaborated with cross-functional teams to deliver 5+ major
                projects on time, involving designers, project managers, and QA
                teams to ensure all requirements were met and high-quality
                standards were achieved.
              </Text>
              <Text style={styles.listItem}>
                • Led engineering department meetings, including working with
                the CTO to set agendas, coordinate educational presentations,
                and facilitate knowledge sharing among team members to promote
                professional growth.
              </Text>
              <Text style={styles.listItem}>
                • Hosted and implemented hackathons to foster continuous
                learning and provide exposure to new technologies, driving
                innovation and team engagement.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeader}>Education</Text>
          <Text style={styles.text}>
            Bachelor of Arts in Humanities/Humanistic Studies, Florida State
            University (2012)
          </Text>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default MyDocument;

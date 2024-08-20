"use client";

import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginTop: 10,
  },
  header: {
    fontSize: 24,
    marginBottom: 15,
    color: "#5B1D2A",
  },
  subHeader: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    color: "#EF3C44",
  },
  subHeaderDetail: {
    marginBottom: 15,
    color: "#5B1D2A ",
    textTransform: "uppercase",
    fontSize: 12,
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
});

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
};

// Create Document Component
const MyDocument = () => (
  <PDFViewer style={containerStyle}>
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>DEAN WAGMAN</Text>
          <Text style={styles.text}>https://dean.engineer/</Text>
          <Text style={styles.text}>deanwagman@gmail.com</Text>
          <Text style={styles.text}>+1 (407) 325-9770</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeader}>Summary</Text>
          <Text style={styles.text}>
            Highly skilled Senior Software Engineer with a proven track record
            in full-stack development, technical leadership, and
            cross-functional collaboration. Expertise in building scalable and
            user-centric applications using modern technologies such as React,
            TypeScript, and NestJS. Adept at leading projects from concept to
            deployment, with a strong focus on gathering and refining
            requirements, challenging assumptions, and delivering high-impact
            solutions. Passionate about driving innovation, improving workflows,
            and mentoring teams to achieve success. Strong advocate for Agile
            methodologies, enhancing productivity and aligning development
            efforts with business goals.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subHeader}>Skills</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              • Full-Stack Development: JavaScript, TypeScript, React, NestJS,
              Node.js
            </Text>
            <Text style={styles.listItem}>
              • UI/UX Design: Material UI, Responsive Design, Component
              Libraries
            </Text>
            <Text style={styles.listItem}>
              • Cloud & DevOps: AWS (EC2, RDS), Containerization, CI/CD
            </Text>
            <Text style={styles.listItem}>
              • Backend & APIs: RESTful Services, GraphQL, Microservices
              Architecture
            </Text>
            <Text style={styles.listItem}>
              • Database Management: SQL, PostgreSQL, NoSQL Databases
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
          <Text style={styles.subHeader}>Experience</Text>

          <Text style={styles.subHeaderDetail}>
            Moxion Power | Sr. Software Engineer | November 2023 - August 2024
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              • Led the end-to-end development of "Unity," a full-stack
              application designed for manufacturing teams to track and log
              details of Battery Units throughout their pre-delivery lifecycle.
              This project involved direct engagement with stakeholders to
              gather requirements, challenge assumptions, and refine core
              features. Successfully migrated teams from disparate spreadsheets
              to a unified platform deployed on AWS, enabling enhanced
              collaboration and scalability.
            </Text>
            <Text style={styles.listItem}>
              • Architected and implemented a robust resource filtering system
              for the primary application, enabling users to efficiently filter
              and manage various resources such as Battery Units, Rental
              Reservations, Faults, Alerts, Accounts, and Users. The system
              featured advanced functionalities like saving, sharing filters,
              and integrated pagination for optimized performance.
            </Text>
            <Text style={styles.listItem}>
              • Developed a comprehensive PDF document generation system,
              allowing users to create customized PDF templates, collect form
              data, and render documents for download. Integrated the system
              with backend services to support centralized persistence and
              record-keeping, enhancing operational efficiency.
            </Text>
            <Text style={styles.listItem}>
              • Engineered a cohesive File Upload workflow that supported
              drag-and-drop, file selection, and pasting functionalities,
              complete with validation for file type and size. This streamlined
              user interaction and ensured data integrity.
            </Text>
            <Text style={styles.listItem}>
              • Spearheaded the adoption of an Agile methodology, transitioning
              the team from a traditional Waterfall approach. This shift
              resulted in shorter development timelines, more frequent iteration
              cycles, and products better aligned with user needs.
            </Text>
            <Text style={styles.listItem}>
              • Served as the Tech Lead on multiple projects, making key
              architectural decisions, gathering and incorporating feedback from
              team members, and providing support across various initiatives.
            </Text>
          </View>

          <Text style={styles.subHeaderDetail}>
            Tesla | Sr. Software Engineer | November 2020 - December 2022
          </Text>

          <View style={styles.list}>
            <Text style={styles.listItem}>
              • Scaled applications to utilize internal libraries and
              components, improving code reusability by 30%.
            </Text>
            <Text style={styles.listItem}>
              • Managed internationalization for applications, supporting 10+
              languages for new launches.
            </Text>
            <Text style={styles.listItem}>
              • Developed a React Native iPad application for scheduling vehicle
              test drives, streamlining the process.
            </Text>
            <Text style={styles.listItem}>
              • Implemented appointment management features, increasing sales
              associate efficiency by 25%.
            </Text>
            <Text style={styles.listItem}>
              • Led the architecture of menu and navigation stack, enhancing
              user experience and app performance.
            </Text>
            <Text style={styles.listItem}>
              • Overcame performance issues through research, experimentation,
              and iteration, increasing app speed by 20%.
            </Text>
          </View>

          <Text style={styles.subHeaderDetail}>
            Uber Eats | Software Engineer | April 2019 - May 2020
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              • Contributed to the consumer website, where users could search,
              sort, filter, favorite, order, checkout, and track their orders.
            </Text>
            <Text style={styles.listItem}>
              • Improved website performance by refactoring and optimizing
              codebase, reducing load time by 15%.
            </Text>
            <Text style={styles.listItem}>
              • Collaborated with cross-functional teams to ensure efficient
              delivery of projects.
            </Text>
          </View>

          <Text style={styles.subHeaderDetail}>
            Helix | Web Engineer | May 2017 - January 2019
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              • Led the development of multiple retail microsites, including
              holiday-themed sites.
            </Text>
            <Text style={styles.listItem}>
              • Redesigned features to improve the user experience and align
              with business goals.
            </Text>
            <Text style={styles.listItem}>
              • Initiated code linting guidelines and tools for large projects
              with multiple contributors.
            </Text>
          </View>

          <Text style={styles.subHeaderDetail}>
            Purple, Rock, Scissors | Web Engineer | August 2014 - October 2016
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              • Developed visually stunning websites, web applications, and
              content management systems for various types of clients.
            </Text>
            <Text style={styles.listItem}>
              • Maintained familiarity with content management and eCommerce
              solutions such as WordPress, Drupal, Expression Engine, and
              Magento.
            </Text>
            <Text style={styles.listItem}>
              • Developed requirements and planning documentation.
            </Text>
            <Text style={styles.listItem}>
              • Collaborated with cross-functional teams, ensuring timely
              delivery of 5+ major projects.
            </Text>
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

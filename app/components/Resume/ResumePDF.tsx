"use client";

import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { resumeData } from "./resumeData";

const styles = StyleSheet.create({
  page: {
    padding: 35,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#000000",
  },
  header: {
    marginBottom: 15,
    borderBottom: "2px solid #65000B",
    paddingBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#65000B",
    textAlign: "center",
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#CD5C5C",
    textAlign: "center",
    marginBottom: 8,
  },
  contact: {
    fontSize: 10,
    color: "#666666",
    textAlign: "center",
    lineHeight: 1.5,
  },
  contactLine: {
    marginBottom: 2,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#CD5C5C",
    marginBottom: 6,
    borderBottom: "1px solid #F08080",
    paddingBottom: 3,
  },
  summaryText: {
    fontSize: 10,
    lineHeight: 1.5,
    textAlign: "justify",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillCategory: {
    width: "48%",
    marginBottom: 8,
    marginRight: "2%",
  },
  skillCategoryTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#F08080",
    marginBottom: 3,
  },
  skillText: {
    fontSize: 10,
    lineHeight: 1.4,
  },
  jobContainer: {
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#65000B",
    marginBottom: 2,
  },
  jobCompany: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#F08080",
    marginBottom: 4,
  },
  bulletList: {
    marginLeft: 10,
    marginTop: 4,
  },
  bulletItem: {
    fontSize: 10,
    lineHeight: 1.4,
    marginBottom: 2,
  },
  educationDegree: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#65000B",
    marginBottom: 3,
  },
  educationSchool: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#F08080",
  },
});

const ResumePDF = () => {
  const { header, summary, skills, experience, education } = resumeData;

  // Split experience into pages strategically
  // Page 1: Header, Summary, Skills, first job only
  // Page 2: Next 3 jobs
  // Page 3: Remaining 3 jobs + Education

  return (
    <Document>
      {/* Page 1: Header, Summary, Skills, First job */}
      <Page size="LETTER" style={styles.page}>
        {/* Header */}
        <View style={styles.header} wrap={false}>
          <Text style={styles.name}>{header.name}</Text>
          <Text style={styles.title}>{header.title}</Text>
          <View style={styles.contact}>
            <Text style={styles.contactLine}>
              Email: {header.contact.email}
            </Text>
            <Text style={styles.contactLine}>
              Phone: {header.contact.phone}
            </Text>
            <Text style={styles.contactLine}>
              Website: {header.contact.website}
            </Text>
            <Text style={styles.contactLine}>
              Location: {header.contact.location}
            </Text>
          </View>
        </View>

        {/* Professional Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summaryText}>{summary}</Text>
        </View>

        {/* Technical Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          <View style={styles.skillsContainer}>
            <View style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>Languages</Text>
              <Text style={styles.skillText}>{skills.languages}</Text>
            </View>
            <View style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>Frameworks</Text>
              <Text style={styles.skillText}>{skills.frameworks}</Text>
            </View>
            <View style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>Databases</Text>
              <Text style={styles.skillText}>{skills.databases}</Text>
            </View>
            <View style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>Cloud & Tools</Text>
              <Text style={styles.skillText}>{skills.cloudTools}</Text>
            </View>
          </View>
        </View>

        {/* Professional Experience - First job only */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience (continued on next page)</Text>
          {experience.slice(0, 1).map((job, index) => (
            <View key={index} style={styles.jobContainer}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.jobCompany}>
                {job.company} | {job.location} | {job.period}
              </Text>
              <View style={styles.bulletList}>
                {job.bullets.map((bullet, bulletIndex) => (
                  <Text key={bulletIndex} style={styles.bulletItem}>
                    • {bullet}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>
      </Page>

      {/* Page 2: Next 3 jobs */}
      <Page size="LETTER" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience (continued)</Text>
          {experience.slice(1, 4).map((job, index) => (
            <View key={index + 1} style={styles.jobContainer}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.jobCompany}>
                {job.company} | {job.location} | {job.period}
              </Text>
              <View style={styles.bulletList}>
                {job.bullets.map((bullet, bulletIndex) => (
                  <Text key={bulletIndex} style={styles.bulletItem}>
                    • {bullet}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>
      </Page>

      {/* Page 3: Remaining 3 jobs + Education */}
      <Page size="LETTER" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience (continued)</Text>
          {experience.slice(4).map((job, index) => (
            <View key={index + 4} style={styles.jobContainer}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.jobCompany}>
                {job.company} | {job.location} | {job.period}
              </Text>
              <View style={styles.bulletList}>
                {job.bullets.map((bullet, bulletIndex) => (
                  <Text key={bulletIndex} style={styles.bulletItem}>
                    • {bullet}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <Text style={styles.educationDegree}>{education.degree}</Text>
          <Text style={styles.educationSchool}>
            {education.school} | {education.year}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;


"use client";

import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { resumeData } from "@/app/data/resumeData";
import { formatJobMeta } from "@/app/data/resumeUtils";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#000000",
  },
  header: {
    marginBottom: 12,
    borderBottom: "2px solid #65000B",
    paddingBottom: 6,
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
    marginBottom: 6,
  },
  contact: {
    fontSize: 9,
    color: "#666666",
    textAlign: "center",
    lineHeight: 1.4,
  },
  contactLine: {
    marginBottom: 1,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#CD5C5C",
    marginBottom: 5,
    borderBottom: "1px solid #F08080",
    paddingBottom: 2,
  },
  summaryText: {
    fontSize: 10,
    lineHeight: 1.45,
    textAlign: "justify",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillCategory: {
    width: "48%",
    marginBottom: 6,
    marginRight: "2%",
  },
  skillCategoryTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#F08080",
    marginBottom: 2,
  },
  skillText: {
    fontSize: 9,
    lineHeight: 1.35,
  },
  jobContainer: {
    marginBottom: 8,
  },
  jobTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#65000B",
    marginBottom: 2,
  },
  jobCompany: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#F08080",
    marginBottom: 3,
  },
  bulletList: {
    marginLeft: 10,
    marginTop: 2,
  },
  bulletItem: {
    fontSize: 9,
    lineHeight: 1.35,
    marginBottom: 2,
  },
  educationDegree: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#65000B",
    marginBottom: 2,
  },
  educationSchool: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#F08080",
  },
});

const ResumePDF = () => {
  const { header, summary, skills, experience, education } = resumeData;

  return (
    <Document>
      <Page size="LETTER" style={styles.page} wrap>
        <View style={styles.header} wrap={false}>
          <Text style={styles.name}>{header.name}</Text>
          <Text style={styles.title}>{header.title}</Text>
          <View style={styles.contact}>
            <Text style={styles.contactLine}>
              {header.contact.email} · {header.contact.phone}
            </Text>
            <Text style={styles.contactLine}>
              {header.contact.website} · {header.contact.linkedin}
            </Text>
            <Text style={styles.contactLine}>{header.contact.location}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summaryText}>{summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          <View style={styles.skillsContainer}>
            {skills.map(({ category, items }) => (
              <View key={category} style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>{category}</Text>
                <Text style={styles.skillText}>{items}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section} break>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          {experience.map((job, index) => (
            <View key={index} style={styles.jobContainer} wrap={false}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.jobCompany}>{formatJobMeta(job)}</Text>
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

        <View style={styles.section} wrap={false}>
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

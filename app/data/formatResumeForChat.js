import resumeData from "./resume.json";

function formatJobLine(job) {
  const parts = [job.company, job.employmentType, job.title, job.period].filter(
    Boolean
  );
  return `**${parts.join(" | ")}**`;
}

function formatJobLocation(job) {
  return job.location ? ` (${job.location})` : "";
}

export function formatResumeForChat(data = resumeData) {
  const { header, summary, skills, experience, education } = data;
  const { contact } = header;

  const skillsSection = skills
    .map(({ category, items }) => `- **${category}:** ${items}`)
    .join("\n");

  const experienceSection = experience
    .map((job) => {
      const bullets = job.bullets.map((bullet) => `- ${bullet}`).join("\n");
      return `${formatJobLine(job)}${formatJobLocation(job)}\n${bullets}`;
    })
    .join("\n\n");

  return `${header.name}
${contact.website}
${contact.email}
${contact.phone}
LinkedIn: ${contact.linkedin.replace("https://", "")}
Location: ${contact.location}

## Summary
${summary}

## Skills
${skillsSection}

## Professional Experience
${experienceSection}

## Education
**${education.degree}**, ${education.school} (${education.year})`;
}

export default formatResumeForChat;

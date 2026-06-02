import { orbitron } from "../fonts";
import { CenterLayout, DistopiaLayout } from "../components/Layouts";
import { resumeData } from "@/app/data/resumeData";

const Page = () => {
  const { header, summary, skills, experience, education } = resumeData;

  return (
    <DistopiaLayout>
      <CenterLayout>
        <article>
          <h1 data-content={header.name} className={orbitron.className}>
            {header.name}
          </h1>

          <h2>Summary</h2>
          <p>{summary}</p>

          <h2>Skills</h2>
          <ul>
            {skills.map(({ category, items }) => (
              <li key={category}>
                {category}: <br />
                {items}
              </li>
            ))}
          </ul>

          <h2>Professional Experience</h2>

          {experience.map((job) => (
            <section key={`${job.company}-${job.period}`}>
              <h3 className={orbitron.className}>
                {job.company} <br />
                {job.title}
                {job.employmentType ? ` (${job.employmentType})` : ""} <br />
                {job.location} · {job.period}
              </h3>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </section>
          ))}

          <h2>Education</h2>
          <p>
            {education.degree}, {education.school} ({education.year})
          </p>
        </article>
      </CenterLayout>
    </DistopiaLayout>
  );
};

export default Page;

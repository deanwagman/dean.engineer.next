import { orbitron } from "../fonts";
import { CenterLayout, DistopiaLayout } from "../components/Layouts";

const Page = () => {
  return (
    <DistopiaLayout>
      <CenterLayout>
        <article>
          <h1 data-content="Dean Wagman" className={orbitron.className}>
            Dean Wagman
          </h1>

          <h2>Summary</h2>
          <p>
            Senior Software Engineer with over a decade of experience building
            full-stack applications and leading technical initiatives from concept to
            deployment. Skilled in React, TypeScript, NestJS, and Node.js with
            experience across frontend, backend, and cloud infrastructure. Focused on
            writing clean, maintainable code, improving workflows, and delivering
            software that performs well and feels great to use. Strong believer in
            practical Agile processes and collaborative engineering culture.
          </p>

          <h2>Skills</h2>
          <ul>
            <li>
              Full-Stack Development: <br />
              JavaScript, TypeScript, React, React Native, NestJS, NextJS, Node.js,
              Python, Express.js
            </li>
            <li>
              UI/UX Design: <br />
              Material UI, Responsive Design, Component Libraries (including building
              custom design systems)
            </li>
            <li>
              3D Visualization &amp; Real-Time Systems: <br />
              CesiumJS, WebSockets, Service Workers
            </li>
            <li>
              Cloud &amp; DevOps: <br />
              AWS (EC2, RDS, S3, Lambda), Docker, CI/CD, Containerization
            </li>
            <li>
              Backend &amp; APIs: <br />
              RESTful Services, GraphQL, Microservices Architecture
            </li>
            <li>
              Database Management: <br />
              SQL, PostgreSQL, TypeORM, NoSQL Databases
            </li>
            <li>
              Version Control &amp; Collaboration: <br />
              Git, GitHub, Bitbucket, Code Reviews
            </li>
            <li>
              Agile Methodologies: <br />
              Scrum, Kanban, Sprint Planning, Iteration Cycles
            </li>
            <li>
              Testing &amp; Quality Assurance: <br />
              Unit Testing, Integration Testing, Playwright, Automated Frameworks
            </li>
            <li>
              Tooling &amp; Workflow Optimization: <br />
              JIRA, Confluence, Trello, Continuous Integration
            </li>
          </ul>

          <h2>Professional Experience</h2>

          <h3 className={orbitron.className}>
            Beacon AI <br />
            Senior Software Engineer <br />
            December 2024 – September 2025
          </h3>
          <ul>
            <li>
              Developed high-performance web applications with a focus on scalability,
              reliability, and maintainability.
            </li>
            <li>
              Designed and implemented interactive data visualizations and real-time
              system interfaces for internal applications.
            </li>
            <li>
              Improved front-end architecture, accessibility, and responsiveness across
              multiple display formats.
            </li>
            <li>
              Strengthened system stability through automated testing and continuous
              integration.
            </li>
            <li>
              Collaborated with product and design teams to refine requirements and
              deliver user-focused solutions on schedule.
            </li>
          </ul>

          <h3 className={orbitron.className}>
            Moxion Power <br />
            Senior Software Engineer / Manufacturing Product Apps Tech Lead <br />
            October 2023 – August 2024
          </h3>
          <ul>
            <li>
              Led the end-to-end development of “Unity,” a full-stack manufacturing
              application used to track Battery Units throughout production.
            </li>
            <li>
              Architected a resource filtering system and built PDF generation and
              custom file-upload workflows to streamline team operations.
            </li>
            <li>
              Championed the transition from Waterfall to Agile, reducing development
              time and improving iteration speed.
            </li>
            <li>
              Served as Tech Lead for manufacturing applications, guiding architecture
              and mentoring engineers.
            </li>
          </ul>

          <h3 className={orbitron.className}>
            Tesla <br />
            Senior Software Engineer <br />
            November 2020 – December 2022
          </h3>
          <ul>
            <li>
              Built reusable internal component libraries to improve scalability and
              consistency across multiple apps.
            </li>
            <li>
              Managed internationalization for global launches supporting 10+ languages
              and multiple currencies.
            </li>
            <li>
              Developed an iPad application for vehicle test-drive scheduling and led
              interface styling for mobile ordering workflows.
            </li>
            <li>
              Improved performance through profiling, lazy loading, and efficient data
              fetching, increasing app speed by 20%.
            </li>
          </ul>

          <h3 className={orbitron.className}>
            Uber Eats <br />
            Software Engineer <br />
            April 2019 – May 2020
          </h3>
          <ul>
            <li>
              Delivered new user-facing features including Promotions and advanced
              filtering for the consumer web app.
            </li>
            <li>
              Collaborated with product and design teams to align features with user
              needs and business goals.
            </li>
            <li>
              Supported rollout of redesigned applications utilizing shared libraries
              and tools for consistent releases.
            </li>
          </ul>

          <h3 className={orbitron.className}>
            Helix <br />
            Web Engineer <br />
            May 2017 – January 2019
          </h3>
          <ul>
            <li>
              Led development of multiple retail microsites and migrated storefronts to
              Shopify for improved scalability.
            </li>
            <li>
              Implemented A/B testing frameworks and code-quality standards that
              improved reliability and conversion rates.
            </li>
          </ul>

          <h3 className={orbitron.className}>
            Purple, Rock, Scissors <br />
            Web Engineer <br />
            August 2014 – October 2016
          </h3>
          <ul>
            <li>
              Built websites, web apps, and CMS solutions with a focus on responsive
              design and usability.
            </li>
            <li>
              Delivered projects using WordPress, Drupal, Expression Engine, and
              Magento while collaborating with design and project teams.
            </li>
            <li>
              Organized internal engineering meetings and hackathons to promote
              learning and experimentation.
            </li>
          </ul>

          <h2>Education</h2>
          <p>
            Bachelor of Arts in Humanities / Humanistic Studies, Florida State
            University (2012)
          </p>
        </article>
      </CenterLayout>
    </DistopiaLayout>
  );
};

export default Page;

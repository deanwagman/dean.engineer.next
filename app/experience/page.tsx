import { orbitron } from "../fonts";
import { CenterLayout } from "../components/Layouts";

const Page = () => {
  return (
    <CenterLayout>
      <article>
        <h1 data-content="Dean Wagman" className={orbitron.className}>
          Dean Wagman
        </h1>
        <h2>Summary</h2>
        <p>
          Highly skilled Senior Software Engineer with a proven track record in
          full-stack development, technical leadership, and cross-functional
          collaboration. Expertise in building scalable and user-centric
          applications using modern technologies such as React, TypeScript, and
          NestJS. Adept at leading projects from concept to deployment, with a
          strong focus on gathering and refining requirements, challenging
          assumptions, and delivering high-impact solutions. Passionate about
          driving innovation, improving workflows, and mentoring teams to
          achieve success. Strong advocate for Agile methodologies, enhancing
          productivity and aligning development efforts with business goals.
        </p>

        <h2>Skills</h2>
        <ul>
          <li>
            Full-Stack Development: JavaScript, TypeScript, React, NestJS,
            Node.js
          </li>
          <li>
            UI/UX Design: Material UI, Responsive Design, Component Libraries
          </li>
          <li>Cloud & DevOps: AWS (EC2, RDS), Containerization, CI/CD</li>
          <li>
            Backend & APIs: RESTful Services, GraphQL, Microservices
            Architecture
          </li>
          <li>Database Management: SQL, PostgreSQL, NoSQL Databases</li>
          <li>
            Version Control & Collaboration: Git, GitHub, Bitbucket, Code
            Reviews
          </li>
          <li>
            Agile Methodologies: Scrum, Kanban, Sprint Planning, Iteration
            Cycles
          </li>
          <li>
            Testing & Quality Assurance: Unit Testing, Integration Testing,
            Automated Testing Frameworks
          </li>
          <li>
            Tooling & Workflow Optimization: JIRA, Confluence, Trello,
            Continuous Integration
          </li>
        </ul>

        <h2>Experience</h2>

        <h3 className={orbitron.className}>
          Moxion Power | Sr. Software Engineer | November 2023 - August 2024
        </h3>
        <ul>
          <li>
            Led the end-to-end development of &ldquo;Unity,&rdquo; a full-stack
            application designed for manufacturing teams to track and log
            details of Battery Units throughout their pre-delivery lifecycle.
            This project involved direct engagement with stakeholders to gather
            requirements, challenge assumptions, and refine core features.
            Successfully migrated teams from disparate spreadsheets to a unified
            platform deployed on AWS, enabling enhanced collaboration and
            scalability.
          </li>
          <li>
            Architected and implemented a robust resource filtering system for
            the primary application, enabling users to efficiently filter and
            manage various resources such as Battery Units, Rental Reservations,
            Faults, Alerts, Accounts, and Users. The system featured advanced
            functionalities like saving, sharing filters, and integrated
            pagination for optimized performance.
          </li>
          <li>
            Developed a comprehensive PDF document generation system, allowing
            users to create customized PDF templates, collect form data, and
            render documents for download. Integrated the system with backend
            services to support centralized persistence and record-keeping,
            enhancing operational efficiency.
          </li>
          <li>
            Engineered a cohesive File Upload workflow that supported
            drag-and-drop, file selection, and pasting functionalities, complete
            with validation for file type and size. This streamlined user
            interaction and ensured data integrity.
          </li>
          <li>
            Spearheaded the adoption of an Agile methodology, transitioning the
            team from a traditional Waterfall approach. This shift resulted in
            shorter development timelines, more frequent iteration cycles, and
            products better aligned with user needs.
          </li>
          <li>
            Served as the Tech Lead on multiple projects, making key
            architectural decisions, gathering and incorporating feedback from
            team members, and providing support across various initiatives.
          </li>
        </ul>

        <h3 className={orbitron.className}>
          Tesla | Sr. Software Engineer | November 2020 - December 2022
        </h3>
        <ul>
          <li>
            Developed a React Native iPad application for scheduling vehicle
            test drives, which included drivers license photo capture and
            validation
          </li>
          <li>
            Implemented appointment management features for sales associates to
            check-in, follow-up, edit, and delete appointments
          </li>
          <li>Led the architecture of menu and navigation stack</li>
          <li>
            Overcame performance issues through research, experimentation, and
            iteration
          </li>
        </ul>

        <h3 className={orbitron.className}>
          Uber Eats | Software Engineer | April 2019 - May 2020
        </h3>
        <ul>
          <li>
            Contributed to the consumer website, where users could search, sort,
            filter, favorite, order, checkout, and track their orders
          </li>
          <li>
            Improved website performance by refactoring and optimizing codebase
          </li>
          <li>
            Collaborated with cross-functional teams to ensure efficient
            delivery of projects
          </li>
        </ul>

        <h3 className={orbitron.className}>
          Helix | Web Engineer | May 2017 - January 2019
        </h3>
        <ul>
          <li>
            Led the development of multiple retail microsites, including
            holiday-themed sites
          </li>
          <li>
            Redesigned features to improve the user experience and align with
            business goals
          </li>
          <li>
            Initiated code linting guidelines and tools for large projects with
            multiple contributors
          </li>
        </ul>

        <h3 className={orbitron.className}>
          Purple, Rock, Scissors | Web Engineer | August 2014 - October 2016
        </h3>
        <ul>
          <li>
            Developed visually stunning websites, web applications, and content
            management systems
          </li>
          <li>
            Maintained familiarity with content management and eCommerce
            solutions such as WordPress, Drupal, Expression Engine, and Magento
          </li>
          <li>Developed requirements and planning documentation</li>
          <li>
            Collaborated with creative, strategy, and marketing teams to develop
            products that align with business goals
          </li>
        </ul>

        <h2>Education</h2>
        <p>
          Bachelor of Arts in Humanities/Humanistic Studies, Florida State
          University (2012)
        </p>
      </article>
    </CenterLayout>
  );
};

export default Page;

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
            Experienced Senior Software Engineer specializing in full-stack
            development, technical leadership, and cross-functional
            collaboration. Skilled in TypeScript, NestJS, NextJS, Python,
            Express.js, React Native (including Expo), and AWS. Adept at
            gathering and refining requirements, challenging assumptions, and
            delivering high-impact solutions. Passionate about driving
            innovation, improving workflows, and mentoring teams to success.
            Advocate for Agile methodologies to enhance productivity and align
            development with business goals.
          </p>

          <h2>Skills</h2>
          <ul>
            <li>
              Full-Stack Development: <br />
              JavaScript, TypeScript, React, React Native, NestJS, NextJS,
              Node.js, Python, Express.js
            </li>
            <li>
              UI/UX Design: <br />
              Material UI, Responsive Design, Component Libraries (including
              experience building custom component libraries)
            </li>
            <li>
              Cloud & DevOps: <br />
              AWS (EC2, RDS, S3, Lambda), Docker, Containerization, CI/CD, CDK
              for Terraform
            </li>
            <li>
              Backend & APIs: <br />
              RESTful Services, GraphQL, Microservices Architecture
            </li>
            <li>
              Database Management: <br />
              SQL, PostgreSQL, TypeORM, NoSQL Databases
            </li>
            <li>
              Version Control & Collaboration: <br />
              Git, GitHub, Bitbucket, Code Reviews
            </li>
            <li>
              Agile Methodologies: <br />
              Scrum, Kanban, Sprint Planning, Iteration Cycles
            </li>
            <li>
              Testing & Quality Assurance: <br />
              Unit Testing, Integration Testing, Automated Testing Frameworks
            </li>
            <li>
              Tooling & Workflow Optimization:
              <br />
              JIRA, Confluence, Trello, Continuous Integration
            </li>
          </ul>

          <h2>Professional Experience</h2>

          <h3 className={orbitron.className}>
            Moxion Power <br />
            Senior Software Engineer <br />
            Manufactoring Product Apps Tech Lead <br />
            October 2023 - August 2024
          </h3>
          <ul>
            <li>
              Led the end-to-end development of &ldquo;Unity&rdquo;, a
              full-stack application for manufacturing teams to track Battery
              Units throughout their lifecycle. Engaged with stakeholders to
              gather requirements, challenge assumptions, and refine features.
              Migrated teams from spreadsheets to a unified platform on AWS,
              improving collaboration and scalability.
            </li>
            <li>
              Architected a robust resource filtering system for managing
              Battery Units, Rental Reservations, Faults, Alerts, Accounts, and
              Users. Included advanced features like saving/sharing filters and
              integrated pagination for optimized performance.
            </li>
            <li>
              Developed a comprehensive PDF document generation system, allowing
              users to create customized templates, collect form data, and
              generate documents. Integrated with backend services for
              centralized record-keeping, enhancing operational efficiency.
            </li>
            <li>
              Engineered a File Upload workflow supporting drag-and-drop, file
              selection, and pasting functionalities, with validation for file
              type and size, ensuring streamlined user interaction and data
              integrity.
            </li>
            <li>
              Spearheaded the adoption of Agile methodologies, reducing
              development timelines and improving iteration cycles, aligning
              products more closely with user needs.
            </li>
            <li>
              Served as Tech Lead for manufacturing applications from April 2024
              onwards, and ad-hoc projects, making architectural decisions,
              incorporating team feedback, and providing support across
              initiatives.
            </li>
          </ul>

          <h3 className={orbitron.className}>
            Tesla <br />
            Sr. Software Engineer <br />
            November 2020 - December 2022
          </h3>
          <ul>
            <li>
              Scaled applications by developing internal libraries and reusable
              components, improving code reusability by 30%. Created a
              structured approach for identifying components suitable for reuse,
              documented them comprehensively, and integrated them across
              multiple projects.
            </li>
            <li>
              Managed internationalization for applications, supporting 10+
              languages for new launches, and added the ability to display
              multiple currencies. Coordinated with regional stakeholders to
              ensure accurate localization and currency conversions, resulting
              in improved user experience for global customers.
            </li>
            <li>
              Developed a React Native iPad application for scheduling vehicle
              test drives, streamlining the process. This involved integrating
              backend services, ensuring data synchronization, and optimizing
              the app for a seamless user interface.
            </li>
            <li>
              Led the styling of the vehicle ordering web application experience
              in our mobile applications with a team of junior engineers.
              Provided mentorship, conducted regular code reviews, and ensured
              adherence to best practices, significantly improving design
              consistency.
            </li>
            <li>
              Resolved performance issues through research and iteration,
              increasing app speed by 20%. Leveraged profiling tools to identify
              bottlenecks and implemented optimizations such as lazy loading and
              efficient data fetching.
            </li>
          </ul>

          <h3 className={orbitron.className}>
            Uber Eats <br />
            Software Engineer <br />
            April 2019 - May 2020
          </h3>
          <ul>
            <li>
              Led and delivered the development of the Promotions feature,
              enabling users to benefit from special offers and discounts.
              Worked closely with cross-functional teams to define requirements,
              develop the architecture, and ensure seamless integration with the
              existing platform.
            </li>
            <li>
              Led and developed the storefront filtering system, which allowed
              users to filter feeds by rating, price, dietary restrictions, and
              sorting. Collaborated with product managers and UX designers to
              create an intuitive user experience, leading to increased user
              engagement and satisfaction.
            </li>
            <li>
              Collaborated with design and product teams to ensure efficient
              project delivery, providing technical guidance and aligning
              efforts to meet tight deadlines.
            </li>
            <li>
              Supported the rollout of a redesigned application utilizing
              internal libraries and tools, ensuring smooth deployment and
              minimizing disruptions.
            </li>
          </ul>

          <h3 className={orbitron.className}>
            Helix <br />
            Web Engineer <br />
            May 2017 - January 2019
          </h3>
          <ul>
            <li>
              Led the development of multiple retail microsites, including
              holiday-themed sites. Delivered these projects on tight deadlines
              while ensuring a high-quality user experience and responsive
              design.
            </li>
            <li>
              Led store migration from a custom solution to Shopify, improving
              operational efficiency by reducing manual processes and enhancing
              scalability. Worked closely with stakeholders to identify key
              features and ensure a seamless transition.
            </li>
            <li>
              Implemented an A/B testing framework for evaluating design and
              feature changes, enabling data-driven decision-making that
              improved conversion rates and user engagement.
            </li>
            <li>
              Introduced code linting guidelines and tools for large projects
              with multiple contributors, which standardized code quality and
              reduced bugs during development, ultimately leading to faster and
              more maintainable code.
            </li>
          </ul>

          <h3 className={orbitron.className}>
            Purple, Rock, Scissors <br />
            Web Engineer <br />
            August 2014 - October 2016
          </h3>
          <ul>
            <li>
              Developed websites, web applications, and content management
              systems for clients across industries. Focused on ensuring
              responsive design, user-friendly interfaces, and scalability to
              meet client needs.
            </li>
            <li>
              Worked with content management and eCommerce solutions like
              WordPress, Drupal, Expression Engine, Magento, and
              Microsoft&rsquo;s .NET.
            </li>
            <li>
              Collaborated with cross-functional teams to deliver 5+ major
              projects on time, involving designers, project managers, and QA
              teams to ensure all requirements were met and high-quality
              standards were achieved.
            </li>
            <li>
              Led engineering department meetings, including working with the
              CTO to set agendas, coordinate educational presentations, and
              facilitate knowledge sharing among team members to promote
              professional growth.
            </li>
            <li>
              Hosted and implemented hackathons to foster continuous learning
              and provide exposure to new technologies, driving innovation and
              team engagement.
            </li>
          </ul>

          <h2>Education</h2>
          <p>
            Bachelor of Arts in Humanities/Humanistic Studies, Florida State
            University (2012)
          </p>
        </article>
      </CenterLayout>
    </DistopiaLayout>
  );
};

export default Page;

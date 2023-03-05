import { orbitron } from "../fonts";
import { Navigation } from "../components/Nav";
import { CenterLayout } from "../components/Layouts";

export default () => {
  return (
    <CenterLayout>
      <article>
        <h1 data-content="Dean Wagman" className={orbitron.className}>
          Dean Wagman
        </h1>
        <h2>Summary</h2>
        <p>
          UI Engineer with expertise in React.js and Redux. Proficient in
          TypeScript, React Native, and client-side technologies. Proven
          experience in leading development projects and working effectively in
          cross-functional teams. Adept at prioritizing tasks and handling tight
          deadlines. Strong communication and collaboration skills.
        </p>

        <h2>Skills</h2>
        <ul>
          <li>JavaScript, TypeScript, React, React Native, Redux, GraphQL</li>
          <li>HTML, CSS, SASS, CSS Modules</li>
          <li>
            Node.js, Express, WordPress, Laravel, Symfony, ASP.NET, Golang,
            Shopify
          </li>
          <li>Git, SVN</li>
          <li>JIRA, Confluence, Bitbucket, GitHub, Trello</li>
        </ul>

        <h2>Experience</h2>

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

import Image from "next/image";
import { CenterLayout } from "../components/Layouts";
import { orbitron } from "../fonts";
import Portrait from "./dean.jpg";

const Page = () => {
  return (
    <CenterLayout>
      <article>
        <h1 data-content="About" className={orbitron.className}>
          About
        </h1>
        <Image
          src={Portrait}
          alt="Dean Photo, cyberpunk nature asthetic, AI drawing"
          style={{
            maxWidth: "100%",
            marginBottom: "3rem",
            borderRadius: "1rem",
            boxShadow: "0 0 3rem 3rem rgba(0,0,0,0.3)",
          }}
        />
        <p>
          Hello, my name is Dean and I&rsquo;m a software engineer based in San
          Francisco, California. I specialize in UI engineering with a focus on
          front-end technologies such as React, React Native, and Redux, as well
          as back-end technologies like PHP, Composer, Symfony, and Laravel.
        </p>
        <p>
          I have over 8 years of experience in the software engineering
          industry, having worked for companies like Tesla, Uber, and Helix.
          Throughout my career, I&rsquo;ve developed a passion for using
          technology to solve complex problems and create beautiful, performant
          user interfaces.
        </p>
        <p>
          What sets me apart as a software engineer is my ability to approach
          technical challenges from both a technical and design perspective.
          I&rsquo;m always looking for new and innovative ways to solve problems
          and create delightful user experiences.
        </p>
        <p>
          Outside of work, I enjoy exploring the great outdoors through hiking,
          camping, and road trips. I&rsquo;m always up for an adventure and love
          discovering new places and experiences. I also enjoy attending tech
          meetups and collaborating with other developers to learn and grow.
        </p>
        <p>
          If you&rsquo;re interested in working together or just want to
          connect, feel free to send me a message!
        </p>
      </article>
    </CenterLayout>
  );
};

export default Page;

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
          placeholder="blur"
        />
        <p>
          Hello, my name is Dean, and I’m a Senior Software Engineer based in
          San Francisco, California. I specialize in full-stack development with
          a strong emphasis on UI engineering. My expertise lies in front-end
          technologies such as React, React Native, and Redux, complemented by
          back-end experience in frameworks like NestJS, Symfony, and Laravel.
        </p>

        <p>
          With over 10 years of industry experience, I’ve had the privilege of
          working with leading companies such as Tesla, Uber, and Moxion Power.
          My journey in software engineering has fueled my passion for crafting
          elegant, performant, and scalable solutions to complex problems,
          always with an eye on creating delightful user experiences.
        </p>

        <p>
          What sets me apart is my ability to seamlessly blend technical
          expertise with a keen design perspective, allowing me to approach
          challenges holistically. I’m continually exploring new technologies
          and methodologies to push the boundaries of what’s possible in
          software development.
        </p>

        <p>
          Outside of work, you’ll find me embracing the great outdoors through
          hiking, camping, and road trips. Adventure calls to me, and I love
          discovering new places and experiences. I’m also an active participant
          in the tech community, regularly attending meetups and collaborating
          with fellow developers to learn and grow.
        </p>

        <p>
          If you’re interested in collaborating or simply want to connect, don’t
          hesitate to reach out!
        </p>
      </article>
    </CenterLayout>
  );
};

export default Page;

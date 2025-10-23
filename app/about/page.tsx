import Image from "next/image";
import { CenterLayout, DistopiaLayout } from "../components/Layouts";
import { orbitron } from "../fonts";
import Portrait from "./dean.jpg";

const Page = () => {
  return (
    <DistopiaLayout>
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
              mixBlendMode: "lighten",
            }}
            placeholder="blur"
          />
          <p>Hey, I’m Dean — a Senior Software Engineer based in San Francisco. I build full-stack applications with a focus on clean architecture, great design, and smooth user experiences. Most of my work centers around React, TypeScript, and modern Node frameworks, but I like working across the stack when it helps move things forward.</p>

          <p>Over the years I’ve worked with teams at Tesla, Uber, Moxion Power, and Beacon AI, tackling everything from large-scale web systems to internal tools. I care about building software that’s reliable, maintainable, and feels good to use.</p>

          <p>When I’m not coding, I’m usually outdoors — camping, hiking, or on a road trip somewhere new. It’s how I reset and get fresh perspective on what I’m building next.</p>

          <p>If you’d like to connect or collaborate, feel free to reach out.</p>
        </article>
      </CenterLayout>
    </DistopiaLayout>
  );
};

export default Page;

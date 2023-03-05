import { CenterLayout } from "../components/Layouts";
import { orbitron } from "../fonts";

export default () => (
  <CenterLayout>
    <article>
      <h1 data-content="Art" className={orbitron.className}>
        Art
      </h1>
      <p>
        Welcome to my AI art gallery, where the creative possibilities of art
        and technology converge. Using the AI art generator MidJourney, I've
        crafted a unique collection of art that blends the organic and
        mechanical, the personal and universal. Each piece embodies the dynamic
        intersection of art and technology, showcasing the limitless potential
        of what we can achieve through their combined strengths. From
        professional assets to humorous memes, every piece is a testament to the
        beauty of creative collaboration. So come on a journey that fuses the
        cutting-edge with the timeless, where the boundaries of creativity are
        expanded beyond what we ever thought possible.
      </p>
    </article>
  </CenterLayout>
);

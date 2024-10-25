import Link from "next/link";
import { CenterLayout, DistopiaLayout } from "../components/Layouts";
import { getBlogPostMetaData } from "./util";

const Page = () => {
  const metaData = getBlogPostMetaData();

  return (
    <DistopiaLayout>
      <CenterLayout>
        <article>
          <h1 data-content="Blog">Blog</h1>

          {metaData.reverse().map(({ title, slug, description }) => (
            <div key="title" style={{ margin: "4rem 0" }}>
              <Link href={`/blog/${slug}`} key={slug}>
                <h3>{title}</h3>
              </Link>
              <p>{description}</p>
            </div>
          ))}
        </article>
      </CenterLayout>
    </DistopiaLayout>
  );
};

export default Page;

import Link from "next/link";
import { CenterLayout } from "../components/Layouts";
import { getBlogPostMetaData } from "./util";

const Page = () => {
  const metaData = getBlogPostMetaData();

  return (
    <CenterLayout>
      <article>
        <h1 data-content="Blog">Blog</h1>

        {metaData.map(({ title, slug, description }) => (
          <>
            <Link href={`/blog/${slug}`} key={slug}>
              <h2>{title}</h2>
              <p>{description}</p>
            </Link>
          </>
        ))}
      </article>
    </CenterLayout>
  );
};

export default Page;

import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { orbitron } from "../../fonts";
import { CenterLayout } from "../../components/Layouts";
import { getBlogPostMetaData } from "../util";

const folder = "app/blog/posts";

const getPostContent = (slug: string) => {
  const file = `${folder}/${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return matterResult;
};

const Page = ({ params: { slug } }: { params: { slug: string } }) => {
  const post = getPostContent(slug);

  return (
    <CenterLayout>
      <article>
        <Markdown>{post.content}</Markdown>
      </article>
    </CenterLayout>
  );
};

export const generateStaticParams = async () => {
  const metaData = getBlogPostMetaData();

  return metaData.map(({ slug }) => ({
    slug,
  }));
};

export default Page;

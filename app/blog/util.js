import fs from "fs";
import matter from "gray-matter";

export const getBlogPostMetaData = () => {
  const folder = "app/blog/posts";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  return markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}/${fileName}`, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: fileName.replace(".md", ""),
      title: data.title,
      date: data.date,
      description: data.description,
    };
  });
};

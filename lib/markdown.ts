import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "app", "blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  image: string;
  author: string;
  date: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

function readPostFile(slug: string) {
  if (!/^[\w.-]+$/.test(slug)) {
    return null;
  }

  const filePath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return fs.readFileSync(filePath, "utf-8");
}

function normalizePost(slug: string, fileContent: string): BlogPost {
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: String(data.title ?? slug),
    image: String(data.image ?? "/ogp/member.png"),
    author: String(data.author ?? "nu_digital"),
    date: String(data.date ?? ""),
    content,
  };
}

export function getAllPosts(): BlogPostMeta[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fileContent = fs.readFileSync(
        path.join(postsDirectory, fileName),
        "utf-8",
      );
      const post = normalizePost(slug, fileContent);

      return {
        slug: post.slug,
        title: post.title,
        image: post.image,
        author: post.author,
        date: post.date,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getLatestPosts(limit: number) {
  return getAllPosts().slice(0, limit);
}

export function getPostBySlug(slug: string) {
  const fileContent = readPostFile(slug);

  if (!fileContent) {
    return null;
  }

  return normalizePost(slug, fileContent);
}

export function getAllPostSlugs() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { markdownToText } from './markdownToHtml';
import { PostProps } from '@/interfaces';

type PostDirType = 'blog' | 'project';

const getPostDir = (dir: PostDirType) =>
  path.join(process.cwd(), `src/_posts/${dir}`);

export const getPostDetail = (slug: string) => {
  const file = fs.readFileSync(`${getPostDir('blog')}/${slug}.md`, 'utf-8');

  const {
    data: { title, tags, createDate },
    content
  } = matter(file);

  return {
    title,
    tags,
    createDate,
    content
  };
};

export const getAllPosts = (dir: PostDirType) => {
  const files = fs.readdirSync(getPostDir(dir));
  const posts = files.map((file) => {
    const id = file.replace(/\.md$/, '');
    const filePath = path.join(getPostDir(dir), file);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContents);

    const description: string =
      data.description ?? markdownToText(content || '');

    return {
      ...(data as PostProps),
      id,
      description
    };
  });

  return posts.sort((a, b) => (a.createDate > b.createDate ? -1 : 1));
};

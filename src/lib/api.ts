import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { format } from 'date-fns';
import { markdownToTxt } from 'markdown-to-txt';

import { PostType, PostDirType } from '@/interfaces';

export const markdownToText = (markdown: string) => {
  const resultText = markdownToTxt(markdown).substring(0, 150) + '...';
  return resultText?.split('\n').join('');
};

const getPostDir = (dir: PostDirType) =>
  path.join(process.cwd(), `src/_posts/${dir}`);

export const getPostDetail = (dir: PostDirType, slug: string) => {
  const file = fs.readFileSync(`${getPostDir(dir)}/${slug}.md`, 'utf-8');

  const {
    data: { title, tags, date },
    content
  } = matter(file);

  return {
    id: slug,
    category: dir,
    title,
    tags,
    date: format(date, 'yyyy년 MM월 dd일'),
    content
  };
};

const getAllTags = (data: PostType[]) => {
  const tags = data.map(post => post.tags).flat();
  return tags.filter((tag, idx) => tags.indexOf(tag) === idx);
};

export const getAllPosts = (dir: PostDirType) => {
  const files = fs.readdirSync(getPostDir(dir));

  const posts = files.map(file => {
    const id = file.replace(/\.md$/, '');
    const filePath = path.join(getPostDir(dir), file);
    const fileContents = fs.readFileSync(filePath, 'utf-8');

    const { data, content } = matter(fileContents);

    const date = format(data.date, 'yyyy년 MM월 dd일');
    const description: string =
      data.description ?? markdownToText(content || '');

    return {
      ...(data as PostType),
      id,
      description,
      category: dir,
      date
    };
  });

  const allTags = getAllTags(posts);

  return {
    posts: posts.sort((a, b) => (a.date > b.date ? -1 : 1)),
    allTags
  };
};

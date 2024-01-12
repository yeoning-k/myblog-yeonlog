export type GnbType = 'Blog' | 'Project' | 'About me';

export type PostListType = 'card' | 'list';

export interface PostProps {
  id: string;
  tags: Array<string>;
  title: string;
  description: string;
  createDate: string;
  coverImage?: string;
  link?: string;
}

export interface PostDetailProps {
  title: string;
  tags: Array<string>;
  createDate: string;
  content: string;
}

export type GnbNameType = 'Project' | 'Blog' | 'About me';

/* post */
export type PostDirType = 'project' | 'blog';
export type PostType = {
  id: string;
  title: string;
  category: PostDirType;
  description: string;
  tags: string[];
  coverImage: string;
  link: string;
  date: string;
  content?: string;
};
export interface PostsProps {
  allTags: string[];
  posts: PostType[];
}
export interface PostDetailProps {
  post: PostType;
  next: PostType;
  prev: PostType;
}

/* about */
export type ProfileType = {
  name: string;
  contact: string;
};

export type MessageButtonType = 'file' | 'email';

export type MessagesOptionType = {
  text: string;
  type: MessageButtonType;
};
export type IntroMessagesType = {
  text: string;
  option?: MessagesOptionType[];
};

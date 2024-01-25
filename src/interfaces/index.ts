/*== 공통 ==*/
export type GnbType = 'Blog' | 'Project' | 'About me';

/*== post ==*/
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
  slug: string;
  title: string;
  tags: Array<string>;
  createDate: string;
  content: string;
}

/*== about ==*/
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

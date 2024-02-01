export type GnbNameType = 'Project' | 'Blog' | 'About me';

/* post */
export type PostDirType = 'project' | 'blog';

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

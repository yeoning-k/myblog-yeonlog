import { GnbType } from '@/interfaces';

export const GNB_MENU: GnbType[] = ['Blog', 'Project', 'About me'];

export const NAVIGATION_LINK: {
  [blog: string]: string;
} = {
  blog: '/blog/list',
  project: '/work/list',
  aboutme: '/about'
};

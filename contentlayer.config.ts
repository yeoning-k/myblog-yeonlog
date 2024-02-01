import {
  defineDocumentType,
  makeSource,
  type FieldDefs
} from 'contentlayer/source-files';

import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import { format } from 'date-fns';

const markdownToText = (markdown: string) => {
  const regex = /(<([^>]+)>)/gi;
  return (
    markdown.replace(regex, '').substring(0, 200).split('\n').join('') + '...'
  );
};

const fields: FieldDefs = {
  title: { type: 'string', required: true },
  description: { type: 'string' },
  tags: { type: 'list', of: { type: 'string' }, required: true },
  coverImage: { type: 'string' },
  link: { type: 'string' },
  date: { type: 'date', required: true }
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  contentType: 'markdown',
  fields,
  computedFields: {
    slug: {
      type: 'string',
      resolve: ({ _raw }) => `${_raw.flattenedPath.split('/')[1]}`
    },
    category: {
      type: 'string',
      resolve: ({ _raw }) => `${_raw.flattenedPath.split('/')[0]}`
    },
    description: {
      type: 'string',
      resolve: ({ description, body }) =>
        description ?? markdownToText(body.html)
    },
    date: {
      type: 'string',
      resolve: ({ date }) => format(date, 'yyyy년 MM월 dd일')
    }
  }
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post]
});

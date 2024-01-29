import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: ({ _raw }) => `${_raw.flattenedPath.split('/')[1]}`
    },
    category: {
      type: 'string',
      resolve: ({ _raw }) => `${_raw.flattenedPath.split('/')[0]}`
    }
  }
}));

const options = {
  theme: {
    dark: 'github-dark-dimmed',
    light: 'github-light'
  },
  keepBackground: false,
  defaultLang: 'plaintext'
};

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm], //table
    rehypePlugins: [[rehypePrettyCode, options]]
  }
});

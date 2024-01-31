import { useContext } from 'react';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula, prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import ThemeContext from '@/context/ThemeContext';
import styles from '@/styles/Markdonw.module.scss';

const Markdown = ({ contents }: { contents: string }) => {
  const context = useContext(ThemeContext);

  return (
    <div className={styles['markdown-body']} data-theme={context.theme}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        components={{
          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '');

            return !inline && match ? (
              <SyntaxHighlighter
                className={styles.code}
                style={context.theme === 'light' ? prism : dracula}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code>{children}</code>
            );
          }
        }}
      >
        {contents}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;

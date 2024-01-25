import { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import slug from 'rehype-slug';
import raw from 'rehype-raw';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula, prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ThemeContext from '@/context/ThemeContext';
import styles from '@/styles/Markdown.module.css';

const MarkdownContent = ({ content }: { content: string }) => {
  const context = useContext(ThemeContext);
  return (
    <div
      className={styles['markdown-body']}
      data-theme={context.theme}
      prefers-color-scheme="light"
    >
      <ReactMarkdown
        rehypePlugins={[raw, slug]}
        components={{
          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '');

            return !inline && match ? (
              <SyntaxHighlighter
                className={styles.code}
                style={context.theme === 'light' ? prism : dracula} // try passing different color schemes, drak, dracula etc.
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
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;
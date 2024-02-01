import { useContext } from 'react';
import ThemeContext from '@/context/ThemeContext';

const UtterancesComments = () => {
  const context = useContext(ThemeContext);
  return (
    <section
      ref={(elem) => {
        if (!elem) {
          return;
        }
        const scriptElem = document.createElement('script');
        scriptElem.src = 'https://utteranc.es/client.js';
        scriptElem.async = true;
        scriptElem.crossOrigin = 'anonymous';
        scriptElem.setAttribute('repo', 'yeoning-k/yeon-log-comments');
        scriptElem.setAttribute('issue-term', 'pathname');
        scriptElem.setAttribute('label', 'blog-comment');
        scriptElem.setAttribute(
          'theme',
          context.theme === 'dark' ? 'github-dark' : 'github-light'
        );

        elem.replaceChildren(scriptElem);
      }}
      style={{ marginTop: '14px' }}
    />
  );
};

export default UtterancesComments;

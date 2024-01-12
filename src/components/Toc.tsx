import { useState, useEffect } from 'react';
import { useObserver } from '@/lib/hook';

import styles from '@/styles/Post.module.scss';
import classNames from 'classnames';

const Toc = () => {
  const [activeToc, setActiveToc] = useState<string>('');
  const [tocList, setTocList] = useState<HTMLElement[]>([]);

  useEffect(() => {
    const markdownBody = document.querySelector('[class*="markdown-body"]');
    if (!!markdownBody) {
      const targetEls: HTMLElement[] = Array.from(
        markdownBody.querySelectorAll('h1, h2, h3')
      );
      setTocList(targetEls);
    }
  }, []);

  useObserver(tocList, setActiveToc);

  return (
    <div className={styles.toc}>
      <ul>
        {tocList?.map((toc, idx) => {
          return (
            <li
              className={classNames(
                styles.toc__list,
                styles[`toc__${toc.nodeName}`],
                { [styles['toc__list--active']]: activeToc === toc.id }
              )}
              onClick={() => {
                const el = document.getElementById(toc.id);
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              key={idx}
            >
              {toc.textContent}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Toc;

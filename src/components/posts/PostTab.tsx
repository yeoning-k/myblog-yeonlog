import { useContext } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import HeaderScrollContext from '@/context/HeaderScrollContext';

import styles from '@/styles/Post.module.scss';

const PostTab = ({
  tabs,
  activeTab,
  setActiveTab
}: {
  tabs: (string | undefined)[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const router = useRouter();
  const { pathname } = router;
  const { isVisivle } = useContext(HeaderScrollContext);

  return (
    <div
      className={classNames(styles.posts__tab, {
        [styles['posts__tab--top']]: !isVisivle
      })}
    >
      <ul>
        <li
          onClick={() => {
            router.push(`${pathname}`);
            setActiveTab('');
          }}
          className={classNames({
            [styles['posts__tab--active']]: activeTab === ''
          })}
        >
          <span>#all</span>
        </li>
        {tabs?.map((tab, idx) => {
          if (!tab) return;

          return (
            <li
              key={idx}
              onClick={() => {
                router.push(`${pathname}?tag=${tab}`);
                setActiveTab(tab);
              }}
              className={classNames({
                [styles['posts__tab--active']]: activeTab === tab
              })}
            >
              <span>#{tab}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostTab;

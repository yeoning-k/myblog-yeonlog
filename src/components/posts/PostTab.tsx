import { useRouter } from 'next/router';
import classNames from 'classnames';

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

  return (
    <div className={styles.posts__tab}>
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

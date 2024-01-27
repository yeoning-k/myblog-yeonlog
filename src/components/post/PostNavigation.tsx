import { useContext } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import styles from '@/styles/Post.module.scss';
import HeaderScrollContext from '@/context/HeaderScrollContext';

const PostNavigation = ({
  data,
  activeTab,
  setActiveTab
}: {
  data: Array<string>;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const router = useRouter();
  const { pathname } = router;
  const { isVisivle } = useContext(HeaderScrollContext);

  return (
    <div
      className={classNames(styles.posts__snb, {
        [styles['posts__snb--top']]: !isVisivle
      })}
    >
      <ul>
        <li
          onClick={() => {
            router.push(`${pathname}`);
            setActiveTab('');
          }}
          className={classNames({
            [styles['posts__snb--active']]: activeTab === ''
          })}
        >
          <p>#all</p>
        </li>
        {data.map((tag, idx) => {
          return (
            <li
              key={idx}
              onClick={() => {
                router.push(`${pathname}?tag=${tag}`);
                setActiveTab(tag);
              }}
              className={classNames({
                [styles['posts__snb--active']]: activeTab === tag
              })}
            >
              <p>#{tag}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostNavigation;

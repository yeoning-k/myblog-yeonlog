
import Link from 'next/link';

import Toc from '../posts/Toc';
import Markdown from '../posts/Markdown';
import PostNavigator from '../posts/PostNavigator';
import UtterancesComments from '../posts/UtterancesComments';

import styles from '@/styles/Post.module.scss';

const PostDetail = ({ post }) => {
  console.log(post);
  const { title, date, tags, category, body, slug } = post;

  return (
    <div className="wrap">
      <div className={styles.post}>
        <div className={styles.post__header}>
          <h1 className={styles.post__title}>{title}</h1>
          <div className={styles.post__date}>{date}</div>
        </div>
        <div className={styles.post__body}>
          <Markdown contents={body.raw} />
          <Toc slug={slug} />
        </div>
        <div className={styles.post__footer}>
          <div className={styles.post__button}>
            <div className={styles.post__tags}>
              {tags?.map((tag, i) => (
                <span key={`${tag}_${i}`}>#{tag}</span>
              ))}
            </div>
            <Link href={`/${category}/list`}>목록보기</Link>
          </div>
          <PostNavigator category={category} slug={slug} />
        </div>
      </div>
      <div className="contents">
        <h3 className="contents__title">댓글달기 💬</h3>
        <UtterancesComments />
      </div>
    </div>
  );
};

export default PostDetail;

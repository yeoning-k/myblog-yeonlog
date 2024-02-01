
import Link from 'next/link';

import { PostDetailProps, PostType } from '@/interfaces';
import Toc from '../posts/Toc';
import Markdown from '../posts/Markdown';
import PostNavigator from '../posts/PostNavigator';
import UtterancesComments from '../posts/UtterancesComments';

import styles from '@/styles/Post.module.scss';
const PostDetail = ({ data }: { data: PostDetailProps }) => {
  const { post } = data;
  const { title, date, tags, category, content, id } = post;

  return (
    <div className="wrap">
      <div className={styles.post}>
        <div className={styles.post__header}>
          <h1 className={styles.post__title}>{title}</h1>
          <div className={styles.post__date}>{date}</div>
        </div>
        <div className={styles.post__body}>
          <Markdown contents={content} />
          <Toc slug={id} />
        </div>
        <div className={styles.post__footer}>
          <div className={styles.post__button}>
            <div className={styles.post__tags}>
              {tags?.map((tag, i) => (
                <span key={`${tag}_${i}`}>#{tag}</span>
              ))}
            </div>
            <div className={styles.post__btn}>
              <Link href={`/${category}/list`}>목록보기</Link>
            </div>
          </div>
          <PostNavigator data={data} />
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

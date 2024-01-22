import Link from 'next/link';

import { PostProps } from '@/interfaces';
import styles from '@/styles/Post.module.scss';

const PostMovement = ({
  prevPost,
  nextPost
}: {
  prevPost: PostProps;
  nextPost: PostProps;
}) => {
  if (!prevPost && !nextPost) return <></>;

  return (
    <ul className={styles.post__movement}>
      {!!prevPost && (
        <li>
          <span className={styles.movement__title}>이전글</span>
          <Link className={styles.movement__link} href={`/blog/${prevPost.id}`}>
            {prevPost.title}
          </Link>
        </li>
      )}
      {!!nextPost && (
        <li>
          <span className={styles.movement__title}>다음글</span>
          <Link className={styles.movement__link} href={`/blog/${nextPost.id}`}>
            {nextPost.title}
          </Link>
        </li>
      )}
    </ul>
  );
};

export default PostMovement;

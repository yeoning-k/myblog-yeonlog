import Link from 'next/link';

import { type Post } from '@contentlayer';
import { useGetData } from '@/lib/hooks';
import { PostDirType } from '@/interfaces';

import styles from '@/styles/Post.module.scss';

const Navigator = ({
  data,
  text
}: {
  data: Post;
  text: '이전글' | '다음글';
}) => {
  return (
    <li>
      <span className={styles.navigator__title}>{text}</span>
      <Link
        className={styles.navigator__link}
        href={`/${data._raw.flattenedPath}`}
      >
        {data.title}
      </Link>
    </li>
  );
};

const PostNavigator = ({
  category,
  slug
}: {
  category: string;
  slug: string;
}) => {
  const { posts } = useGetData(category);
  const postIdx = posts.findIndex(post => post.slug === slug);

  const prevPost = (postIdx !== undefined && posts?.[postIdx - 1]) || null;
  const nextPost = (postIdx !== undefined && posts?.[postIdx + 1]) || null;

  if (!prevPost && !nextPost) return <></>;

  return (
    <ul className={styles.post__navigator}>
      {!!prevPost && <Navigator data={prevPost} text="이전글" />}
      {!!nextPost && <Navigator data={nextPost} text="다음글" />}
    </ul>
  );
};

export default PostNavigator;

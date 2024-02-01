import Link from 'next/link';

import { PostDetailProps, PostType } from '@/interfaces';

import styles from '@/styles/Post.module.scss';

const Navigator = ({
  data,
  text
}: {
  data: PostType;
  text: '이전글' | '다음글';
}) => {
  const { category, id } = data;
  return (
    <li>
      <span className={styles.navigator__title}>{text}</span>
      <Link className={styles.navigator__link} href={`/${category}/${id}`}>
        {data.title}
      </Link>
    </li>
  );
};

const PostNavigator = ({ data }: { data: PostDetailProps }) => {
  const { prev, next } = data;
  if (!prev && !next) return <></>;

  return (
    <ul className={styles.post__navigator}>
      {!!prev && <Navigator data={prev} text="이전글" />}
      {!!next && <Navigator data={next} text="다음글" />}
    </ul>
  );
};

export default PostNavigator;

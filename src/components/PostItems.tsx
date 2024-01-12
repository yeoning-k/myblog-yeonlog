import Link from 'next/link';
import Image from 'next/image';
import { PostProps, PostListType } from '@/interfaces';
import PostEmpty from '@/components/PostEmpty';

import { FiCalendar } from 'react-icons/fi';
import styles from '@/styles/Component.module.scss';
import PostDate from './PostDate';

interface PostItemsProps {
  type: PostListType;
  data: PostProps[];
}

const PostItems = ({ type, data }: PostItemsProps) => {
  if (data.length <= 0) {
    return <PostEmpty />;
  }

  return (
    <div className={`${styles.card} ${styles[`card__type-${type}`]}`}>
      <ul>
        {data.map((item, idx) => {
          const { id, link, coverImage, tags, title, description, createDate } =
            item;
          const isCardLink = type === 'card' && link;
          return (
            <li className={styles.card__item} key={idx}>
              <Link
                href={isCardLink ? link : `/blog/${id}`}
                target={isCardLink ? '_blank' : '_self'}
              >
                {type === 'card' && !!coverImage && (
                  <div className={styles.card__cover}>
                    <Image
                      className={styles.card__thumbnail}
                      src={coverImage}
                      width={0}
                      height={0}
                      alt={`${title} thumbnail`}
                    />
                  </div>
                )}
                <div className={styles.card__wrap}>
                  <div className={styles.card__tags}>
                    {tags?.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                  <div className={styles.card__title}>{title}</div>
                  <div className={styles.card__description}>{description}</div>
                  {type === 'list' && (
                    <PostDate className={styles.card__date} date={createDate} />
                  )}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostItems;

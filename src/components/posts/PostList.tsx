import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { PostType } from '@/interfaces';

import styles from '@/styles/Component.module.scss';

const PostList = ({
  posts,
  type
}: {
  posts: PostType[];
  type: 'box' | 'list';
}) => {
  if (posts.length <= 0) {
    return <div className={styles.empty}>게시글이 없습니다 🥲</div>;
  }

  return (
    <div className={classNames(styles.card, styles[`card-${type}`])}>
      <ul>
        {posts.map((item, idx) => {
          const {
            id,
            category,
            title,
            description,
            coverImage,
            tags,
            date,
            link
          } = item;

          return (
            <li className={styles.card__item} key={idx}>
              <Link
                href={link ?? `/${category}/${id}`}
                target={link ? '_blank' : '_self'}
              >
                {coverImage && (
                  <div className={styles.card__thumbnail}>
                    <Image
                      src={coverImage}
                      width="480"
                      height="326"
                      alt={`${title} thumbnail`}
                    />
                  </div>
                )}
                <div className={styles.card__wrap}>
                  <div className={styles.card__tags}>
                    {tags?.map((tag: string, i: number) => (
                      <span key={`${tag}_${i}`}>#{tag}</span>
                    ))}
                  </div>
                  <div className={styles.card__title}>{title}</div>
                  <div className={styles.card__description}>{description}</div>
                  {type === 'list' && (
                    <div className={styles.card__date}>{date}</div>
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

export default PostList;

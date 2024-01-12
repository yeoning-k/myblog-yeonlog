import Link from 'next/link';
import { FiCalendar } from 'react-icons/fi';

import Layout from '@/components/Layout';
import { getAllPosts, getPostDetail } from '@/lib/api';
import { NAVIGATION_LINK } from '@/lib/constants';
import { PostProps, PostDetailProps } from '@/interfaces';
import MarkdownContent from '@/components/MarkdownContent';
import PostMovement from '@/components/PostMovement';
import UtterancesComments from '@/components/UtterancesComments';
import Toc from '@/components/Toc';

import styles from '@/styles/Post.module.scss';

export default function BlogListPage({
  data,
  prevPost,
  nextPost
}: {
  data: PostDetailProps;
  prevPost: PostProps;
  nextPost: PostProps;
}) {
  if (!data) return;

  const { title, tags, createDate, content } = data;

  return (
    <Layout>
      <div className={styles.post}>
        <div className={styles.post__header}>
          <h1 className={styles.post__title}>{title}</h1>
          <p className={styles.post__date}>
            <FiCalendar stroke="#999" />
            {createDate}
          </p>
        </div>
        <div className={styles.post__body}>
          <MarkdownContent content={content} />
          <Toc />
        </div>
        <div className={styles.post__footer}>
          <div className={styles.post__button}>
            {tags.length > 0 && (
              <div className={styles.post__tags}>
                {tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            )}
            <Link href={NAVIGATION_LINK['blog']}>목록보기</Link>
          </div>
          <PostMovement prevPost={prevPost} nextPost={nextPost} />
        </div>
      </div>
      <div className="contents">
        <h3 className="contents__title">댓글달기 💬</h3>
        {/* <div className="comment"> */}
        <UtterancesComments />
        {/* </div> */}
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const blogPosts = getAllPosts('blog');

  if (!blogPosts) return { paths: [], fallback: false };

  const paths = blogPosts?.map((post) => ({
    params: {
      slug: post.id
    }
  }));
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({
  params
}: {
  params: { slug: string };
}) => {
  const { slug } = params;
  const blogPosts = getAllPosts('blog');
  const postIdx = blogPosts?.findIndex((post) => post.id === slug);

  const data = getPostDetail(slug);
  const prevPost = (postIdx !== undefined && blogPosts?.[postIdx - 1]) || null;
  const nextPost = (postIdx !== undefined && blogPosts?.[postIdx + 1]) || null;

  return {
    props: {
      data,
      prevPost,
      nextPost
    }
  };
};

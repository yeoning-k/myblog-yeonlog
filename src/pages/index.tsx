import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

import { GnbNameType, PostType } from '@/interfaces';
import { NAVIGATION } from '@/lib/constants';
import { getAllPosts } from '@/lib/api';
import Layout from '@/components/Layout';
import PageTitle from '@/components/PageTitle';
import PostList from '@/components/posts/PostList';

import styles from '@/styles/Component.module.scss';

const ContentsTitle = ({ title }: { title: GnbNameType }) => {
  const goToLink = NAVIGATION.find(menu => menu.name === title);
  return (
    <h3 className="contents__title">
      {title}
      {goToLink && (
        <Link className="more__btn" href={goToLink.link}>
          더보기
          <FiArrowRight />
        </Link>
      )}
    </h3>
  );
};

export default function Home({
  blog,
  project
}: {
  blog: PostType[];
  project: PostType[];
}) {
  return (
    <Layout>
      <div className="wrap">
        <PageTitle
          title="yeoning"
          description="Front-end developer"
          image="/images/custom_emoji_me.png"
        />
        <div className={`${styles.main} contents`}>
          <ContentsTitle title="Project" />
          <PostList posts={project} type="box" />
        </div>
        <div className="contents">
          <ContentsTitle title="Blog" />
          <PostList posts={blog} type="list" />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = () => {
  const { posts: blogPosts } = getAllPosts('blog');
  const { posts: projectPosts } = getAllPosts('project');

  return {
    props: {
      blog: blogPosts.slice(0, 4),
      project: projectPosts.slice(0, 3)
    }
  };
};

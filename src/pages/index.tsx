import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

import { GnbNameType } from '@/interfaces';
import { NAVIGATION } from '@/lib/constants';
import { useGetData } from '@/lib/hooks';
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

export default function Home() {
  const { posts: project } = useGetData('project');
  const { posts: blog } = useGetData('blog');

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
          <PostList posts={project.slice(0, 4)} type="box" />
        </div>
        <div className="contents">
          <ContentsTitle title="Blog" />
          <PostList posts={blog.slice(0, 3)} type="list" />
        </div>
      </div>
    </Layout>
  );
}

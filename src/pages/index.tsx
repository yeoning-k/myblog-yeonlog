import Link from 'next/link';

import { PostProps } from '@/interfaces';
import { getAllPosts } from '@/lib/api';
import { NAVIGATION_LINK } from '@/lib/constants';
import PageTitle from '@/components/PageTitle';
import PostItems from '@/components/PostItems';

export default function Home({
  blogPosts,
  projectPosts
}: {
  blogPosts: PostProps[];
  projectPosts: PostProps[];
}) {
  return (
    <>
      <div className="wrap mainPage">
        <PageTitle
          title="yeoning"
          description="Front-end developer"
          image="/images/custom_emoji_me.png"
        />

        <div className="contents">
          <h3 className="contents__title">
            Project
            <Link className="more__btn" href={NAVIGATION_LINK['project']}>
              더보기 →
            </Link>
          </h3>
          <PostItems type="card" data={projectPosts} />
        </div>

        <div className="contents">
          <h3 className="contents__title">
            Blog
            <Link className="more__btn" href={NAVIGATION_LINK['blog']}>
              더보기 →
            </Link>
          </h3>
          <PostItems type="list" data={blogPosts} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps = () => {
  const blogPosts = getAllPosts('blog').slice(0, 3);
  const projectPosts = getAllPosts('project').slice(0, 4);

  return {
    props: {
      blogPosts,
      projectPosts
    }
  };
};

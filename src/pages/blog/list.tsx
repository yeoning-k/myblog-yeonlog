import { getAllPosts } from '@/lib/api';
import { PostsProps } from '@/interfaces';

import Layout from '@/components/Layout';
import PageTitle from '@/components/PageTitle';
import Posts from '@/components/layout/Posts';

export default function BlogListPage({ datas }: { datas: PostsProps }) {
  return (
    <Layout>
      <div className="wrap">
        <PageTitle
          title="Blog"
          description="쪼랭이 개발자의 개발일기"
          emoji="📔"
        />
        <Posts dir="blog" datas={datas} />
      </div>
    </Layout>
  );
}

export const getStaticProps = () => {
  const posts = getAllPosts('blog');

  return {
    props: {
      datas: posts
    }
  };
};

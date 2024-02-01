import { getAllPosts } from '@/lib/api';
import { PostsProps } from '@/interfaces';

import Layout from '@/components/Layout';
import PageTitle from '@/components/PageTitle';
import Posts from '@/components/layout/Posts';

export default function ProjectListPage({ datas }: { datas: PostsProps }) {
  return (
    <Layout>
      <div className="wrap">
        <PageTitle
          title="Project"
          description="스터디용 프로젝트 모음집"
          emoji="💻"
        />
        <Posts dir="project" datas={datas} />
      </div>
    </Layout>
  );
}

export const getStaticProps = () => {
  const posts = getAllPosts('project');

  return {
    props: {
      datas: posts
    }
  };
};

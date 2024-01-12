import Layout from '@/components/Layout';
import { getAllPosts } from '@/lib/api';
import { PostProps } from '@/interfaces';
import PageTitle from '@/components/PageTitle';
import PostList from '@/components/PostList';

export default function ProjectListPage({
  projectPosts,
  postTags
}: {
  projectPosts: PostProps[];
  postTags: Array<string>;
}) {
  return (
    <Layout>
      <PageTitle
        title="Project"
        description="스터디용 프로젝트 모음집"
        emoji="💻"
      />
      <PostList type="card" posts={projectPosts} postTags={postTags} />
    </Layout>
  );
}

export const getStaticProps = () => {
  const projectPosts = getAllPosts('project');
  const tags = projectPosts.map((item) => item.tags).flat();
  const allTags = tags.filter((tag, idx) => tags.indexOf(tag) === idx);

  return {
    props: {
      projectPosts,
      postTags: allTags
    }
  };
};

import Layout from '@/components/Layout';
import PostDetail from '@/components/layout/PostDetail';
import { PostDetailProps } from '@/interfaces';
import { getAllPosts, getPostDetail } from '@/lib/api';

const ProjectDetailPage = ({ data }: { data: PostDetailProps }) => {
  return (
    <Layout>
      <PostDetail data={data} />
    </Layout>
  );
};

export default ProjectDetailPage;

export const getStaticPaths = () => {
  const { posts } = getAllPosts('project');
  const paths = posts.map(post => ({
    params: {
      slug: post.id
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = ({ params }: { params: { slug: string } }) => {
  const { posts } = getAllPosts('project');
  const postIdx = posts.findIndex(post => post.id === params.slug);

  const prevPost = (postIdx !== undefined && posts?.[postIdx - 1]) || null;
  const nextPost = (postIdx !== undefined && posts?.[postIdx + 1]) || null;

  const detail = getPostDetail('project', params.slug);

  return {
    props: {
      data: {
        post: detail,
        next: nextPost,
        prev: prevPost
      }
    }
  };
};

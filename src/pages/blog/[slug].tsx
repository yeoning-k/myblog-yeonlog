import Layout from '@/components/Layout';
import PostDetail from '@/components/layout/PostDetail';
import { PostDetailProps } from '@/interfaces';
import { getAllPosts, getPostDetail } from '@/lib/api';

const BlogDetailPage = ({ data }: { data: PostDetailProps }) => {
  return (
    <Layout>
      <PostDetail data={data} />
    </Layout>
  );
};

export default BlogDetailPage;

export const getStaticPaths = () => {
  const { posts } = getAllPosts('blog');
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
  const { posts } = getAllPosts('blog');
  const postIdx = posts.findIndex(post => post.id === params.slug);

  const prevPost = (postIdx !== undefined && posts?.[postIdx - 1]) || null;
  const nextPost = (postIdx !== undefined && posts?.[postIdx + 1]) || null;

  const detail = getPostDetail('blog', params.slug);

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

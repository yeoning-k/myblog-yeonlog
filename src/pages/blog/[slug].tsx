import Layout from '@/components/Layout';
import PostDetail from '@/components/layout/PostDetail';
import { useGetData } from '@/lib/hooks';

import { allPosts, type Post } from '@contentlayer';

const BlogDetailPage = ({ data }: { data: Post }) => {
  return (
    <Layout>
      <PostDetail post={data} />
    </Layout>
  );
};

export default BlogDetailPage;

export const getStaticPaths = () => {
  const paths = allPosts.map(post => ({
    params: {
      slug: post.slug
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(post => post.slug === params.slug);

  return {
    props: {
      data: post
    }
  };
};

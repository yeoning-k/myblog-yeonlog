import Layout from '@/components/Layout';
import PostDetail from '@/components/layout/PostDetail';

import { allPosts, type Post } from '@contentlayer';

const ProjectDetailPage = ({ data }: { data: Post }) => {
  return (
    <Layout>
      <PostDetail post={data} />
    </Layout>
  );
};

export default ProjectDetailPage;

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

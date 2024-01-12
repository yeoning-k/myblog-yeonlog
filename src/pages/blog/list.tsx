import { getAllPosts } from '@/lib/api';
import { PostProps } from '@/interfaces';
import PageTitle from '@/components/PageTitle';
import PostList from '@/components/PostList';

export default function BlogListPage({
  blogPosts,
  postTags
}: {
  blogPosts: PostProps[];
  postTags: Array<string>;
}) {
  return (
    <div className="wrap">
      <PageTitle
        title="Blog"
        description="쪼랭이 개발자의 개발일기"
        emoji="📔"
      />
      <PostList type="list" posts={blogPosts} postTags={postTags} />
    </div>
  );
}

export const getStaticProps = () => {
  const blogPosts = getAllPosts('blog');
  const tags = blogPosts.map((item) => item.tags).flat();
  const allTags = tags.filter((tag, idx) => tags.indexOf(tag) === idx);

  return {
    props: {
      blogPosts,
      postTags: allTags
    }
  };
};

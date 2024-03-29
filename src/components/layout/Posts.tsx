import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';

import { PostDirType, PostsProps, PostType } from '@/interfaces';
import PostTab from '@/components/posts/PostTab';
import PostList from '@/components/posts/PostList';

import styles from '@/styles/Post.module.scss';

const Posts = ({ datas, dir }: { datas: PostsProps; dir: PostDirType }) => {
  const { posts, allTags } = datas;
  const [activeTab, setActiveTab] = useState('');
  const [data, setData] = useState<PostType[]>([]);
  const [searchText, setSearchText] = useState('');

  const searchParams = useSearchParams();
  const params = searchParams.get('tag');

  useEffect(() => {
    setActiveTab(params ?? '');
  }, [params]);

  useEffect(() => {
    const result = posts.filter(item => {
      const title = item.title.toLowerCase();
      if (activeTab === '') {
        return title.includes(searchText);
      }
      return item.tags?.includes(activeTab) && title.includes(searchText);
    });
    setData(result);
  }, [posts, activeTab, searchText]);

  return (
    <div className={`${styles.posts} contents`}>
      <PostTab
        tabs={allTags}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className={`${styles.posts__contents}`}>
        <div className={styles.posts__top}>
          <h3 className="contents__title">All Posts({data.length})</h3>
          <div className={styles.posts__search}>
            <input
              type="text"
              onChange={e => setSearchText(e.target.value.toLowerCase())}
              placeholder="게시글 제목을 검색하세요"
            />
            <FiSearch />
          </div>
        </div>
        <PostList posts={data} type={dir === 'project' ? 'box' : 'list'} />
      </div>
    </div>
  );
};

export default Posts;

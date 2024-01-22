/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';

import { PostProps, PostListType } from '@/interfaces';
import PostNavigation from '@/components/post/PostNavigation';
import PostItems from '@/components/post/PostItems';
import styles from '@/styles/Post.module.scss';

const PostList = ({
  type,
  posts,
  postTags
}: {
  type: PostListType;
  posts: PostProps[];
  postTags: Array<string>;
}) => {
  const [activeTab, setActiveTab] = useState<string>('');
  const [datas, setDatas] = useState<PostProps[]>([]);
  const [searchText, setSearchText] = useState<string>('');

  const searchParams = useSearchParams();
  const params = searchParams.get('tag');

  useEffect(() => {
    setActiveTab(params ?? '');
  }, [params]);

  useEffect(() => {
    const filterData = posts.filter((item) => {
      const title = item.title.toLowerCase();
      if (activeTab === '') {
        return title.includes(searchText);
      }
      return item.tags.includes(activeTab) && title.includes(searchText);
    });
    setDatas(filterData);
  }, [params, searchText]);

  return (
    <div className="contents">
      <div className={styles.posts}>
        <PostNavigation
          data={postTags}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className={styles.posts__list}>
          <div className={styles.posts__header}>
            <h3 className="contents__title">All Posts ({datas.length})</h3>
            <div className={styles.posts__search}>
              <input
                type="text"
                onChange={(e) => setSearchText(e.target.value.toLowerCase())}
                placeholder="게시글 제목을 검색하세요"
              />
              <FiSearch />
            </div>
          </div>
          <PostItems type={type} data={datas} />
        </div>
      </div>
    </div>
  );
};

export default PostList;

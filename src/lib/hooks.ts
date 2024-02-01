import { useMemo, useEffect } from 'react';
import { allPosts, type Post } from 'contentlayer/generated';

const getAllTags = (data: Post[]) => {
  const tags = data.map(post => post.tags).flat();
  return tags.filter((tag, idx) => tags.indexOf(tag) === idx);
};

export const useGetData = (dir: string) => {
  const data = useMemo<Post[]>(() => {
    return allPosts
      .filter(post => post.category === dir)
      .sort((a, b) => (a.date > b.date ? -1 : 1));
  }, [dir]);

  const allTag = useMemo(() => {
    return getAllTags(data);
  }, [data]);

  return {
    posts: data,
    allTag
  };
};

export type ObservationType = Record<string, IntersectionObserverEntry>;
export const useObserver = (
  tocList: HTMLElement[],
  setActiveToc: React.Dispatch<React.SetStateAction<string>>
) => {
  useEffect(() => {
    const observe = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          setActiveToc(entry.target.id);
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -90% 0px'
      }
    );

    tocList.map(toc => {
      observe.observe(toc);
    });

    return () => observe.disconnect();
  }, [setActiveToc, tocList]);
};

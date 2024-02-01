import { useEffect } from 'react';

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

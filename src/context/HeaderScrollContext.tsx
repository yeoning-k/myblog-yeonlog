/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  ReactNode,
  useState,
  useLayoutEffect,
  useCallback
} from 'react';

const HeaderScrollContext = createContext({
  isFixed: false,
  isVisivle: true
});

interface ThemeProps {
  children: ReactNode;
}

export const HeaderScrollContextProvider = ({ children }: ThemeProps) => {
  const [isFixed, setIsFixed] = useState(false);
  const [isVisivle, setIsVisivle] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(
    (e: Event) => {
      const currentScrollY = window.scrollY;
      const scrollCondition = currentScrollY > 70;
      setIsFixed(scrollCondition ? true : false);
      setIsVisivle(
        scrollCondition && currentScrollY > lastScrollY ? false : true
      );
      setLastScrollY(currentScrollY);
    },
    [lastScrollY]
  );

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <HeaderScrollContext.Provider
      value={{
        isFixed,
        isVisivle
      }}
    >
      {children}
    </HeaderScrollContext.Provider>
  );
};

export default HeaderScrollContext;

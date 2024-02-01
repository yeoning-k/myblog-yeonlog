import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Layout from '@/components/Layout';
import ThemeContext from '@/context/ThemeContext';
import styles from '@/styles/Layout.module.scss';

export default function NotFound() {
  const { theme } = useContext(ThemeContext);

  return (
    <Layout>
      <div className={styles.notFound}>
        <div className="wrap">
          <div className={styles.notFound__image}>
            <Image
              src={`/images/${
                theme === 'dark' ? 'not_found_light' : 'not_found'
              }.png`}
              width={321}
              height={213}
              alt="emoji"
            />
          </div>
          <div className={styles.notFound__title}>
            원하시는 페이지를 찾을 수 없습니다
          </div>
          <div className={styles.notFound__text}>
            찾으려는 페이지의 주소가 잘못 입력되었거나,
            <br />
            주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다.
            <br /> 입력하신 페이지의 주소가 정확한지 다시 한번 확인해 주세요.
          </div>
          <Link className={styles.notFound__btn} href="/">
            홈으로 가기
          </Link>
        </div>
      </div>
    </Layout>
  );
}

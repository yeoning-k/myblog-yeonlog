import Image from 'next/image';

import Layout from '@/components/Layout';
import PageTitle from '@/components/PageTitle';
import Messages from '@/components/about/Messages';
import { PROFILE } from '@/lib/constants';

import styles from '@/styles/About.module.scss';

export default function AboutMePage() {
  return (
    <Layout>
      <div className="wrap">
        <PageTitle
          title="About me"
          description="저를 소개합니다 :)"
          emoji="👋🏻"
        />
      </div>
      <div className={styles.about}>
        <div className="wrap">
          <div className={styles.about_message}>
            <div className={styles.message}>
              <div className={styles.message__image}>
                <Image
                  src="/images/me.png"
                  width={120}
                  height={120}
                  alt="emoji"
                />
              </div>
              <div className={styles.message__commnet}>
                <div className={styles.message__name}>{PROFILE.name}</div>
                <Messages />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

import { useState } from 'react';
import Layout from '@/components/Layout';
import PageTitle from '@/components/PageTitle';
import Experience from '@/components/about/Experience';
import { PROFILE, INTRO_MESSAGES } from '@/lib/AboutConstants';
import {
  IntroMessagesType,
  MessageButtonType,
  MessagesOptionType
} from '@/interfaces';
import styles from '@/styles/About.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Messages from '@/components/about/Messages';

export default function AboutMe() {
  const animation = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

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
                <Image src="/images/me.png" width={0} height={0} alt="emoji" />
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

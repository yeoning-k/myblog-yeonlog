import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import { INTRO_MESSAGES, PROFILE } from '@/lib/constants';

import { MessageButtonType, MessagesOptionType } from '@/interfaces';

import styles from '@/styles/About.module.scss';

const animation = {
  container: {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.5
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }
};

const RenderOption = ({ type }: { type: MessageButtonType }) => {
  if (type === 'file') {
    return (
      <div className={styles.message__text}>
        <div className={styles.message__file}>
          <p>경력기술서</p>
          <span>열기를 눌러 경력기술서를 확인하세요.</span>
          <div className={styles.message__file_btn}>
            <Link href="/files/resume.pdf" target="_blank">
              열기
            </Link>
            <Link
              href="/files/resume.pdf"
              target="_blank"
              download="/files/eemrsu.pdf"
            >
              다운로드
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'email') {
    return (
      <div className={styles.message__text}>
        <Link
          className={styles.message__email}
          href="mailto:sy03549@gmail.com"
          target="_blank"
        >
          {PROFILE.contact}
        </Link>
      </div>
    );
  }

  return <></>;
};

const RenderButton = ({
  items,
  userMessage,
  setUserMessage
}: {
  items: MessagesOptionType[];
  userMessage: MessagesOptionType[];
  setUserMessage: React.Dispatch<React.SetStateAction<MessagesOptionType[]>>;
}) => {
  return (
    <div className={styles.message__btns}>
      {items.map((item, idx) => (
        <div
          className={classNames(styles.message__btn, {
            [styles['message__btn-inactive']]: userMessage.indexOf(item) > -1
          })}
          key={idx}
          onClick={() => {
            if (userMessage.indexOf(item) > -1) return;
            setUserMessage([...userMessage, item]);
          }}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

const Messages = () => {
  const [userMessage, setUserMessage] = useState<MessagesOptionType[]>([]);

  return (
    <>
      <motion.div
        variants={animation.container}
        initial="hidden"
        animate="visible"
      >
        {INTRO_MESSAGES?.map((message, idx) => {
          return (
            <motion.div
              className={styles.message__box}
              variants={animation.item}
              key={idx}
            >
              <div className={styles.message__text}>
                <p dangerouslySetInnerHTML={{ __html: message.text }}></p>
                {message.option && (
                  <RenderButton
                    items={message.option}
                    userMessage={userMessage}
                    setUserMessage={setUserMessage}
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {userMessage &&
        userMessage.map((message, idx) => {
          return (
            <motion.div
              variants={animation.container}
              initial="hidden"
              animate="visible"
              key={idx}
            >
              <motion.div
                className={`${styles.message__box} ${styles.message__box_user}`}
                variants={animation.item}
              >
                <div className={styles.message__text}>{message.text}</div>
              </motion.div>
              <motion.div
                className={styles.message__box}
                variants={animation.item}
              >
                <RenderOption type={message.type} />
              </motion.div>
            </motion.div>
          );
        })}
    </>
  );
};

export default Messages;

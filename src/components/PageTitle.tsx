import Image from 'next/image';
import styles from '@/styles/Component.module.scss';

const PageTitle = ({
  title,
  description,
  image,
  emoji
}: {
  title: string;
  description: string;
  image?: string;
  emoji?: string;
}) => {
  return (
    <div className={styles['page-title']}>
      <div className={styles['page-title__emoji']}>
        {emoji ??
          (image && <Image src={image} width={100} height={100} alt="emoji" />)}
      </div>
      <div className={styles['page-title__text']}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PageTitle;

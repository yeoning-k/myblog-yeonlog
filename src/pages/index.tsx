import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

import { GnbNameType } from '@/interfaces';
import { NAVIGATION } from '@/lib/constants';
import Layout from '@/components/Layout';
import PageTitle from '@/components/PageTitle';

const ContentsTitle = ({ title }: { title: GnbNameType }) => {
  const goToLink = NAVIGATION.find(menu => menu.name === title);
  return (
    <h3 className="contents__title">
      {title}
      {goToLink && (
        <Link className="more__btn" href={goToLink.link}>
          더보기
          <FiArrowRight />
        </Link>
      )}
    </h3>
  );
};

export default function Home() {
  return (
    <Layout>
      <div className="wrap">
        <PageTitle
          title="yeoning"
          description="Front-end developer"
          image="/images/custom_emoji_me.png"
        />
        <div className="contents">
          <ContentsTitle title="Project" />
        </div>
        <div className="contents">
          <ContentsTitle title="Blog" />
        </div>
      </div>
    </Layout>
  );
}

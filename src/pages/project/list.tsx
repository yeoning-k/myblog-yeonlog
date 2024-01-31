import Layout from '@/components/Layout';
import PageTitle from '@/components/PageTitle';
import Posts from '@/components/layout/Posts';

export default function ProjectListPage() {
  return (
    <Layout>
      <div className="wrap">
        <PageTitle
          title="Project"
          description="스터디용 프로젝트 모음집"
          emoji="💻"
        />
        <Posts dir="project" />
      </div>
    </Layout>
  );
}

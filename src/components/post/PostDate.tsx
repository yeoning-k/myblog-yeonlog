import { FiCalendar } from 'react-icons/fi';

const PostDate = ({ className, date }: { className: string; date: string }) => {
  const convertDate = date.split('일')[0];
  return (
    <div className={className}>
      <FiCalendar stroke="#999" />
      {convertDate}일
    </div>
  );
};

export default PostDate;

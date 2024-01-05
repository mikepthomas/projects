import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import type Author from '../interfaces/author';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  lastmod?: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, lastmod, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="md:block mb-6">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="md:block mb-6">
        <FontAwesomeIcon className="mr-2" icon={['fas', 'calendar-day']} />
        Created <DateFormatter dateString={date} />
        {lastmod ? (
          <>
            , last modified <DateFormatter dateString={lastmod} />
          </>
        ) : (
          ''
        )}
      </div>
      <div className="mb-6 sm:mx-0">
        <CoverImage title={title} src={coverImage} imageHasPriority />
      </div>
    </>
  );
};

export default PostHeader;

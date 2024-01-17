import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'reactstrap';
import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import type Author from '../interfaces/author';
import { Tags } from './';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  lastmod?: string;
  author: Author;
  tags?: string[];
};

const PostHeader = ({
  title,
  coverImage,
  date,
  lastmod,
  author,
  tags,
}: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <Container className="mb-6">
        <Avatar name={author.name} picture={author.picture} />
      </Container>
      <Container className="mb-6">
        <FontAwesomeIcon className="mr-2" icon={['fas', 'calendar-day']} />
        Created <DateFormatter dateString={date} />
        {lastmod ? (
          <>
            , last modified <DateFormatter dateString={lastmod} />
          </>
        ) : (
          ''
        )}
      </Container>
      <Tags tags={tags} />
      <Container className="mb-6 sm:mx-0">
        <CoverImage
          className="img-fluid img-thumbnail"
          title={title}
          src={coverImage}
          imageHasPriority
        />
      </Container>
    </>
  );
};

export default PostHeader;

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Avatar from './avatar';
import CoverImage from './cover-image';
import DateFormatter from './date-formatter';
import type Author from '../interfaces/author';
import { PROJECTS_PATH } from '../lib/constants';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  lastmod: string;
  description: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  lastmod,
  description,
  author,
  slug,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`${PROJECTS_PATH}/${slug}`} href={`${PROJECTS_PATH}/[slug]`}>
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
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
      <p className="text-lg leading-relaxed mb-4">{description}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
};

export default PostPreview;

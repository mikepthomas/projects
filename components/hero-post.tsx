import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
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

const HeroPost = ({
  title,
  coverImage,
  date,
  lastmod,
  description,
  author,
  slug,
}: Props) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          imageHasPriority
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`${PROJECTS_PATH}/${slug}`}
              href={`${PROJECTS_PATH}/[slug]`}
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
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
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{description}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
};

export default HeroPost;

import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

import { PROJECTS_PATH } from '../lib/constants';
import { basePath } from '../next.config';

type Props = {
  className?: string;
  title: string;
  src: string;
  slug?: string;
  imageHasPriority?: boolean;
};

const CoverImage = ({
  className = 'shadow-sm w-full',
  title,
  src,
  slug,
  imageHasPriority = false,
}: Props) => {
  const image = (
    <Image
      src={`${basePath}${src}`}
      alt={`Cover Image for ${title}`}
      className={cn(className, {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
      width={1280}
      height={960}
      priority={imageHasPriority}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link
          as={`${PROJECTS_PATH}/${slug}`}
          href={`${PROJECTS_PATH}/[slug]`}
          aria-label={title}
        >
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;

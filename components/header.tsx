import Link from 'next/link';
import { CMS_NAME } from '../lib/constants';

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 pt-20">
      <Link href="/" className="text-dark">
        {CMS_NAME}
      </Link>
      .
    </h2>
  );
};

export default Header;

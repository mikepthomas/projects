import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

export default function RedirectPage() {
  const redirect = 'https://www.mikethomas.info/projects/printer-voron-1.8';
  const router = useRouter();
  if (typeof window !== 'undefined') {
    router.replace(redirect);
  }
  return <NextSeo canonical={redirect} />;
}

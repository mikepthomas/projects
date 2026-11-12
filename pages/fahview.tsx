import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

export default function RedirectPage() {
  const redirect = 'https://fahview.mikethomas.info/';
  const router = useRouter();
  if (typeof window !== 'undefined') {
    router.replace(redirect);
  }
  return <NextSeo canonical={redirect} />;
}

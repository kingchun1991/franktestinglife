import type { Metadata } from 'next';

import Timeline from '~/lib/components/Timeline';

export const metadata: Metadata = {
  title: 'About',
  description:
    'The is the description of About from Static Metadata: https://nextjs.org/docs/app/building-your-application/optimizing/metadata#default-fields',
  openGraph: {
    url: 'https://www.franktestinglife.com/about',
    title: 'About | FrankTestingLife',
    description:
      'The is the description of About from Static Metadata: https://nextjs.org/docs/app/building-your-application/optimizing/metadata#default-fields',
    images: {
      url: 'https://og-image.sznm.dev/About.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg',
      alt: 'FrankTestingLife og-image',
    },
  },
};

export default async function index() {
  return <Timeline />;
}

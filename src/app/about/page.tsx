import type { Metadata } from 'next';

import About from '~/lib/pages/about';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Frank',
  openGraph: {
    url: 'https://www.franktestinglife.com/about',
    title: 'About | FrankTestingLife',
    description: 'About Frank',
    images: {
      url: 'https://og-image.sznm.dev/About.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg',
      alt: 'FrankTestingLife og-image',
    },
  },
};

export default About;

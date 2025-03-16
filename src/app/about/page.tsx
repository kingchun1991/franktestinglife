/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from 'next';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

import AboutLayout from '@/lib/components/about';
import type { IPosts } from '@/lib/types/custom-types';
import { getFileBySlug } from '@/lib/utils/mdx';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Frank',
  openGraph: {
    url: 'https://www.franktestinglife.com/about',
    title: 'About | FrankTestingLife',
    description: 'About Frank',
    images: {
      url: 'https://www.franktestinglife.com/api/og/cover?heading=About%20|%20nextjs-chakra-starter-blog&template=plain&center=true',
      alt: 'About | FrankTestingLife og-image',
    },
  },
};

async function getAbout() {
  return getFileBySlug('about', '_index');
}

export default async function index() {
  const {
    metaInformation,
    mdxSource,
  }: {
    metaInformation: IPosts;
    mdxSource: MDXRemoteSerializeResult;
  } = await getAbout();

  return <AboutLayout post={metaInformation} mdxSource={mdxSource} />;
}

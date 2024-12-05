export const siteConfig: SitesConfig = {
  title: 'FrankTestingLife',
  titleTemplate: '%s | FrankTestingLife',
  description: 'Next.js + chakra-ui + TypeScript + MDX templat',
  language: 'en',
  url: 'https://www.franktestinglife.com',
  repoUrl: 'https://github.com/kingchun1991/franktestinglife',
  repoBranch: 'main',
  donationUrl: 'https://opencollective.com/chakra-ui',
  navigation: [
    // {
    //   title: 'Blog',
    //   url: '/blog',
    //   children: [
    //     { title: 'Blog2', url: '/blog/blog2' },
    //     {
    //       title: 'Blog3',
    //       url: '/antiepidemiczone/rat',
    //     },
    //   ],
    // },
    // { title: 'Tags', url: '/tags' },
    { title: 'About', url: '/about' },
  ],
};

export const giscusConfig: GiscusConfig = {
  repo: 'kingchun1991/franktestinglife',
  repo_id: 'R_kgDOJ2sHHw',
};

interface GiscusConfig {
  repo: string;
  repo_id: string;
}

interface SitesConfig {
  title: string;
  titleTemplate: string;
  description: string;
  language: string;
  url: string;
  repoUrl: string;
  donationUrl: string;
  navigation: NavItem[];
  repoBranch: string;
}

export interface NavItem {
  title: string;
  url?: string;
  external?: boolean;
  status?: string;
  children?: NavItem[];
}

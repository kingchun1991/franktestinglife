export interface IFrontMatter {
  publishedAt: string;
  modifiedAt: string;
  slug: string;
  summary: string;
  title: string;
  wordCount: number;
  draft: boolean;
  author: string;
}

export interface IPosts {
  publishedAt?: string;
  modifiedAt?: string;
  slug?: string;
  summary: string;
  title: string;
  image: string;
  categories: string[];
  draft?: boolean;
  author: string;
  tags?: string[];
}

export interface ICompanyInfo {
  companyKey: string;
  companyName: string;
  companyIcon: string;
  companyJobLink: string;
  tags: string[];
}

export interface IWorkexp {
  companyKey: string;
  from: string;
  to: string;
  companyName: string;
  title: string;
}

export interface IWorkexpHeader {
  companyKey: string;
  from: string;
  to: string;
  companyName: string;
  companyIcon: string;
}
export interface IAbout {
  meta_title: string;
  title: string;
  image: string;
  description: string;
}

export type Post = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    image?: string;
    categories: string[];
    author: string;
    tags: string[];
    date?: string;
    draft?: boolean;
  };
  slug?: string;
  content?: string;
};

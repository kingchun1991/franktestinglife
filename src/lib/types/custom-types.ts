interface IReadingTime {
  text: string;
  minutes: number;
  time: number;
  words: number;
}

export interface IFrontMatter {
  publishedAt: string;
  modifiedAt: string;
  readingTime: IReadingTime;
  slug: string;
  summary: string;
  title: string;
  wordCount: number;
}

export interface IPosts {
  publishedAt: string;
  modifiedAt: string;
  slug: string;
  summary: string;
  title: string;
  image: string;
  category: string;
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

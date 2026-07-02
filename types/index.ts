import type { StaticImageData } from 'next/image';

export interface pagesListsType {
  id: number;
  title: string;
  href: string;
  icon: React.ReactNode;
}

export interface socialListsTypes {
  id: number;
  title: string;
  icon: StaticImageData | string;
  link: string;
}

export interface socialBrandsTypes {
  id: number;
  name: string;
  icon: string;
  lightIcon: string;
  link: string;
}

export interface counterListsType {
  id: number;
  title: string;
  value: number | string;
}

export interface myExperienceTypes {
  id: number;
  year: string;
  title: string;
  company: string;
  label: string;
  description: string;
  link: string;
  logo: string;
  logoLight: string;
}

export interface myStackTypes {
  id: number;
  category: string;
  title: string;
  description: string;
  logo: string;
  lightLogo: string;
  link: string;
}

export interface myServicesTypes {
  id: number;
  title: string;
  description: string;
  icon: string;
  lightIcon: string;
  link: string;
}
export interface myShowCasesTypes {
  id: number;
  title: string;
  description: string;
  type: string;
  theme: string;
  image: StaticImageData | string;
}

export interface testimonialsTypes {
  id: number;
  name: string;
  description: string;
  location: string;
  avatar: StaticImageData | string;
}

export interface myServicesPlansTypes {
  id: number;
  service: string;
  description: string[];
  icon: string;
  lightIcon: string;
}

export type FAQ = {
  question: string;
  answer: string;
};

export interface FollowerData {
  platform: string;
  url: string;
  icon: string;
  lightIcon: string;
}

export type ChangeFrequency =
  | 'yearly'
  | 'daily'
  | 'monthly'
  | 'always'
  | 'hourly'
  | 'weekly'
  | 'never';

export interface SitemapPage {
  url: string;
  lastModified: Date;
  changeFrequency: ChangeFrequency;
  priority: number;
}

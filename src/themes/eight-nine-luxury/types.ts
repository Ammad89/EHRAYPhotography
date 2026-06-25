export interface ThemeBrand {
  name: string;
  tagline: string;
  logo: string;
  favicon: string;
}

export interface ThemeNavigationItem {
  label: string;
  href: string;
}

export interface ThemeHero {
  eyebrow: string;
  heading: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  backgroundImage: string;
}

export interface ThemeStat {
  value: string;
  label: string;
}

export interface ThemePortfolioItem {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
}

export interface ThemeTestimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface ThemeService {
  title: string;
  description: string;
  href: string;
  tag?: string;
  image: string;
}

export interface ThemeProcessStep {
  title: string;
  description: string;
}

export interface ThemeSeo {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
}

export interface ThemeContent {
  brand: ThemeBrand;

  navigation: ThemeNavigationItem[];

  hero: ThemeHero;

  stats: ThemeStat[];

  portfolio: ThemePortfolioItem[];

  services: ThemeService[];

  testimonials: ThemeTestimonial[];

  process: ThemeProcessStep[];

  seo: ThemeSeo;
}

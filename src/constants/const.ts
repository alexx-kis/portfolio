export const basePath = process.env.NODE_ENV === 'production'
  ? '/portfolio-next'
  : '';

export enum AppRoute {
  MAIN = '/',
  ABOUT = '/about',
  PROJECTS = '/projects'
}

export const HEADER_MENU_ITEMS = [
  {
    link: AppRoute.MAIN,
    name: 'Home',
  },
  {
    link: AppRoute.ABOUT,
    name: 'About me',
  },
  {
    link: AppRoute.PROJECTS,
    name: 'My projects',
  },
  {
    link: '#contact',
    name: 'Contact',
  },
];

export const PAGE_TRANSITION_TIME = 180;

export enum NameSpace {
  OPEN_ELEMENTS = 'OPEN_ELEMENTS'
}

export enum OpenElement {
  ASIDE = 'ASIDE',
}
import {
  LeafPage,
  Page,
  ParentPage,
} from '../../page';

// export const mainIntroUrl = '/introduction';

// export function bookUrl(bookName: string): string {
//   return `/book/${bookName}`;
// }

// export function bookOverviewUrl(bookName: string): string {
//   return `/book/${bookName}/overview`;
// }

// export type MakePageUrl = (bookName: string, pageName: string, stepName: string) => string;

// export const lastStep = 'last';

export function commonNotionUrl(bookName: string, pageName: string, stepName?: string): string {
  if (stepName) {
    return `/elements//book/${bookName}/common-notion/${pageName}/select=${stepName}`;
  } else {
    return `/elements/book/${bookName}/common-notion/${pageName}`;
  }
}

export function definitionUrl(bookName: string, pageName: string, stepName?: string): string {
  if (stepName) {
    return `/elements/book/${bookName}/definition/${pageName}/select=${stepName}`;
  } else {
    return `/elements/book/${bookName}/definition/${pageName}`;
  }
}

export function postulateUrl(bookName: string, pageName: string, stepName?: string): string {
  if (stepName) {
    return `/elements/book/${bookName}/postulate/${pageName}/select=${stepName}`;
  } else {
    return `/elements/book/${bookName}/postulate/${pageName}`;
  }
}

export function propositionUrl(bookName: string, pageName: string, stepName?: string): string {
  if (stepName) {
    return `/elements/book/${bookName}/propostion/${pageName}/select=${stepName}`;
  } else {
    return `/elements/book/${bookName}/propostion/${pageName}`;
  }
}

export function parentPageUrl(page: ParentPage | null): string {
  if (page) {
    return `${parentPageUrl(page.parent)}${page.name}/`;
  } else {
    return '/';
  }
}

export function leafPageUrl(page: LeafPage): string {
  return `${parentPageUrl(page.parent)}${page.name}`;
}

export function pageUrl(page: Page): string {
  if (page.pageType === 'leaf') {
    return leafPageUrl(page);
  } else {
    return parentPageUrl(page);
  }
}

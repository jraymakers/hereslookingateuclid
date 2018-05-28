export const mainIntroUrl = '/';

export function bookUrl(bookName: string): string {
  return `/book/${bookName}`;
}

export function bookIntroUrl(bookName: string): string {
  return `/book/${bookName}`;
}

export type MakePageUrl = (bookName: string, pageName: string, stepName: string) => string;

export const lastStep = 'last';

export function commonNotionUrl(bookName: string, pageName: string, stepName?: string): string {
  if (stepName) {
    return `/book/${bookName}/common-notion/${pageName}/select=${stepName}`;
  } else {
    return `/book/${bookName}/common-notion/${pageName}`;
  }
}

export function definitionUrl(bookName: string, pageName: string, stepName?: string): string {
  if (stepName) {
    return `/book/${bookName}/definition/${pageName}/select=${stepName}`;
  } else {
    return `/book/${bookName}/definition/${pageName}`;
  }
}

export function postulateUrl(bookName: string, pageName: string, stepName?: string): string {
  if (stepName) {
    return `/book/${bookName}/postulate/${pageName}/select=${stepName}`;
  } else {
    return `/book/${bookName}/postulate/${pageName}`;
  }
}

export function propositionUrl(bookName: string, pageName: string, stepName?: string): string {
  if (stepName) {
    return `/book/${bookName}/propostion/${pageName}/select=${stepName}`;
  } else {
    return `/book/${bookName}/propostion/${pageName}`;
  }
}

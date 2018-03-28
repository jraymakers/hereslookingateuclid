export const mainContentsUrl = '/contents';
export const mainIntroUrl = '/introduction';

export function bookUrl(bookName: string): string {
  return `/book/${bookName}`;
}

export function bookContentsUrl(bookName: string): string {
  return `/book/${bookName}/contents`;
}

export function bookIntroUrl(bookName: string): string {
  return `/book/${bookName}/introduction`;
}

export type MakePageUrl = (bookName: string, pageName: string, stepName: string) => string;

export const lastStep = 'last';

export function axiomUrl(bookName: string, pageName: string, stepName?: string): string {
  if (stepName) {
    return `/book/${bookName}/axiom/${pageName}/select=${stepName}`;
  } else {
    return `/book/${bookName}/axiom/${pageName}`;
  }
}

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

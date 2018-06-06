export const elementsPageName = 'elements';

export const bookPageName = 'book';

export const commonNotionPageName = 'common-notion';
export const definitionPageName = 'definition';
export const postulatePageNaem = 'postulate';
export const propositionPageName = 'proposition';

export const lastStep = 'last';

export function bookSectionPageUrl(bookName: string, sectionName: string, pageName: string): string {
  return `/elements/book/${bookName}/${sectionName}/${pageName}`;
}

export function maybeAddStep(url: string, stepName?: string): string {
  return stepName ? `${url}/select=${stepName}` : url;
}

export function commonNotionUrl(bookName: string, pageName: string, stepName?: string): string {
  return maybeAddStep(bookSectionPageUrl(bookName, commonNotionPageName, pageName), stepName);
}

export function definitionUrl(bookName: string, pageName: string, stepName?: string): string {
  return maybeAddStep(bookSectionPageUrl(bookName, definitionPageName, pageName), stepName);
}

export function postulateUrl(bookName: string, pageName: string, stepName?: string): string {
  return maybeAddStep(bookSectionPageUrl(bookName, postulatePageNaem, pageName), stepName);
}

export function propositionUrl(bookName: string, pageName: string, stepName?: string): string {
  return maybeAddStep(bookSectionPageUrl(bookName, propositionPageName, pageName), stepName);
}

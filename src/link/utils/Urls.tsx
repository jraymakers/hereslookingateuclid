export const mainContentsUrl = '/contents';
export const mainIntroUrl = '/introduction';

// export function axiomUrl(bookName: string, pageName: string): string {
//   return `/book/${bookName}/axiom/${pageName}`;
// }

// export function axiomStepUrl(bookName: string, pageName: string, stepName: string): string {
//   return `/book/${bookName}/axiom/${pageName}/select=${stepName}`;
// }

export function bookUrl(bookName: string): string {
  return `/book/${bookName}`;
}

export function bookContentsUrl(bookName: string): string {
  return `/book/${bookName}/contents`;
}

export function bookIntroUrl(bookName: string): string {
  return `/book/${bookName}/introduction`;
}

export function commonNotionUrl(bookName: string, pageName: string): string {
  return `/book/${bookName}/common-notion/${pageName}`;
}

export function commonNotionStepUrl(bookName: string, pageName: string, stepName: string): string {
  return `/book/${bookName}/common-notion/${pageName}/select=${stepName}`;
}

export function definitionUrl(bookName: string, pageName: string): string {
  return `/book/${bookName}/definition/${pageName}`;
}

export function definitionStepUrl(bookName: string, pageName: string, stepName: string): string {
  return `/book/${bookName}/definition/${pageName}/select=${stepName}`;
}

export function postulateUrl(bookName: string, pageName: string): string {
  return `/book/${bookName}/postulate/${pageName}`;
}

export function postulateStepUrl(bookName: string, pageName: string, stepName: string): string {
  return `/book/${bookName}/postulate/${pageName}/select=${stepName}`;
}

export function propositionUrl(bookName: string, pageName: string): string {
  return `/book/${bookName}/propostion/${pageName}`;
}

export function propositionStepUrl(bookName: string, pageName: string, stepName: string): string {
  return `/book/${bookName}/propostion/${pageName}/select=${stepName}`;
}

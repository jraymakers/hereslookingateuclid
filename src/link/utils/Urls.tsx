export const mainContentsUrl = '/contents';
export const mainIntroUrl = '/intro';

export function bookUrl(bookName: string): string {
  return `/book/${bookName}`;
}

export function bookContentsUrl(bookName: string): string {
  return `/book/${bookName}/contents`;
}

export function bookIntroUrl(bookName: string): string {
  return `/book/${bookName}/intro`;
}

export function propUrl(bookName: string, propName: string): string {
  return `/book/${bookName}/prop/${propName}`;
}

export function propStepUrl(bookName: string, propName: string, stepNum: number | string): string {
  return `/book/${bookName}/prop/${propName}/step=${stepNum}`;
}

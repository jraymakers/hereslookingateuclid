export const introductionText = 'Introduction';
export const overviewText = 'Overview';

export function bookTitle(bookName: string): string {
  return `Book ${bookName}`;
}

export function commonNotionNavText(bookName: string, pageName: string): string {
  return `${bookName}: Common Notion ${pageName}`;
}

export function commonNotionRefText(bookName: string, pageName: string): string {
  return `CN ${pageName}`;
}

export function commonNotionTitle(pageName: string): string {
  return `Common Notion ${pageName}`;
}

export function definitionNavText(bookName: string, pageName: string): string {
  return `${bookName}: Definition ${pageName}`;
}

export function definitionRefText(bookName: string, defName: string): string {
  return `Def ${bookName}.${defName}`;
}

export function definitionTitle(pageName: string): string {
  return `Definition ${pageName}`;
}

export function postulateNavText(bookName: string, pageName: string): string {
  return `${bookName}: Postulate ${pageName}`;
}

export function postulateRefText(bookName: string, pageName: string): string {
  return `Post ${pageName}`;
}

export function postulateTitle(postulateName: string): string {
  return `Postulate ${postulateName}`;
}

export function propositionNavText(bookName: string, pageName: string): string {
  return `${bookName}: Proposition ${pageName}`;
}

export function propositionRefText(bookName: string, pageName: string): string {
  return `${bookName}.${pageName}`;
}

export function propositionTitle(pageName: string): string {
  return `Proposition ${pageName}`;
}

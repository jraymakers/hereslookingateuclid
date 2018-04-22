export const introductionText = 'Introduction';

export function bookTitle(bookName: string): string {
  return `Book ${bookName}`;
}

export function axiomNavText(bookName: string, pageName: string): string {
  return `${bookName}: Axiom ${pageName}`;
}

export function axiomRefText(bookName: string, pageName: string): string {
  return `${bookName}.Ax.${pageName}`;
}

export function axiomTitle(pageName: string): string {
  return `Axiom ${pageName}`;
}

export function commonNotionNavText(bookName: string, pageName: string): string {
  return `${bookName}: Common Notion ${pageName}`;
}

export function commonNotionRefText(bookName: string, pageName: string): string {
  return `${bookName}.CN.${pageName}`;
}

export function commonNotionTitle(pageName: string): string {
  return `Common Notion ${pageName}`;
}

export function definitionNavText(bookName: string, pageName: string): string {
  return `${bookName}: Definition ${pageName}`;
}

export function definitionRefText(bookName: string, defName: string): string {
  return `${bookName}.Def.${defName}`;
}

export function definitionTitle(pageName: string): string {
  return `Definition ${pageName}`;
}

export function postulateNavText(bookName: string, pageName: string): string {
  return `${bookName}: Postulate ${pageName}`;
}

export function postulateRefText(bookName: string, pageName: string): string {
  return `${bookName}.Pos.${pageName}`;
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

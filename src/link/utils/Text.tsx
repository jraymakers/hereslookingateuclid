export const introductionText = 'Introduction';

export function bookTitle(bookName: string): string {
  return `Book ${bookName}`;
}

export function defGroupNavText(bookName: string, defGroupName: string): string {
  return `${bookName}.Def${defGroupName}`;
}

export function defGroupTitle(defGroupName: string, numSteps: number): string {
  return `Definition${numSteps > 1 ? 's' : ''} ${defGroupName}`;
}

export function propNavText(bookName: string, propName: string): string {
  return `${bookName}.${propName}`; // should propName be lowercase roman here?
}

export function propTitle(propName: string): string {
  return `Proposition ${propName}`;
}

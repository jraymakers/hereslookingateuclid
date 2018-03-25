export const introductionText = 'Introduction';

export function axiomGroupNavText(bookName: string, axiomGroupName: string): string {
  return `${bookName}: Axioms ${axiomGroupName}`;
}

export function axiomGroupTitle(axiomGroupName: string): string {
  return `Axioms ${axiomGroupName}`;
}

export function bookTitle(bookName: string): string {
  return `Book ${bookName}`;
}

export function defGroupNavText(bookName: string, defGroupName: string): string {
  return `${bookName}: Def ${defGroupName}`;
}

export function defGroupTitle(defGroupName: string, numSteps: number): string {
  return `Definition${numSteps > 1 ? 's' : ''} ${defGroupName}`;
}

export function postulateNavText(bookName: string, postulateName: string): string {
  return `${bookName}: Postulate ${postulateName}`;
}

export function postulateTitle(postulateName: string): string {
  return `Postulate ${postulateName}`;
}

export function propNavText(bookName: string, propName: string): string {
  return `${bookName}: Prop ${propName}`;
}

export function propTitle(propName: string): string {
  return `Proposition ${propName}`;
}

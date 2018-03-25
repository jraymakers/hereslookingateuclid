export const mainContentsUrl = '/contents';
export const mainIntroUrl = '/introduction';

export function axiomGroupUrl(bookName: string, axiomGroupName: string): string {
  return `/book/${bookName}/axioms/${axiomGroupName}`;
}

export function axiomGroupStepUrl(bookName: string, axiomGroupName: string, stepName: string): string {
  return `/book/${bookName}/axioms/${axiomGroupName}/axiom=${stepName}`;
}

export function bookUrl(bookName: string): string {
  return `/book/${bookName}`;
}

export function bookContentsUrl(bookName: string): string {
  return `/book/${bookName}/contents`;
}

export function bookIntroUrl(bookName: string): string {
  return `/book/${bookName}/introduction`;
}

export function defGroupUrl(bookName: string, defGroupName: string): string {
  return `/book/${bookName}/definitions/${defGroupName}`;
}

export function defGroupStepUrl(bookName: string, defGroupName: string, stepName: string): string {
  return `/book/${bookName}/definitions/${defGroupName}/definition=${stepName}`;
}

export function postulateUrl(bookName: string, postName: string): string {
  return `/book/${bookName}/postulate/${postName}`;
}

export function postulateStepUrl(bookName: string, postName: string, stepName: string): string {
  return `/book/${bookName}/postulate/${postName}/step=${stepName}`;
}

export function propUrl(bookName: string, propName: string): string {
  return `/book/${bookName}/propostion/${propName}`;
}

export function propStepUrl(bookName: string, propName: string, stepName: string): string {
  return `/book/${bookName}/propostion/${propName}/step=${stepName}`;
}

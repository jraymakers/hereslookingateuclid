import {
  BookContentsPage,
  BookIntroPage,
  LinkInfo,
  Proposition,
  PropositionPage,
} from '../types';

export function bookContentsPage(
  bookName: string,
  sectionLinks: ReadonlyArray<LinkInfo>,
  prev: LinkInfo | null,
  up: LinkInfo | null,
  next: LinkInfo | null,
): BookContentsPage {
  return {
    pageType: 'bookContents',
    bookName,
    sectionLinks,
    prev: prev,
    up: up,
    next: next,
  }
}

export function bookIntroPage(
  bookName: string,
  content: () => JSX.Element,
  prev: LinkInfo | null,
  up: LinkInfo | null,
  next: LinkInfo | null,
): BookIntroPage {
  return {
    pageType: 'bookIntro',
    bookName,
    content,
    prev: prev,
    up: up,
    next: next,
  }
}

export function propPage(
  bookName: string,
  proposition: Proposition,
  prev: LinkInfo | null,
  up: LinkInfo | null,
  next: LinkInfo | null,
): PropositionPage {
  return {
    pageType: 'proposition',
    bookName,
    proposition,
    prev: prev,
    up: up,
    next: next,
  }
}

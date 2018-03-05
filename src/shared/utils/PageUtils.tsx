import {
  BookContentsPage,
  BookIntroPage,
  ContentsPage,
  IntroPage,
  LinkInfo,
  LinkInfoList,
  ParagraphList,
  Proposition,
  PropositionPage,
} from '../types';

export function contentsPage(
  contentsLinks: LinkInfoList,
  prev: LinkInfo | null,
  up: LinkInfo | null,
  next: LinkInfo | null,
): ContentsPage {
  return {
    title: null,
    contentsLinks,
    prev,
    up,
    next,
  }
}

export function introPage(
  title: LinkInfo | null,
  paragraphs: ParagraphList,
  prev: LinkInfo | null,
  up: LinkInfo | null,
  next: LinkInfo | null,
): IntroPage {
  return {
    title,
    paragraphs,
    prev,
    up,
    next,
  }
}

export function bookContentsPage(
  bookName: string,
  contentsLinks: LinkInfoList,
  prev: LinkInfo | null,
  up: LinkInfo | null,
  next: LinkInfo | null,
): BookContentsPage {
  return {
    bookName,
    title: `Book ${bookName}`,
    contentsLinks,
    prev,
    up,
    next,
  }
}

export function bookIntroPage(
  bookName: string,
  title: LinkInfo | null,
  paragraphs: ParagraphList,
  prev: LinkInfo | null,
  up: LinkInfo | null,
  next: LinkInfo | null,
): BookIntroPage {
  return {
    bookName,
    title,
    paragraphs,
    prev,
    up,
    next,
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
    bookName,
    proposition,
    prev,
    up,
    next,
  }
}

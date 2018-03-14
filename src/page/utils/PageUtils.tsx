import {
  ParagraphList,
} from '../../paragraph';
import {
  LinkInfo,
  LinkInfoList,
  Proposition,
} from '../../shared/types';

import {
  BookContentsPage,
  BookTextPage,
  ContentsPage,
  PropositionPage,
  TextPage,
} from '../types/Page';

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

export function textPage(
  title: LinkInfo | null,
  paragraphs: ParagraphList,
  prev: LinkInfo | null,
  up: LinkInfo | null,
  next: LinkInfo | null,
): TextPage {
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

export function bookTextPage(
  bookName: string,
  title: LinkInfo | null,
  paragraphs: ParagraphList,
  prev: LinkInfo | null,
  up: LinkInfo | null,
  next: LinkInfo | null,
): BookTextPage {
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

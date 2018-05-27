import {
  bookTitleContentsLink,
  bookTitleIntroLink,
  mainIntroLink,
  SubtitledLinkInfoList,
} from '../link';
import {
  BookMap,
  ContentsPage,
  TextPage,
} from '../page';

import book01 from './book01';
import intro from './MainIntro';

export const contentsLinks: SubtitledLinkInfoList = [
  mainIntroLink,
  bookTitleContentsLink(book01.bookName),
];

export const books: BookMap = {
  [book01.bookName]: book01,
};

export const mainContentsPage: ContentsPage = {
  type: 'contents',
  contentsLinks,
};
export const mainIntroPage: TextPage = {
  type: 'text',
  paragraphs: intro,
  next: bookTitleIntroLink(book01.bookName),
};

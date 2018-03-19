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

export const mainContentsPage: ContentsPage = { contentsLinks };
export const mainIntroPage: TextPage = {
  paragraphs: intro,
  next: bookTitleIntroLink(book01.bookName),
};

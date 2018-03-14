import {
  bookTitleContentsLink,
  bookTitleIntroLink,
  LinkInfo,
  mainIntroLink,
} from '../link';
import {
  BookMap,
  contentsPage,
  textPage,
} from '../page';

import intro from './MainIntro';
import book01 from './book01';

export const contents: ReadonlyArray<LinkInfo> = [
  mainIntroLink,
  bookTitleContentsLink(book01.bookName),
];

export const books: BookMap = {
  [book01.bookName]: book01,
};

export const mainContentsPage = contentsPage(contents, null, null, null);
export const mainIntroPage = textPage(null, intro, null, null, bookTitleIntroLink(book01.bookName));

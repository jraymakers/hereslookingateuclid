import {
  BookMap,
  LinkInfo,
} from '../shared/types';

import {
  bookTitleContentsLink,
  bookTitleIntroLink,
  mainIntroLink,
} from '../routes/Links';

import {
  contentsPage,
  introPage,
} from '../shared/utils/PageUtils';

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
export const mainIntroPage = introPage(null, intro, null, null, bookTitleIntroLink(book01.bookName));

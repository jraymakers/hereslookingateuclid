import {
  bookTitleIntroLink,
  mainIntroLink,
  SubtitledLinkInfoList,
} from '../link';
import {
  BookMap,
  TextPage,
} from '../page';

import book01 from './book01';
import intro from './MainIntro';

export const mainContentsLinks: SubtitledLinkInfoList = [
  mainIntroLink,
  bookTitleIntroLink(book01.bookName),
];

export const mainIntroPage: TextPage = {
  type: 'text',
  paragraphs: intro,
  next: bookTitleIntroLink(book01.bookName),
};

export const books: BookMap = {
  [book01.bookName]: book01,
};

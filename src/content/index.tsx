import {
  bookTitleContentsLink,
  bookTitleIntroLink,
  SubtitledLinkInfoList,
  mainIntroLink,
} from '../link';
import {
  BookMap,
  ContentsPage,
  TextPage,
} from '../page';

import intro from './MainIntro';
import book01 from './book01';

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
  next: bookTitleIntroLink(book01.bookName)
}

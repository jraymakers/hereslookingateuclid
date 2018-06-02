// import {
//   bookOverviewNavLink,
//   bookTitleOverviewLink,
//   mainIntroLink,
//   SubtitledLinkInfoList,
// } from '../link';
import {
  // ParentPage,
  PageDataList,
  parentPageData,
  // parentPageMaker,
  // BookMap,
  // TextPage,
} from '../page';

import introduction from './MainIntro';

import book01 from './book01';

// export const mainContentsLinks: SubtitledLinkInfoList = [
//   mainIntroLink,
//   bookTitleOverviewLink(book01.bookName),
// ];

// export const mainIntroPage: TextPage = {
//   type: 'text',
//   paragraphs: intro,
//   next: bookOverviewNavLink(book01.bookName),
// };

// export const books: BookMap = {
//   [book01.bookName]: book01,
// };

const books = parentPageData('book', 'Books', [
  book01,
]);

const pageData = parentPageData('elements', `Euclid's Elements`, [
  introduction,
  books,
]);

export default pageData;

// export const books = parentPageMaker('book', [
//   book01,
// ])();

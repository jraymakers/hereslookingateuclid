import {
  PageDataList,
  parentPageData,
} from '../page';

import introduction from './MainIntro';

import book01 from './book01';

const books = parentPageData('book', 'Books', [
  book01,
]);

const pageData = parentPageData('elements', `Euclid's Elements`, [
  introduction,
  books,
]);

export default pageData;

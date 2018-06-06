import {
  PageDataList,
  parentPageData,
  parentPageDataNoNav,
} from '../page';

import introduction from './MainIntro';

import book01 from './book01';
import book02 from './book02';

const books = parentPageDataNoNav('book', 'Books', [
  book01,
  book02,
]);

const pageData = parentPageData('elements', `Euclid's Elements`, [
  introduction,
  books,
]);

export default pageData;

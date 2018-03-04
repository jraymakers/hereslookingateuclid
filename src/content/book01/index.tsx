import {
  Book,
  LinkInfo,
  PropositionPageMap,
} from '../../shared/types';

import {
  bookTitleContentsLink,
  bookTitleIntroLink,
  bookIntroLink,
  mainIntroLink,
  propTitleLink,
  propNavLink,
} from '../../routes/Links';

import {
  bookContentsPage,
  bookIntroPage,
  propPage,
} from '../../shared/utils/PageUtils';

import intro from './Book1Intro';
import prop1 from './Book1Prop1';
import prop2 from './Book1Prop2';

const bookName = 'I';

const titleContentsLink = bookTitleContentsLink(bookName);
const titleIntroLink = bookTitleIntroLink(bookName);
const introLink = bookIntroLink(bookName);
const prop1Nav = propNavLink(bookName, prop1.propName);
const prop2Nav = propNavLink(bookName, prop2.propName);

const contents: ReadonlyArray<LinkInfo> = [
  introLink,
  propTitleLink(bookName, prop1.propName),
  propTitleLink(bookName, prop2.propName),
];

const contentsPage = bookContentsPage(bookName, contents, null, null, null);
const introPage = bookIntroPage(bookName, titleContentsLink, intro, mainIntroLink, null, prop1Nav);

const propositionPages: PropositionPageMap = {
  [prop1.propName]: propPage(bookName, prop1, titleIntroLink, null, prop2Nav),
  [prop2.propName]: propPage(bookName, prop2, prop1Nav, null, null),
};

const book: Book = {
  bookName,
  contentsPage,
  introPage,
  propositionPages,
};

export default book;

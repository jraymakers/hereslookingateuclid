import {
  bookIntroLink,
  bookTitleContentsLink,
  bookTitleIntroLink,
  LinkInfo,
  mainIntroLink,
  propNavLink,
  propTitleLink,
} from '../../link';
import {
  Book,
  BookContentsPage,
  BookPage,
  BookTextPage,
  BookTitleLinkPage,
  PropositionPage,
  PropositionPageMap,
} from '../../page';

import intro from './Book1Intro';
import prop1 from './Book1Prop1';
import prop2 from './Book1Prop2';

const bookName = 'I';

const titleContentsLink = bookTitleContentsLink(bookName);
const titleIntroLink = bookTitleIntroLink(bookName);
const introLink = bookIntroLink(bookName);
const prop1Nav = propNavLink(bookName, prop1.propName);
const prop2Nav = propNavLink(bookName, prop2.propName);

const contentsLinks: ReadonlyArray<LinkInfo> = [
  introLink,
  propTitleLink(bookName, prop1.propName),
  propTitleLink(bookName, prop2.propName),
];

const contentsPage: BookContentsPage = {
  bookName,
  title: titleContentsLink.text,
  contentsLinks
};

const bookPage: BookTitleLinkPage = {
  bookName,
  title: titleContentsLink,
};

const introPage: BookTextPage = {
  ...bookPage,
  paragraphs: intro,
  prev: mainIntroLink,
  next: prop1Nav,
};

const propositionPages: PropositionPageMap = {
  [prop1.propName]: { ...bookPage, proposition: prop1, prev: titleIntroLink, next: prop2Nav },
  [prop2.propName]: { ...bookPage, proposition: prop2, prev: prop1Nav, next: null },
};

const book: Book = {
  bookName,
  contentsPage,
  introPage,
  propositionPages,
};

export default book;

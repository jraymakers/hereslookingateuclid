import {
  bookIntroLink,
  bookTitleContentsLink,
  bookTitleIntroLink,
  defGroupNavLink,
  defGroupTitleLink,
  mainIntroLink,
  propNavLink,
  propTitleLink,
  SubtitledLinkInfoList,
} from '../../link';
import {
  Book,
  BookContentsPage,
  BookPage,
  BookTextPage,
  BookTitleLinkPage,
  StepsAndDiagramPage,
  StepsAndDiagramPageMap,
} from '../../page';

import intro from './Book1Intro';
import def1to4 from './Book1Def1to4';
import prop1 from './Book1Prop1';
import prop2 from './Book1Prop2';

const bookName = 'I';

const titleContentsLink = bookTitleContentsLink(bookName);
const titleIntroLink = bookTitleIntroLink(bookName);
const introLink = bookIntroLink(bookName);
const def1to4Nav = defGroupNavLink(bookName, def1to4.name);
const prop1Nav = propNavLink(bookName, prop1.name);
const prop2Nav = propNavLink(bookName, prop2.name);

const contentsLinks: SubtitledLinkInfoList = [
  introLink,
  defGroupTitleLink(bookName, def1to4),
  propTitleLink(bookName, prop1),
  propTitleLink(bookName, prop2),
];

const contentsPage: BookContentsPage = {
  bookName,
  header: titleContentsLink.text,
  contentsLinks
};

const bookPage: BookTitleLinkPage = {
  bookName,
  header: titleContentsLink,
};

const introPage: BookTextPage = {
  ...bookPage,
  paragraphs: intro,
  prev: mainIntroLink,
  next: def1to4Nav,
};

const definitionGroupPages: StepsAndDiagramPageMap = {
  [def1to4.name]: { ...bookPage, stepsAndDiagram: def1to4, prev: titleIntroLink, next: prop1Nav},
};

const propositionPages: StepsAndDiagramPageMap = {
  [prop1.name]: { ...bookPage, stepsAndDiagram: prop1, prev: def1to4Nav, next: prop2Nav },
  [prop2.name]: { ...bookPage, stepsAndDiagram: prop2, prev: prop1Nav, next: null },
};

const book: Book = {
  bookName,
  contentsPage,
  introPage,
  definitionGroupPages,
  propositionPages,
};

export default book;

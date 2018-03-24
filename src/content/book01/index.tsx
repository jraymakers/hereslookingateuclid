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

import def1to4 from './Book1Def1to4';
import def5to7 from './Book1Def5to7';
import def8to12 from './Book1Def8to12';
import intro from './Book1Intro';
import prop1 from './Book1Prop1';
import prop2 from './Book1Prop2';

const bookName = 'I';

const titleContentsLink = bookTitleContentsLink(bookName);
const titleIntroLink = bookTitleIntroLink(bookName);
const introLink = bookIntroLink(bookName);
const def1to4Nav = defGroupNavLink(bookName, def1to4.name);
const def5to7Nav = defGroupNavLink(bookName, def5to7.name);
const def8to12Nav = defGroupNavLink(bookName, def8to12.name);
const prop1Nav = propNavLink(bookName, prop1.name);
const prop2Nav = propNavLink(bookName, prop2.name);

const contentsLinks: SubtitledLinkInfoList = [
  introLink,
  defGroupTitleLink(bookName, def1to4),
  defGroupTitleLink(bookName, def5to7),
  defGroupTitleLink(bookName, def8to12),
  propTitleLink(bookName, prop1),
  propTitleLink(bookName, prop2),
];

const contentsPage: BookContentsPage = {
  bookName,
  header: titleContentsLink.text,
  contentsLinks,
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
  [def1to4.name]:   { ...bookPage, stepsAndDiagram: def1to4,   prev: titleIntroLink, next: def5to7Nav},
  [def5to7.name]:   { ...bookPage, stepsAndDiagram: def5to7,   prev: def1to4Nav,     next: def8to12Nav},
  [def8to12.name]:  { ...bookPage, stepsAndDiagram: def8to12,  prev: def5to7Nav,     next: prop1Nav},
};

const propositionPages: StepsAndDiagramPageMap = {
  [prop1.name]: { ...bookPage, stepsAndDiagram: prop1, prev: def5to7Nav, next: prop2Nav },
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

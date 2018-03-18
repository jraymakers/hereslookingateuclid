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
  DefinitionGroupPage,
  DefinitionGroupPageMap,
  PropositionPage,
  PropositionPageMap,
} from '../../page';

import intro from './Book1Intro';
import def1to4 from './Book1Def1to4';
import prop1 from './Book1Prop1';
import prop2 from './Book1Prop2';

const bookName = 'I';

const titleContentsLink = bookTitleContentsLink(bookName);
const titleIntroLink = bookTitleIntroLink(bookName);
const introLink = bookIntroLink(bookName);
const def1to4Nav = defGroupNavLink(bookName, def1to4.defGroupName);
const prop1Nav = propNavLink(bookName, prop1.propName);
const prop2Nav = propNavLink(bookName, prop2.propName);

const contentsLinks: SubtitledLinkInfoList = [
  introLink,
  defGroupTitleLink(bookName, def1to4.defGroupName, def1to4.summary),
  propTitleLink(bookName, prop1.propName, prop1.summary),
  propTitleLink(bookName, prop2.propName, prop2.summary),
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
  next: def1to4Nav,
};

const definitionGroupPages: DefinitionGroupPageMap = {
  [def1to4.defGroupName]: { ...bookPage, definitionGroup: def1to4, prev: titleIntroLink, next: prop1Nav},
};

const propositionPages: PropositionPageMap = {
  [prop1.propName]: { ...bookPage, proposition: prop1, prev: def1to4Nav, next: prop2Nav },
  [prop2.propName]: { ...bookPage, proposition: prop2, prev: prop1Nav, next: null },
};

const book: Book = {
  bookName,
  contentsPage,
  introPage,
  definitionGroupPages,
  propositionPages,
};

export default book;

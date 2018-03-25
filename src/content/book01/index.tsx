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

import def01to04 from './Book1Def01to04';
import def05to07 from './Book1Def05to07';
import def08to12 from './Book1Def08to12';
import def13to14 from './Book1Def13to14';
import def15to18 from './Book1Def15to18';
import def19 from './Book1Def19';
import def20to21 from './Book1Def20to21';
import def22 from './Book1Def22';
import def23 from './Book1Def23';
import intro from './Book1Intro';
import prop01 from './Book1Prop01';
import prop02 from './Book1Prop02';

const bookName = 'I';

const titleContentsLink = bookTitleContentsLink(bookName);
const titleIntroLink = bookTitleIntroLink(bookName);
const introLink = bookIntroLink(bookName);
const def01to04Nav = defGroupNavLink(bookName, def01to04.name);
const def05to07Nav = defGroupNavLink(bookName, def05to07.name);
const def08to12Nav = defGroupNavLink(bookName, def08to12.name);
const def13to14Nav = defGroupNavLink(bookName, def13to14.name);
const def15to18Nav = defGroupNavLink(bookName, def15to18.name);
const def19Nav = defGroupNavLink(bookName, def19.name);
const def20to21Nav = defGroupNavLink(bookName, def20to21.name);
const def22Nav = defGroupNavLink(bookName, def22.name);
const def23Nav = defGroupNavLink(bookName, def23.name);
const prop01Nav = propNavLink(bookName, prop01.name);
const prop02Nav = propNavLink(bookName, prop02.name);

const contentsLinks: SubtitledLinkInfoList = [
  introLink,
  defGroupTitleLink(bookName, def01to04),
  defGroupTitleLink(bookName, def05to07),
  defGroupTitleLink(bookName, def08to12),
  defGroupTitleLink(bookName, def13to14),
  defGroupTitleLink(bookName, def15to18),
  defGroupTitleLink(bookName, def19),
  defGroupTitleLink(bookName, def20to21),
  defGroupTitleLink(bookName, def22),
  defGroupTitleLink(bookName, def23),
  propTitleLink(bookName, prop01),
  propTitleLink(bookName, prop02),
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
  next: def01to04Nav,
};

const definitionGroupPages: StepsAndDiagramPageMap = {
  [def01to04.name]: { ...bookPage, stepsAndDiagram: def01to04, prev: titleIntroLink, next: def05to07Nav},
  [def05to07.name]: { ...bookPage, stepsAndDiagram: def05to07, prev: def01to04Nav,   next: def08to12Nav},
  [def08to12.name]: { ...bookPage, stepsAndDiagram: def08to12, prev: def05to07Nav,   next: def13to14Nav},
  [def13to14.name]: { ...bookPage, stepsAndDiagram: def13to14, prev: def08to12Nav,   next: def15to18Nav},
  [def15to18.name]: { ...bookPage, stepsAndDiagram: def15to18, prev: def13to14Nav,   next: def19Nav},
  [def19.name]:     { ...bookPage, stepsAndDiagram: def19,     prev: def15to18Nav,   next: def20to21Nav},
  [def20to21.name]: { ...bookPage, stepsAndDiagram: def20to21, prev: def19Nav,       next: def22Nav},
  [def22.name]:     { ...bookPage, stepsAndDiagram: def22,     prev: def20to21Nav,   next: def23Nav},
  [def23.name]:     { ...bookPage, stepsAndDiagram: def23,     prev: def22Nav,       next: prop01Nav},
};

const propositionPages: StepsAndDiagramPageMap = {
  [prop01.name]: { ...bookPage, stepsAndDiagram: prop01, prev: def23Nav,  next: prop02Nav },
  [prop02.name]: { ...bookPage, stepsAndDiagram: prop02, prev: prop01Nav, next: null },
};

const book: Book = {
  bookName,
  contentsPage,
  introPage,
  definitionGroupPages,
  propositionPages,
};

export default book;

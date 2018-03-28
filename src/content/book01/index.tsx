import {
  bookIntroLink,
  bookTitleContentsLink,
  bookTitleIntroLink,
  commonNotionNavLink,
  commonNotionTitleLink,
  definitionNavLink,
  definitionTitleLink,
  lastStep,
  mainIntroLink,
  postulateNavLink,
  postulateTitleLink,
  propositionNavLink,
  propositionTitleLink,
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

import cn1to5 from './Book1CommonNotions1to5';
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
import postulate1 from './Book1Postulate1';
import postulate2 from './Book1Postulate2';
import postulate3 from './Book1Postulate3';
import postulate4 from './Book1Postulate4';
import postulate5 from './Book1Postulate5';
import prop01 from './Book1Prop01';
import prop02 from './Book1Prop02';

const bookName = 'I';

const titleContentsLink = bookTitleContentsLink(bookName);
const titleIntroLink = bookTitleIntroLink(bookName);
const introLink = bookIntroLink(bookName);

const def01to04Nav = definitionNavLink(bookName, def01to04.name);
const def01to04NavLast = definitionNavLink(bookName, def01to04.name, lastStep);
const def05to07Nav = definitionNavLink(bookName, def05to07.name);
const def05to07NavLast = definitionNavLink(bookName, def05to07.name, lastStep);
const def08to12Nav = definitionNavLink(bookName, def08to12.name);
const def08to12NavLast = definitionNavLink(bookName, def08to12.name, lastStep);
const def13to14Nav = definitionNavLink(bookName, def13to14.name);
const def13to14NavLast = definitionNavLink(bookName, def13to14.name, lastStep);
const def15to18Nav = definitionNavLink(bookName, def15to18.name);
const def15to18NavLast = definitionNavLink(bookName, def15to18.name, lastStep);
const def19Nav     = definitionNavLink(bookName, def19.name);
const def19NavLast     = definitionNavLink(bookName, def19.name, lastStep);
const def20to21Nav = definitionNavLink(bookName, def20to21.name);
const def20to21NavLast = definitionNavLink(bookName, def20to21.name, lastStep);
const def22Nav     = definitionNavLink(bookName, def22.name);
const def22NavLast     = definitionNavLink(bookName, def22.name, lastStep);
const def23Nav     = definitionNavLink(bookName, def23.name);
const def23NavLast     = definitionNavLink(bookName, def23.name, lastStep);

const postulate1Nav = postulateNavLink(bookName, postulate1.name);
const postulate2Nav = postulateNavLink(bookName, postulate2.name);
const postulate3Nav = postulateNavLink(bookName, postulate3.name);
const postulate4Nav = postulateNavLink(bookName, postulate4.name);
const postulate5Nav = postulateNavLink(bookName, postulate5.name);

const cn1to5Nav = commonNotionNavLink(bookName, cn1to5.name);
const cn1to5NavLast = commonNotionNavLink(bookName, cn1to5.name, lastStep);

const prop01Nav = propositionNavLink(bookName, prop01.name);
const prop01NavLast = propositionNavLink(bookName, prop01.name, lastStep);
const prop02Nav = propositionNavLink(bookName, prop02.name);
const prop02NavLast = propositionNavLink(bookName, prop02.name, lastStep);

const contentsLinks: SubtitledLinkInfoList = [
  introLink,
  definitionTitleLink(bookName, def01to04),
  definitionTitleLink(bookName, def05to07),
  definitionTitleLink(bookName, def08to12),
  definitionTitleLink(bookName, def13to14),
  definitionTitleLink(bookName, def15to18),
  definitionTitleLink(bookName, def19),
  definitionTitleLink(bookName, def20to21),
  definitionTitleLink(bookName, def22),
  definitionTitleLink(bookName, def23),
  postulateTitleLink(bookName, postulate1),
  postulateTitleLink(bookName, postulate2),
  postulateTitleLink(bookName, postulate3),
  postulateTitleLink(bookName, postulate4),
  postulateTitleLink(bookName, postulate5),
  commonNotionTitleLink(bookName, cn1to5),
  propositionTitleLink(bookName, prop01),
  propositionTitleLink(bookName, prop02),
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

const definitionPages: StepsAndDiagramPageMap = {
  [def01to04.name]: { ...bookPage, stepsAndDiagram: def01to04, prev: titleIntroLink, next: def05to07Nav},
  [def05to07.name]: { ...bookPage, stepsAndDiagram: def05to07, prev: def01to04NavLast,   next: def08to12Nav},
  [def08to12.name]: { ...bookPage, stepsAndDiagram: def08to12, prev: def05to07NavLast,   next: def13to14Nav},
  [def13to14.name]: { ...bookPage, stepsAndDiagram: def13to14, prev: def08to12NavLast,   next: def15to18Nav},
  [def15to18.name]: { ...bookPage, stepsAndDiagram: def15to18, prev: def13to14NavLast,   next: def19Nav},
  [def19.name]:     { ...bookPage, stepsAndDiagram: def19,     prev: def15to18NavLast,   next: def20to21Nav},
  [def20to21.name]: { ...bookPage, stepsAndDiagram: def20to21, prev: def19NavLast,       next: def22Nav},
  [def22.name]:     { ...bookPage, stepsAndDiagram: def22,     prev: def20to21NavLast,   next: def23Nav},
  [def23.name]:     { ...bookPage, stepsAndDiagram: def23,     prev: def22NavLast,       next: postulate1Nav},
};

const postulatePages: StepsAndDiagramPageMap = {
  [postulate1.name]: { ...bookPage, stepsAndDiagram: postulate1, prev: def23NavLast,      next: postulate2Nav },
  [postulate2.name]: { ...bookPage, stepsAndDiagram: postulate2, prev: postulate1Nav, next: postulate3Nav },
  [postulate3.name]: { ...bookPage, stepsAndDiagram: postulate3, prev: postulate2Nav, next: postulate4Nav },
  [postulate4.name]: { ...bookPage, stepsAndDiagram: postulate4, prev: postulate3Nav, next: postulate5Nav },
  [postulate5.name]: { ...bookPage, stepsAndDiagram: postulate5, prev: postulate4Nav, next: cn1to5Nav },
};

const commonNotionPages: StepsAndDiagramPageMap = {
  [cn1to5.name]: { ...bookPage, stepsAndDiagram: cn1to5, prev: postulate5Nav, next: prop01Nav },
};

const propositionPages: StepsAndDiagramPageMap = {
  [prop01.name]: { ...bookPage, stepsAndDiagram: prop01, prev: cn1to5NavLast,  next: prop02Nav },
  [prop02.name]: { ...bookPage, stepsAndDiagram: prop02, prev: prop01NavLast, next: null },
};

const book: Book = {
  bookName,
  contentsPage,
  introPage,
  commonNotionPages,
  definitionPages,
  postulatePages,
  propositionPages,
};

export default book;

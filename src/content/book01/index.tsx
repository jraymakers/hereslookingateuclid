import {
  Book,
  LinkInfo,
  PropositionPageMap,
} from '../../shared/types';

import {
  bookContentsLink,
  bookIntroLink,
  mainContentsLink,
  mainIntroLink,
  propLink,
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

const contentsLink = bookContentsLink(bookName);
const introLink = bookIntroLink(bookName);
const prop1Link = propLink(bookName, prop1.propName);
const prop2Link = propLink(bookName, prop2.propName);

const contents: ReadonlyArray<LinkInfo> = [
  introLink,
  prop1Link,
  prop2Link,
];

const contentsPage = bookContentsPage(bookName, contents, null, null, null);
const introPage = bookIntroPage(bookName, intro, mainIntroLink, contentsLink, prop1Link);

const propositionPages: PropositionPageMap = {
  [prop1.propName]: propPage(bookName, prop1, introLink, contentsLink, prop2Link),
  [prop2.propName]: propPage(bookName, prop2, prop1Link, contentsLink, null),
};

const book: Book = {
  bookName,
  contentsPage,
  introPage,
  propositionPages,
};

export default book;

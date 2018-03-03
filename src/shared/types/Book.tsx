import { BookContentsPage, BookIntroPage, PropositionPage } from './Page';

export type PropositionPageMap = {
  readonly [propName: string]: PropositionPage;
}

export type Book = {
  readonly bookName: string;
  readonly contentsPage: BookContentsPage,
  readonly introPage: BookIntroPage,
  readonly propositionPages: PropositionPageMap;
}

export type BookMap = {
  readonly [bookName: string]: Book;
}

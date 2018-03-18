import {
  BookContentsPage,
  BookTextPage,
  DefinitionGroupPage,
  PropositionPage,
} from './Page';

export type DefinitionGroupPageMap = {
  readonly [defGroupName: string]: DefinitionGroupPage;
}

export type PropositionPageMap = {
  readonly [propName: string]: PropositionPage;
}

export type Book = {
  readonly bookName: string;
  readonly contentsPage: BookContentsPage,
  readonly introPage: BookTextPage,
  readonly definitionGroupPages: DefinitionGroupPageMap;
  readonly propositionPages: PropositionPageMap;
}

export type BookMap = {
  readonly [bookName: string]: Book;
}

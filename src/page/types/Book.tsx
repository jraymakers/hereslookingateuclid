import {
  BookContentsPage,
  BookTextPage,
  StepsAndDiagramPage,
} from './Page';

export type StepsAndDiagramPageMap = {
  readonly [pageName: string]: StepsAndDiagramPage;
}

export type Book = {
  readonly bookName: string;
  readonly contentsPage: BookContentsPage,
  readonly introPage: BookTextPage,
  readonly definitionGroupPages: StepsAndDiagramPageMap;
  readonly propositionPages: StepsAndDiagramPageMap;
}

export type BookMap = {
  readonly [bookName: string]: Book;
}

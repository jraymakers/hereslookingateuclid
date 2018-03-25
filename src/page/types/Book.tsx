import {
  BookContentsPage,
  BookTextPage,
  StepsAndDiagramPage,
} from './Page';

export type StepsAndDiagramPageMap = {
  readonly [pageName: string]: StepsAndDiagramPage | null | undefined;
};

export type Book = {
  readonly bookName: string;
  readonly contentsPage: BookContentsPage,
  readonly introPage: BookTextPage,
  readonly axiomGroupPages?: StepsAndDiagramPageMap;
  readonly definitionGroupPages?: StepsAndDiagramPageMap;
  readonly postulatePages?: StepsAndDiagramPageMap;
  readonly propositionPages: StepsAndDiagramPageMap;
};

export type BookMap = {
  readonly [bookName: string]: Book | null | undefined;
};

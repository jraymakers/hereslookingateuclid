import {
  SubtitledLinkInfoList,
} from '../../link';
import {
  StepsAndDiagramPage,
  TextPage,
} from './Page';

export type StepsAndDiagramPageMap = {
  readonly [pageName: string]: StepsAndDiagramPage | null | undefined;
};

export type Book = {
  readonly bookName: string;
  readonly contentsLinks: SubtitledLinkInfoList,
  readonly introPage: TextPage,
  readonly commonNotionPages?: StepsAndDiagramPageMap;
  readonly definitionPages?: StepsAndDiagramPageMap;
  readonly postulatePages?: StepsAndDiagramPageMap;
  readonly propositionPages: StepsAndDiagramPageMap;
};

export type BookMap = {
  readonly [bookName: string]: Book | null | undefined;
};

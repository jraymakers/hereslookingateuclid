import { ParagraphList } from '../../paragraph';
import { StepsAndDiagram } from '../../stepsAndDiagram';

export type BasePageData = {
  readonly name: string;
  readonly title: string;
};

export type ParentPageData = BasePageData & {
  readonly pageDataType: 'parent';
  readonly children: PageDataList;
};

export type StepsAndDiagramPageData = BasePageData & {
  readonly pageDataType: 'stepsAndDiagram';
  readonly stepsAndDiagram: StepsAndDiagram;
  // readonly items: PageItemList;
};

export type TextPageData = BasePageData & {
  readonly pageDataType: 'text';
  readonly paragraphs: ParagraphList;
  // readonly items: PageItemList;
};

export type PageData = ParentPageData | StepsAndDiagramPageData | TextPageData;

export type PageDataList = ReadonlyArray<PageData>;

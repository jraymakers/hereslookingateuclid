import { ParagraphList } from '../../paragraph';
import { StepsAndDiagram } from '../../stepsAndDiagram';

export type BasePageData = {
  readonly name: string;
  readonly title: string;
};

export type ParentPageData = BasePageData & {
  readonly pageDataType: 'parent';
  readonly children: PageDataList;
  readonly noNav: boolean;
};

export type StepsAndDiagramPageData = BasePageData & {
  readonly pageDataType: 'stepsAndDiagram';
  readonly stepsAndDiagram: StepsAndDiagram;
};

export type TextPageData = BasePageData & {
  readonly pageDataType: 'text';
  readonly paragraphs: ParagraphList;
};

export type PageData = ParentPageData | StepsAndDiagramPageData | TextPageData;

export type PageDataList = ReadonlyArray<PageData>;

import { Paragraph, ParagraphList } from '../../paragraph';
import { StepsAndDiagram } from '../../stepsAndDiagram';

export type StepsAndDiagramPageItem = {
  readonly pageItemType: 'stepsAndDiagram';
  readonly stepsAndDiagram: StepsAndDiagram;
};

export type TextPageItem = {
  readonly pageItemType: 'text';
  readonly paragraphs: ParagraphList;
};

export type PageItem = StepsAndDiagramPageItem | TextPageItem;

// export type TitlePageItem = PageItem & {
//   readonly pageItemType: 'title';
//   readonly title: string;
//   readonly summary: Paragraph;
// };

export type PageItemList = ReadonlyArray<PageItem>;

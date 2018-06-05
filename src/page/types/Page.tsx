import { ParagraphList } from '../../paragraph';
import { StepsAndDiagram } from '../../stepsAndDiagram';

export type BasePage = {
  readonly name: string;
  readonly title: string;
  readonly parent: ParentPage | null;
  readonly index: number | null;
};

export type ParentPage = BasePage & {
  readonly pageType: 'parent';
  readonly childList: PageList;
  readonly childMap: PageMap;
};

export type ParentPageWithMutableChildren = BasePage & {
  readonly pageType: 'parent';
  childList: PageList;
  childMap: PageMap;
};

export type StepsAndDiagramPage = BasePage & {
  readonly pageType: 'stepsAndDiagram';
  readonly stepsAndDiagram: StepsAndDiagram;
};

export type TextPage = BasePage & {
  readonly pageType: 'text';
  readonly paragraphs: ParagraphList;
};

export type LeafPage = StepsAndDiagramPage | TextPage;

export type Page = LeafPage | ParentPage;

export type PageList = ReadonlyArray<Page>;

export type PageMap = {
  readonly [name: string]: Page | null | undefined;
};

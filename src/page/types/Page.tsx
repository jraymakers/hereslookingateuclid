import { LinkInfo, LinkInfoList, SubtitledLinkInfoList } from '../../link';
import { ParagraphList } from '../../paragraph';
import { StepsAndDiagram } from '../../stepsAndDiagram';

export type Page = {
  readonly type: 'text' | 'stepsAndDiagram';
  readonly bookName?: string | null | undefined;
  readonly prev?: LinkInfo | null | undefined;
  readonly next?: LinkInfo | null | undefined;
};

export type TextPage = Page & {
  readonly type: 'text';
  readonly paragraphs: ParagraphList;
};

export type StepsAndDiagramPage = Page & {
  readonly type: 'stepsAndDiagram';
  readonly bookName: string;
  readonly stepsAndDiagram: StepsAndDiagram;
};

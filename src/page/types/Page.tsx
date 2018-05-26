import { LinkInfo, LinkInfoList, SubtitledLinkInfoList } from '../../link';
import { ParagraphList } from '../../paragraph';
import { StepsAndDiagram } from '../../stepsAndDiagram';

export type Page = {
  readonly header?: LinkInfo | string | null | undefined;
  readonly prev?: LinkInfo | null | undefined;
  readonly next?: LinkInfo | null | undefined;
};

export type NoHeaderPage = Page & {
  readonly header?: null | undefined;
};

export type HeaderLinkPage = Page & {
  readonly header: LinkInfo;
};

export type HeaderTextPage = Page & {
  readonly header: string;
};

export type ContentsContent = {
  readonly contentsLinks: SubtitledLinkInfoList;
};

export type TextContent = {
  readonly paragraphs: ParagraphList;
};

export type ContentsPage = NoHeaderPage & ContentsContent;

export type TextPage = Page & TextContent;

export type BookPage = Page & {
  readonly bookName: string;
};

export type BookTitleLinkPage = BookPage & HeaderLinkPage;

export type BookContentsPage = BookPage & HeaderTextPage & ContentsContent;

export type BookTextPage = BookTitleLinkPage & TextContent;

export type StepsAndDiagramPage = BookTitleLinkPage & {
  readonly stepsAndDiagram: StepsAndDiagram;
};

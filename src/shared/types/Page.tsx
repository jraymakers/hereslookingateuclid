import { LinkInfo, LinkInfoList } from './LinkInfo';
import { ParagraphList } from './Paragraph';
import { Proposition } from './Proposition';

export type Page = {
  readonly prev: LinkInfo | null;
  readonly up: LinkInfo | null;
  readonly next: LinkInfo | null;
};

export type ContentsContent = {
  readonly title: string | null;
  readonly contentsLinks: LinkInfoList;
}

export type TextContent = {
  readonly title: LinkInfo | null;
  readonly paragraphs: ParagraphList;
};

export type ContentsPage = Page & ContentsContent;

export type TextPage = Page & TextContent;

export type BookPage = Page & {
  readonly bookName: string;
};

export type BookContentsPage = BookPage & ContentsContent;

export type BookTextPage = BookPage & TextContent;

export type PropositionPage = BookPage & {
  readonly proposition: Proposition;
};

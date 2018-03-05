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

export type IntroContent = {
  readonly title: LinkInfo | null;
  readonly paragraphs: ParagraphList;
};

export type ContentsPage = Page & ContentsContent;

export type IntroPage = Page & IntroContent;

export type BookPage = Page & {
  readonly bookName: string;
};

export type BookContentsPage = BookPage & ContentsContent;

export type BookIntroPage = BookPage & IntroContent;

export type PropositionPage = BookPage & {
  readonly proposition: Proposition;
};

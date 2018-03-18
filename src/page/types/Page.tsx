import { LinkInfo, LinkInfoList, SubtitledLinkInfoList } from '../../link';
import { ParagraphList } from '../../paragraph';
import { Proposition } from '../../proposition';

export type Page = {
  readonly title?: LinkInfo | string | null | undefined;
  readonly prev?: LinkInfo | null | undefined;
  readonly up?: LinkInfo | null | undefined;
  readonly next?: LinkInfo | null | undefined;
};

export type NoTitlePage = Page & {
  readonly title?: null | undefined;
};

export type TitleLinkPage = Page & {
  readonly title: LinkInfo;
};

export type TitleTextPage = Page & {
  readonly title: string;
};

export type ContentsContent = {
  readonly contentsLinks: SubtitledLinkInfoList;
}

export type TextContent = {
  readonly paragraphs: ParagraphList;
};

export type ContentsPage = NoTitlePage & ContentsContent;

export type TextPage = Page & TextContent;

export type BookPage = Page & {
  readonly bookName: string;
};

export type BookTitleLinkPage = BookPage & TitleLinkPage;

export type BookContentsPage = BookPage & TitleTextPage & ContentsContent;

export type BookTextPage = BookTitleLinkPage & TextContent;

export type PropositionPage = BookTitleLinkPage & {
  readonly proposition: Proposition;
};

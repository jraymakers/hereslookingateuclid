import { LinkInfo } from './LinkInfo';
import { Proposition } from './Proposition';

export type PageLinks = {
  readonly prev: LinkInfo | null;
  readonly up: LinkInfo | null;
  readonly next: LinkInfo | null;
};

export type BookPage = PageLinks & {
  readonly bookName: string;
};

export type BookContentsPage = BookPage & {
  readonly pageType: 'bookContents';
  readonly sectionLinks: ReadonlyArray<LinkInfo>;
};

export type BookIntroPage = BookPage & {
  readonly pageType: 'bookIntro';
  readonly content: () => JSX.Element;
};

export type PropositionPage = BookPage & {
  readonly pageType: 'proposition';
  readonly proposition: Proposition;
};

export type Page =
  BookContentsPage |
  BookIntroPage |
  PropositionPage;

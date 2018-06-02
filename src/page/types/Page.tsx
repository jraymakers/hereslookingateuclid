// import { PageData } from './PageData';
import { PageItemList } from './PageItem';

export type BasePage = {
  readonly name: string;
  readonly parent: ParentPage | null;
  readonly index: number | null;
};

export type LeafPage = BasePage & {
  readonly pageType: 'leaf';
  readonly items: PageItemList;
};

// export type MutableParentPage = ChildPage & {
//   readonly pageType: 'parent';
//   pageList: MutablePageList;
//   pageMap: MutablePageMap;
// };

export type ParentPage = BasePage & {
  readonly pageType: 'parent';
  // readonly pageType: 'parent';
  // readonly pageList: PageList;
  readonly childList: PageList;
  readonly childMap: PageMap;
};

export type ParentPageWithMutableChildren = BasePage & {
  readonly pageType: 'parent';
  childList: PageList;
  childMap: PageMap;
};

export type Page = LeafPage | ParentPage;

// export type MutablePageList = Page[];

export type PageList = ReadonlyArray<Page>;

// export type MutablePageMap = {
//   [name: string]: Page | null | undefined;
// };

export type PageMap = {
  readonly [name: string]: Page | null | undefined;
};

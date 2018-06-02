import { PageItemList } from './PageItem';

export type BasePageData = {
  readonly name: string;
  readonly title: string;
};

export type LeafPageData = BasePageData & {
  readonly pageDataType: 'leaf';
  readonly items: PageItemList;
};

export type ParentPageData = BasePageData & {
  readonly pageDataType: 'parent';
  readonly children: PageDataList;
};

export type PageData = LeafPageData | ParentPageData;

export type PageDataList = ReadonlyArray<PageData>;

import {
  LeafPageData,
  PageDataList,
  PageItemList,
  ParentPageData,
} from '../types';

export function leafPageData(name: string, title: string, items: PageItemList): LeafPageData {
  return {
    pageDataType: 'leaf',
    name,
    title,
    items,
  };
}

export function parentPageData(name: string, title: string, children: PageDataList): ParentPageData {
  return {
    pageDataType: 'parent',
    name,
    title,
    children,
  };
}

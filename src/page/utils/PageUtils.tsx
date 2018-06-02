// import {
//   LeafPage,
//   MutableParentPage,
//   Page,
//   PageItemList,
//   PageList,
//   ParentPage,
// } from '../types';

// function leafPage(name: string, items: PageItemList, parent: MutableParentPage, index: number): LeafPage {
//   const page: LeafPage = {
//     pageType: 'leaf',
//     parent,
//     index,
//     name,
//     items,
//   };
//   addChild(parent, index, page);
//   return page;
// }

// function parentPage(name: string, parent?: MutableParentPage, index?: number): MutableParentPage {
//   const page: MutableParentPage = {
//     pageType: 'parent',
//     parent: parent != null ? parent : null,
//     index: index != null ? index : null,
//     name,
//     pageList: [],
//     pageMap: {},
//   };
//   if (parent != null && index != null) {
//     addChild(parent, index, page);
//   }
//   return page;
// }

// function addChild(parent: MutableParentPage, index: number, child: Page) {
//   parent.pageList[index] = child;
//   parent.pageMap[child.name] = child;
// }

// export type LeafPageMaker = (parent: MutableParentPage, index: number) => LeafPage;
// export type ParentPageMaker = (parent?: MutableParentPage, index?: number) => MutableParentPage;
// export type PageMaker = (parent?: MutableParentPage, index?: number) => Page;

// export function leafPageMaker(
//   name: string,
//   items: PageItemList,
// ): LeafPageMaker {
//   return (parent: MutableParentPage, index: number) => leafPage(name, items, parent, index);
// }

// export function parentPageMaker(
//   name: string,
//   pageMakers: ReadonlyArray<PageMaker>,
// ): ParentPageMaker {
//   return (parent?: MutableParentPage, index?: number) => {
//     const page = parentPage(name, parent, index);
//     for (let i = 0; i < pageMakers.length; i++) {
//       const pageMaker = pageMakers[i];
//       pageMaker(page, i);
//     }
//     return page;
//   };
// }

import {
  LeafPage,
  LeafPageData,
  Page,
  PageData,
  PageDataList,
  PageList,
  PageMap,
  ParentPage,
  ParentPageData,
  ParentPageWithMutableChildren,
} from '../types';

export function makePage(pageData: PageData, parent?: ParentPage, index?: number): Page {
  switch (pageData.pageDataType) {
    case 'leaf':
      return makeLeafPage(pageData, parent, index);
    case 'parent':
      return makeParentPage(pageData, parent, index);
  }
}

function makeLeafPage(pageData: LeafPageData, parent?: ParentPage, index?: number): LeafPage {
  return {
    pageType: 'leaf',
    name: pageData.name,
    items: pageData.items,
    parent: parent != null ? parent : null,
    index: index != null ? index : null,
  };
}

function makeParentPage(pageData: ParentPageData, parent?: ParentPage, index?: number): ParentPage {
  const page: ParentPageWithMutableChildren = {
    pageType: 'parent',
    name: pageData.name,
    parent: parent != null ? parent : null,
    index: index != null ? index : null,
    childList: [],
    childMap: {},
  };
  page.childList = makeChildList(pageData.children, page);
  page.childMap = makeChildMap(page.childList);
  return page;
}

function makeChildList(children: PageDataList, parent: ParentPage): PageList {
  return children.map((child, index) => makePage(child, parent, index));
}

function makeChildMap(childList: PageList): PageMap {
  const childMap: { [name: string]: Page } = {};
  for (const child of childList) {
    if (childMap[child.name]) {
      console.warn(`parent '${child.parent ? child.parent.name : ''}' has duplicate child '${child.name}'`);
    }
    childMap[child.name] = child;
  }
  return childMap;
}

export function firstLeafPage(parent: ParentPage): LeafPage | null {
  const childList = parent.childList;
  const firstChild = childList[0];
  if (!firstChild) {
    return null;
  }
  if (firstChild.pageType === 'leaf') {
    return firstChild;
  }
  return firstLeafPage(firstChild);
}

export function lastLeafPage(parent: ParentPage): LeafPage | null {
  const childList = parent.childList;
  const numChildren = childList.length;
  const lastChild = childList[numChildren - 1];
  if (!lastChild) {
    return null;
  }
  if (lastChild.pageType === 'leaf') {
    return lastChild;
  }
  return lastLeafPage(lastChild);
}

export function prevLeafPage(page: Page): LeafPage | null {
  const parent = page.parent;
  const index = page.index;
  if (parent == null || index == null) {
    return null;
  }
  if (index === 0) {
    return prevLeafPage(parent);
  }
  const prevPage = parent.childList[index - 1];
  if (prevPage.pageType === 'leaf') {
    return prevPage;
  }
  return lastLeafPage(prevPage);
}

export function nextLeafPage(page: Page): LeafPage | null {
  const parent = page.parent;
  const index = page.index;
  if (parent == null || index == null) {
    return null;
  }
  if (index === parent.childList.length - 1) {
    return nextLeafPage(parent);
  }
  const nextPage = parent.childList[index + 1];
  if (nextPage.pageType === 'leaf') {
    return nextPage;
  }
  return firstLeafPage(nextPage);
}

export function pageUrl(page: Page | null): string {
  if (page == null) {
    return '';
  } else {
    return `${pageUrl(page.parent)}/${page.name}`;
  }
}

import {
  LeafPage,
  Page,
  PageData,
  PageDataList,
  PageList,
  PageMap,
  ParentPage,
  ParentPageData,
  ParentPageWithMutableChildren,
  StepsAndDiagramPageData,
  TextPageData,
} from '../types';

export function makePage(pageData: PageData, parent?: ParentPage, index?: number): Page {
  switch (pageData.pageDataType) {
    case 'parent':
      return makeParentPage(pageData, parent, index);
    case 'stepsAndDiagram':
      return makeStepsAndDiagramPage(pageData, parent, index);
    case 'text':
    return makeTextPage(pageData, parent, index);
  }
}

function makeParentPage(pageData: ParentPageData, parent?: ParentPage, index?: number): ParentPage {
  const page: ParentPageWithMutableChildren = {
    pageType: 'parent',
    name: pageData.name,
    title: pageData.title,
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

function makeStepsAndDiagramPage(pageData: StepsAndDiagramPageData, parent?: ParentPage, index?: number): LeafPage {
  return {
    pageType: 'stepsAndDiagram',
    name: pageData.name,
    title: pageData.title,
    stepsAndDiagram: pageData.stepsAndDiagram,
    parent: parent != null ? parent : null,
    index: index != null ? index : null,
  };
}

function makeTextPage(pageData: TextPageData, parent?: ParentPage, index?: number): LeafPage {
  return {
    pageType: 'text',
    name: pageData.name,
    title: pageData.title,
    paragraphs: pageData.paragraphs,
    parent: parent != null ? parent : null,
    index: index != null ? index : null,
  };
}

export function firstLeafPage(parent: ParentPage): LeafPage | null {
  const childList = parent.childList;
  const firstChild = childList[0];
  if (!firstChild) {
    return null;
  }
  if (firstChild.pageType === 'parent') {
    return firstLeafPage(firstChild);
  }
  return firstChild;
}

export function lastLeafPage(parent: ParentPage): LeafPage | null {
  const childList = parent.childList;
  const numChildren = childList.length;
  const lastChild = childList[numChildren - 1];
  if (!lastChild) {
    return null;
  }
  if (lastChild.pageType === 'parent') {
    return lastLeafPage(lastChild);
  }
  return lastChild;
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
  if (prevPage.pageType === 'parent') {
    return lastLeafPage(prevPage);
  }
  return prevPage;
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
  if (nextPage.pageType === 'parent') {
    return firstLeafPage(nextPage);
  }
  return nextPage;
}

export function pageAncestors(page: Page): ReadonlyArray<ParentPage> {
  const parents: ParentPage[] = [];
  let parent: ParentPage | null = page.parent;
  while (parent) {
    parents.unshift(parent);
    parent = parent.parent;
  }
  return parents;
}

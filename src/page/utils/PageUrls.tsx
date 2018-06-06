import { maybeAddStep } from '../../link';

import {
  LeafPage,
  Page,
  ParentPage,
  StepsAndDiagramPage,
  TextPage,
} from '../types';

export function pageUrl(page: Page, stepName?: string): string {
  switch (page.pageType) {
    case 'parent':
      return parentPageUrl(page);
    case 'stepsAndDiagram':
      return stepsAndDiagramPageUrl(page, stepName);
    case 'text':
      return textPageUrl(page);
  }
}

export function parentPageUrl(page: ParentPage | null): string {
  if (page) {
    return `${parentPageUrl(page.parent)}${page.name}/`;
  } else {
    return '/';
  }
}

export function stepsAndDiagramPageUrl(page: StepsAndDiagramPage, stepName?: string): string {
  return maybeAddStep(leafPageUrl(page), stepName);
}

export function textPageUrl(page: TextPage): string {
  return leafPageUrl(page);
}

export function leafPageUrl(page: LeafPage): string {
  return `${parentPageUrl(page.parent)}${page.name}`;
}

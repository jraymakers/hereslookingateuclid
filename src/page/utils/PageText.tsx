import {
  LeafPage,
  Page,
} from '../types';

import { pageAncestors } from './PageUtils';

export function pageNavText(page: LeafPage, context: Page): string {
  const parts: string[] = [];
  const ancestors = pageAncestors(page);
  const contextAncestors = pageAncestors(context);
  let index = 0;
  while (index < ancestors.length
    && index < contextAncestors.length
    && ancestors[index] === contextAncestors[index]
  ) {
    index++;
  }
  while (index < ancestors.length) {
    const ancestor = ancestors[index];
    if (!ancestor.noNav) {
      parts.push(ancestors[index].title);
    }
    index++;
  }
  parts.push(page.title);
  return parts.join(': ');
}

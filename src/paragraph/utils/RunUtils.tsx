import { LinkInfo } from '../../link';
import { textItalicClass } from '../../style';

import { LinkRun, StyledRun } from '../types/Paragraph';

export function italic(text: string): StyledRun {
  return { type: 'styled', className: textItalicClass, text };
}

export function link(linkInfo: LinkInfo): LinkRun {
  return { type: 'link', linkInfo };
}

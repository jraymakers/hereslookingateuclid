import { LinkInfo } from '../../link';
import { textItalicClass } from '../../style';

import { AnchorRun, LinkRun, StyledRun } from '../types/Paragraph';

export function anchor(linkInfo: LinkInfo): AnchorRun {
  return { type: 'anchor', linkInfo };
}

export function italic(text: string): StyledRun {
  return { type: 'styled', className: textItalicClass, text };
}

export function link(linkInfo: LinkInfo): LinkRun {
  return { type: 'link', linkInfo };
}

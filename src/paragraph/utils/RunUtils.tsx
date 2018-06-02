import { LinkInfo } from '../../link';
import {
  textItalicClass,
  textXLargeClass,
} from '../../style';

import { AnchorRun, LinkRun, StyledRun } from '../types/Paragraph';

export function anchor(linkInfo: LinkInfo): AnchorRun {
  return { type: 'anchor', linkInfo };
}

export function link(linkInfo: LinkInfo): LinkRun {
  return { type: 'link', linkInfo };
}

export function styled(className: string, text: string): StyledRun {
  return { type: 'styled', className, text };
}

export function italic(text: string): StyledRun {
  return styled(textItalicClass, text);
}

export function xlarge(text: string): StyledRun {
  return styled(textXLargeClass, text);
}

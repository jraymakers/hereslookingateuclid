import { style } from 'typestyle';

import { LinkInfo } from '../../link';

import { LinkRun, StyledRun } from '../types/Paragraph';

const classPrefix = 'shared';

export const italicClass = style({
  $debugName: `${classPrefix}_italic`,
  $unique: true,
  fontStyle: 'italic',
});

export function italic(text: string): StyledRun {
  return { type: 'styled', className: italicClass, text };
}

export function link(linkInfo: LinkInfo): LinkRun {
  return { type: 'link', linkInfo };
}

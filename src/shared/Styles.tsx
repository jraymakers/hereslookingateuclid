import { style } from 'typestyle';

import { StyledRun } from './types';

const classPrefix = 'shared';

export const italicClass = style({
  $debugName: `${classPrefix}_italic`,
  $unique: true,
  fontStyle: 'italic',
});

export function italic(text: string): StyledRun {
  return { className: italicClass, text };
}
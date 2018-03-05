import { style } from 'typestyle';

import { StyledText } from './types';

const classPrefix = 'shared';

export const italicClass = style({
  $debugName: `${classPrefix}_italic`,
  $unique: true,
  fontStyle: 'italic',
});

export function italic(text: string): StyledText {
  return { className: italicClass, text };
}
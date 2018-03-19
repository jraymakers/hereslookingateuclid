import { namedClass } from '../utils/StyleUtils';

import {
  borderStyle,
  buttonStyle,
  flexColumnStyle,
  flexRowStyle,
  linkStyle,
  paddingLargeStyle,
  paddingNormalStyle,
  textHeaderStyle,
  textItalicStyle,
  textLargeStyle,
  textNormalStyle,
  textSiteTitleStyle,
  textSmallStyle,
} from './StyleConstants';

const classPrefix = 'shared';

export const borderClass = namedClass(classPrefix, 'border', borderStyle);

export const buttonClass = namedClass(classPrefix, 'button', buttonStyle);

export const linkClass = namedClass(classPrefix, 'link', linkStyle);

export const paddingLargeClass = namedClass(classPrefix, 'paddingLarge', paddingLargeStyle);

export const textHeaderClass = namedClass(classPrefix, 'textHeader', textHeaderStyle);
export const textItalicClass = namedClass(classPrefix, 'textItalic', textItalicStyle);
export const textLargeClass = namedClass(classPrefix, 'textLarge', textLargeStyle);
export const textSiteTitleClass = namedClass(classPrefix, 'textSiteTitle', textSiteTitleStyle);
export const textSmallClass = namedClass(classPrefix, 'textSmall', textSmallStyle);

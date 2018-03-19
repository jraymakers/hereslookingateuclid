import {
  namedClass,
} from '../utils/StyleUtils';

import {
  alignSelfCenterStyle,
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

export const alignSelfCenterClass = namedClass(classPrefix, 'alignSelfCenter', alignSelfCenterStyle);

export const borderClass = namedClass(classPrefix, 'border', borderStyle);

export const buttonClass = namedClass(classPrefix, 'button', buttonStyle);

export const flexColumnClass = namedClass(classPrefix, 'column', flexColumnStyle);
export const flexRowClass = namedClass(classPrefix, 'row', flexRowStyle);

export const linkClass = namedClass(classPrefix, 'link', linkStyle);

export const paddingLargeClass = namedClass(classPrefix, 'paddingLarge', paddingLargeStyle);
export const paddingNormalClass = namedClass(classPrefix, 'paddingNormal', paddingNormalStyle);

export const textHeaderClass = namedClass(classPrefix, 'textHeader', textHeaderStyle);
export const textItalicClass = namedClass(classPrefix, 'textItalic', textItalicStyle);
export const textLargeClass = namedClass(classPrefix, 'textLarge', textLargeStyle);
export const textNormalClass = namedClass(classPrefix, 'textNormal', textNormalStyle);
export const textSiteTitleClass = namedClass(classPrefix, 'textSiteTitle', textSiteTitleStyle);
export const textSmallClass = namedClass(classPrefix, 'textSmall', textSmallStyle);

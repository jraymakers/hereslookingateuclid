import { cssClass } from '../functions/cssClass';
import {
  borderStyle,
  linkStyle,
  paddingMediumStyle,
  textItalicStyle,
  textLargeStyle,
  textSmallStyle,
  textXLargeStyle,
} from './StyleConstants';

const classPrefix = 'shared';

export const borderClass = cssClass(classPrefix, 'border', borderStyle);

export const linkClass = cssClass(classPrefix, 'link', linkStyle);

export const paddingMediumClass = cssClass(classPrefix, 'paddingLarge', paddingMediumStyle);

export const textItalicClass = cssClass(classPrefix, 'textItalic', textItalicStyle);
export const textLargeClass = cssClass(classPrefix, 'textLarge', textLargeStyle);
export const textSmallClass = cssClass(classPrefix, 'textSmall', textSmallStyle);
export const textXLargeClass = cssClass(classPrefix, 'textXLarge', textXLargeStyle);

import { style } from 'typestyle';

import {
  Style,
  UniqueStyle,
} from '../types/StyleTypes';

export function uniqueStyle(
  style: Style,
): UniqueStyle {
  return {
    ...style,
    $unique: true,
  };
}

function debugName(namespace: string, localName: string) {
  return `${namespace}_${localName}`;
}

export function namedClass(namespace: string, localName: string, ...styles: UniqueStyle[]): string {
  return style(...styles, {
    $debugName: debugName(namespace, localName)
  });
}

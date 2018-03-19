import { style } from 'typestyle';

import {
  Style,
  // UniqueStyle,
} from '../types/StyleTypes';

// export function uniqueStyle(
//   styleProps: Style,
// ): UniqueStyle {
//   return {
//     ...styleProps,
//     $unique: true,
//   };
// }

function debugName(namespace: string, localName: string) {
  return `${namespace}_${localName}`;
}

export function namedClass(namespace: string, localName: string, ...styles: Style[]): string {
  return style(...styles, {
    $debugName: debugName(namespace, localName),
    $unique: true,
  });
}

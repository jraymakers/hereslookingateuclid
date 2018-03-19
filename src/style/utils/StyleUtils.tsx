import { style } from 'typestyle';

import { Style } from '../types/StyleTypes';

function debugName(namespace: string, localName: string) {
  return `${namespace}_${localName}`;
}

export function namedClass(namespace: string, localName: string, ...styles: Style[]): string {
  return style(...styles, {
    $debugName: debugName(namespace, localName),
    $unique: true,
  });
}

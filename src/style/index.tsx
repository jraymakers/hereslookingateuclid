import { style, types } from 'typestyle';

export {
  classes,
} from 'typestyle';

export type Style = types.NestedCSSProperties;

export type UniqueStyle = Style & {
  $unique: true,
};

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

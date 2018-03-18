import { types } from 'typestyle';

export type Style = types.NestedCSSProperties;

export type UniqueStyle = Style & {
  $unique: true,
};

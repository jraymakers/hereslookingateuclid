import { Style } from '../types/StyleTypes';

import {
  largeSpace,
  mediumSpace,
} from './SpaceConstants';

export const alignItemsCenterStyle: Style = {
  alignItems: 'center',
};

export const alignItemsStretchStyle: Style = {
  alignItems: 'stretch',
};

export const alignSelfCenterStyle: Style = {
  alignSelf: 'center',
};

export const borderStyle: Style = {
  borderColor: '#aaa',
  borderStyle: 'solid',
  borderWidth: 1,
};

export const flexColumnStyle: Style = {
  display: 'flex',
  flexDirection: 'column',
};

export const flexGrowStyle: Style = {
  flex: 1,
};

export const flexNoneStyle: Style = {
  flex: 'none',
};

export const flexRowStyle: Style = {
  display: 'flex',
  flexDirection: 'row',
};

export const justifyContentCenterStyle: Style = {
  justifyContent: 'center',
};

export const justifyContentEndStyle: Style = {
  justifyContent: 'flex-end',
};

export const justifyContentStartStyle: Style = {
  justifyContent: 'flex-start',
};

export const linkStyle: Style = {
  color: 'black',
  textDecoration: 'none',
  $nest: {
    '&:hover': {
      $unique: true,
      color: 'orange',
    },
  },
};

export const paddingMediumStyle: Style = {
  padding: mediumSpace,
};

export const textAlignCenterStyle: Style = {
  textAlign: 'center',
};

export const textItalicStyle: Style = {
  fontStyle: 'italic',
};

export const textLargeStyle: Style = {
  fontSize: 21,
};

export const textNormalStyle: Style = {
  fontSize: 18,
};

export const textSerifStyle: Style = {
  fontFamily: 'serif',
};

export const textSmallStyle: Style = {
  fontSize: 15,
};

export const textXLargeStyle: Style = {
  fontSize: 24,
};

export const textXXLargeStyle: Style = {
  fontSize: 30,
};

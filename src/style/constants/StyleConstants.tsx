import {
  namedClass,
  uniqueStyle,
} from '../utils/StyleUtils';

export const pageHeaderTextStyle = uniqueStyle({
  fontSize: 24,
  padding: 6,
  textAlign: 'center',
});

export const linkHoverStyle = uniqueStyle({
  color: '#888',
});

export const linkStyle = uniqueStyle({
  color: 'black',
  textDecoration: 'none',
  $nest: {
    '&:hover': linkHoverStyle
  }
});

const classPrefix = 'common';

export const linkClass = namedClass(classPrefix, 'link', linkStyle);

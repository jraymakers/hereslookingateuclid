import * as React from 'react';
import { Link } from 'react-router-dom';

import { LinkInfo } from '../../link';
import { classes, namedClass, uniqueStyle } from '../../style';

const textStyle = uniqueStyle({
  fontSize: 24,
  padding: 6,
  textAlign: 'center',
});

const linkHoverStyle = uniqueStyle({
  color: '#888',
});

const linkStyle = uniqueStyle({
  color: 'black',
  textDecoration: 'none',
  $nest: {
    '&:hover': linkHoverStyle
  }
});

const classPrefix = 'PageTitleView';
const textClass = namedClass(classPrefix, 'title', textStyle);
const linkClass = namedClass(classPrefix, 'link', linkStyle);

export type PageTitleViewProps = {
  readonly text?: string | null | undefined;
  readonly link?: LinkInfo | null | undefined;
};

export class PageTitleView extends React.PureComponent<PageTitleViewProps> {

  public render(): JSX.Element | null {
    const link = this.props.link;
    if (link) {
      return <Link className={classes(textClass, linkClass)} to={link.url}>{link.text}</Link>;
    } else {
      const text = this.props.text;
      if (text) {
        return <div className={textClass}>{text}</div>;
      } else {
        return null;
      }
    }
  }

}

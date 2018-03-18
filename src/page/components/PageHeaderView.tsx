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

const classPrefix = 'PageHeaderView';
const textClass = namedClass(classPrefix, 'text', textStyle);
const linkClass = namedClass(classPrefix, 'link', linkStyle);

export type PageHeaderViewProps = {
  readonly header?: string | LinkInfo | null | undefined;
};

export class PageHeaderView extends React.PureComponent<PageHeaderViewProps> {

  public render(): JSX.Element | null {
    const header = this.props.header;
    if (header) {
      if (typeof header === 'string') {
        return <div className={textClass}>{header}</div>;
      } else {
        return <Link className={classes(textClass, linkClass)} to={header.url}>{header.text}</Link>;
      }
    }
    return null;
  }

}

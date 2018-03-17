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
  readonly title?: string | LinkInfo | null | undefined;
};

export class PageTitleView extends React.PureComponent<PageTitleViewProps> {

  public render(): JSX.Element | null {
    const title = this.props.title;
    if (title) {
      if (typeof title === 'string') {
        return <div className={textClass}>{title}</div>;
      } else {
        return <Link className={classes(textClass, linkClass)} to={title.url}>{title.text}</Link>;
      }
    }
    return null;
  }

}

import * as React from 'react';
import { Link } from 'react-router-dom';

import { LinkInfo } from '../../link';
import {
  classes,
  linkStyle,
  namedClass,
  pageHeaderTextStyle,
} from '../../style';

const classPrefix = 'PageHeaderView';
const textClass = namedClass(classPrefix, 'text', pageHeaderTextStyle);
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

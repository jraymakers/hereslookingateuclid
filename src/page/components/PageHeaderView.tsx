import * as React from 'react';
import { Link } from 'react-router-dom';

import { LinkInfo } from '../../link';
import {
  classes,
  linkClass,
  marginTopLargeStyle,
  namedClass,
  textAlignCenterStyle,
  textXLargeStyle,
} from '../../style';

const classPrefix = 'PageHeaderView';
const headerClass = namedClass(classPrefix, 'header',
  marginTopLargeStyle,
  textAlignCenterStyle,
  textXLargeStyle,
);

export type PageHeaderViewProps = {
  readonly header?: string | LinkInfo | null | undefined;
};

export class PageHeaderView extends React.PureComponent<PageHeaderViewProps> {

  public render(): JSX.Element | null {
    const header = this.props.header;
    if (header) {
      if (typeof header === 'string') {
        return <div className={headerClass}>{header}</div>;
      } else {
        return <Link className={classes(linkClass, headerClass)} to={header.url}>{header.text}</Link>;
      }
    }
    return null;
  }

}

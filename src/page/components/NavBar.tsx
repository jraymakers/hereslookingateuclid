import * as React from 'react';
import { Link } from 'react-router-dom';

import { LinkInfo, mainContentsUrl } from '../../link';
import {
  alignItemsCenterStyle,
  alignItemsStretchStyle,
  buttonClass,
  classes,
  flexColumnStyle,
  flexGrowStyle,
  flexNoneStyle,
  flexRowStyle,
  justifyContentEndStyle,
  justifyContentStartStyle,
  linkClass,
  namedClass,
  textAlignCenterStyle,
  textXXLargeStyle,
} from '../../style';

const classPrefix = 'NavBar';
const rootClass = namedClass(classPrefix, 'root',
  flexRowStyle,
  { height: 36 },
);
const leftClass = namedClass(classPrefix, 'left',
  alignItemsStretchStyle,
  flexGrowStyle,
  flexRowStyle,
  justifyContentStartStyle,
);
const centerClass = namedClass(classPrefix, 'center',
  alignItemsCenterStyle,
  flexRowStyle,
  flexNoneStyle,
);
const rightClass = namedClass(classPrefix, 'right',
  alignItemsStretchStyle,
  flexGrowStyle,
  flexRowStyle,
  justifyContentEndStyle,
);
const siteTitleClass = namedClass(classPrefix, 'siteTitle',
  textAlignCenterStyle,
  textXXLargeStyle,
);

const title = "Here's Looking at Euclid";

export type NavBarProps = {
  readonly prev?: LinkInfo | null | undefined;
  readonly next?: LinkInfo | null | undefined;
  readonly noSiteTitleLink?: boolean;
};

export class NavBar extends React.PureComponent<NavBarProps> {

  public render(): JSX.Element {
    return (
      <div className={rootClass}>
        <div className={leftClass}>
          {this.renderLink(this.props.prev)}
        </div>
        <div className={centerClass}>
          {this.renderSiteTitle()}
        </div>
        <div className={rightClass}>
          {this.renderLink(this.props.next)}
        </div>
      </div>
    );
  }

  private renderSiteTitle(): JSX.Element {
    if (this.props.noSiteTitleLink) {
      return <div className={siteTitleClass}>{title}</div>;
    } else {
      return <Link className={classes(linkClass, siteTitleClass)} to={mainContentsUrl}>{title}</Link>;
    }
  }

  private renderLink(link: LinkInfo | null | undefined): JSX.Element | null {
    if (link) {
      return <Link className={buttonClass} to={link.url}>{link.text}</Link>;
    } else {
      return null;
    }
  }

}

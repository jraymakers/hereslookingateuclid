import * as React from 'react';
import { Link } from 'react-router-dom';

import { bookTitle, LinkInfo, mainContentsUrl } from '../../link';
import {
  alignItemsCenterStyle,
  alignItemsStretchStyle,
  borderStyle,
  classes,
  flexColumnStyle,
  flexGrowStyle,
  flexNoneStyle,
  flexRowStyle,
  justifyContentCenterStyle,
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
  {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderBottom: '1px solid #aaa',
    height: 36,
  },
);
const leftClass = namedClass(classPrefix, 'left',
  flexNoneStyle,
  flexRowStyle,
);
const centerClass = namedClass(classPrefix, 'center',
  alignItemsCenterStyle,
  flexRowStyle,
  flexGrowStyle,
  justifyContentCenterStyle,
);
const rightClass = namedClass(classPrefix, 'right',
  flexNoneStyle,
  flexRowStyle,
);
const hierarchyTextClass = namedClass(classPrefix, 'hierarchyText',
);
const hierarchyDividerClass = namedClass(classPrefix, 'hierarchyDivider',
  { padding: '0 6px' },
);
const buttonClass = namedClass(classPrefix, 'button',
  {
    width: 36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333',
    textDecoration: 'none',
    outline: 'none',
    $nest: {
      '&:focus': {
        $unique: true,
        color: 'orange',
      },
      '&:hover': {
        $unique: true,
        backgroundColor: '#eee',
      },
    },
  },
);

const heresLookingAtEuclid = "Here's Looking at Euclid";

export type NavBarProps = {
  readonly bookName: string | null | undefined;
  readonly prev?: LinkInfo | null | undefined;
  readonly next?: LinkInfo | null | undefined;
};

export class NavBar extends React.PureComponent<NavBarProps> {

  public render(): JSX.Element {
    return (
      <div className={rootClass}>
        <div className={leftClass}>
          {this.renderLink(this.props.prev, '◀')}
        </div>
        <div className={centerClass}>
          <span className={hierarchyTextClass}>{heresLookingAtEuclid}</span>
          {this.maybeRenderBookName()}
        </div>
        <div className={rightClass}>
          {this.renderLink(this.props.next, '▶')}
        </div>
      </div>
    );
  }

  private maybeRenderBookName(): JSX.Element | null {
    if (this.props.bookName) {
      return (
        <>
          <span className={hierarchyDividerClass}>{':'}</span>
          <span className={hierarchyTextClass}>{bookTitle(this.props.bookName)}</span>
        </>
      );
    } else {
      return null;
    }
  }

  private renderLink(link: LinkInfo | null | undefined, text: string): JSX.Element | null {
    if (link) {
      return <Link className={buttonClass} to={link.url}>{text}</Link>;
    } else {
      return null;
    }
  }

}

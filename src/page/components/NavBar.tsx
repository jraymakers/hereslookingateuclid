import * as React from 'react';
import { Link } from 'react-router-dom';

import { bookTitle, LinkInfo } from '../../link';
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
    borderBottom: '1px solid #999',
    height: 36,
  },
);
const leftClass = namedClass(classPrefix, 'left',
 flexGrowStyle,
  flexRowStyle,
);
const centerClass = namedClass(classPrefix, 'center',
  alignItemsStretchStyle,
  flexRowStyle,
  flexGrowStyle,
  justifyContentCenterStyle,
);
const rightClass = namedClass(classPrefix, 'right',
  flexGrowStyle,
  flexRowStyle,
  { justifyContent: 'flex-end' },
);
const hierarchyClass = namedClass(classPrefix, 'hierarchy',
  alignItemsCenterStyle,
  flexRowStyle,
  {
    cursor: 'pointer',
    paddingLeft: 12,
    paddingRight: 12,
    userSelect: 'none',
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
const hierarchyArrowClass = namedClass(classPrefix, 'hierarchyArrow',
  {
    fontSize: '10px',
    paddingTop: 3,
    paddingRight: 6,
  },
);
const hierarchyTextClass = namedClass(classPrefix, 'hierarchyText',
);
const hierarchyDividerClass = namedClass(classPrefix, 'hierarchyDivider',
  {
    paddingLeft: 6,
    paddingRight: 6,
  },
);
const buttonClass = namedClass(classPrefix, 'button',
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333',
    textDecoration: 'none',
    outline: 'none',
    userSelect: 'none',
    $nest: {
      '&:hover': {
        $unique: true,
        backgroundColor: '#eee',
      },
    },
  },
);
const nextLinkTextClass = namedClass(classPrefix, 'nextLinkText',
  {
    paddingLeft: 12,
  },
);
const prevLinkTextClass = namedClass(classPrefix, 'prevLinkText',
  {
    paddingRight: 12,
  },
);
const nextLinkArrowClass = namedClass(classPrefix, 'nextLinkArrow',
  {
    paddingLeft: 6,
    paddingRight: 6,
  },
);
const prevLinkArrowClass = namedClass(classPrefix, 'prevLinkArrow',
  {
    paddingLeft: 6,
    paddingRight: 6,
  },
);

const heresLookingAtEuclid = "Here's Looking at Euclid";

export type NavBarProps = {
  readonly bookName: string | null | undefined;
  readonly prev?: LinkInfo | null | undefined;
  readonly next?: LinkInfo | null | undefined;
  readonly toggleContentsOverlay: () => void;
};

export class NavBar extends React.PureComponent<NavBarProps> {

  public render(): JSX.Element {
    return (
      <div className={rootClass}>
        <div className={leftClass}>
          {this.renderPrevLink(this.props.prev)}
        </div>
        <div className={centerClass}>
          {this.renderHierarchy()}
        </div>
        <div className={rightClass}>
          {this.renderNextLink(this.props.next)}
        </div>
      </div>
    );
  }

  private renderHierarchy(): JSX.Element {
    return (
      <span className={hierarchyClass} onClick={this.props.toggleContentsOverlay}>
        <span className={hierarchyArrowClass}>{'▼'}</span>
        <span className={hierarchyTextClass}>{heresLookingAtEuclid}</span>
        {this.maybeRenderBookName()}
      </span>
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

  private renderPrevLink(link: LinkInfo | null | undefined): JSX.Element | null {
    if (link) {
      return (
        <Link className={buttonClass} to={link.url}>
          <span className={prevLinkArrowClass}>{'◀'}</span>
          <span className={prevLinkTextClass}>{link.text}</span>
        </Link>
      );
    } else {
      return null;
    }
  }

  private renderNextLink(link: LinkInfo | null | undefined): JSX.Element | null {
    if (link) {
      return (
        <Link className={buttonClass} to={link.url}>
          <span className={nextLinkTextClass}>{link.text}</span>
          <span className={nextLinkArrowClass}>{'▶'}</span>
        </Link>
      );
    } else {
      return null;
    }
  }

}

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
    borderBottom: '1px solid #999',
    height: 36,
  },
);
const leftClass = namedClass(classPrefix, 'left',
  flexNoneStyle,
  flexRowStyle,
  { width: 36 },
);
const centerClass = namedClass(classPrefix, 'center',
  alignItemsStretchStyle,
  flexRowStyle,
  flexGrowStyle,
  justifyContentCenterStyle,
);
const rightClass = namedClass(classPrefix, 'right',
  flexNoneStyle,
  flexRowStyle,
  { width: 36 },
);
const hierarchyClass = namedClass(classPrefix, 'hierarchy',
  alignItemsCenterStyle,
  flexRowStyle,
  {
    cursor: 'pointer',
    paddingLeft: 12,
    paddingRight: 12,
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
  readonly toggleContents: () => void;
};

export class NavBar extends React.PureComponent<NavBarProps> {

  public render(): JSX.Element {
    return (
      <div className={rootClass}>
        <div className={leftClass}>
          {this.renderLink(this.props.prev, '◀')}
        </div>
        <div className={centerClass}>
          {this.renderHierarchy()}
        </div>
        <div className={rightClass}>
          {this.renderLink(this.props.next, '▶')}
        </div>
      </div>
    );
  }

  private renderHierarchy(): JSX.Element {
    return (
      <span className={hierarchyClass} onClick={this.props.toggleContents}>
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

  private renderLink(link: LinkInfo | null | undefined, text: string): JSX.Element | null {
    if (link) {
      return <Link className={buttonClass} to={link.url}>{text}</Link>;
    } else {
      return null;
    }
  }

}

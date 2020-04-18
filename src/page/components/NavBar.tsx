import * as React from 'react';
import { Link } from 'react-router-dom';

import {
  alignItemsCenterStyle,
  alignItemsStretchStyle,
  flexGrowStyle,
  flexRowStyle,
  justifyContentCenterStyle,
  namedClass,
} from '../../style';
import { Page } from '../types';
import { nextLeafPage, pageAncestors, pageNavText, pageUrl, prevLeafPage } from '../utils';

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
const hierarchyTextClass = namedClass(classPrefix, 'hierarchyText', {
  whiteSpace: 'nowrap',
});
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

export type NavBarProps = {
  readonly page: Page;
  readonly toggleNavListOverlay: () => void;
};

export class NavBar extends React.PureComponent<NavBarProps> {

  public render(): JSX.Element {
    return (
      <div className={rootClass}>
        <div className={leftClass}>
          {this.renderPrevLink()}
        </div>
        <div className={centerClass}>
          {this.renderHierarchy()}
        </div>
        <div className={rightClass}>
          {this.renderNextLink()}
        </div>
      </div>
    );
  }

  private renderHierarchy(): JSX.Element {
    return (
      <span className={hierarchyClass} onClick={this.props.toggleNavListOverlay}>
        <span className={hierarchyArrowClass}>{'▼'}</span>
        {this.renderAncestors()}
        <span className={hierarchyTextClass}>{this.props.page.title}</span>
      </span>
    );
  }

  private renderAncestors(): ReadonlyArray<JSX.Element> {
    const parts: JSX.Element[] = [];
    const ancestors = pageAncestors(this.props.page);
    let key = 0;
    for (const ancestor of ancestors) {
      if (!ancestor.noNav) {
        parts.push((
          <span key={key}>
            <span className={hierarchyTextClass}>{ancestor.title}</span>
            <span className={hierarchyDividerClass}>{'❯'}</span>
          </span>
        ));
        key++;
      }
    }
    return parts;
  }

  private renderPrevLink(): JSX.Element | null {
    const page = this.props.page;
    const prevLeaf = prevLeafPage(page);
    if (!prevLeaf) {
      return null;
    }
    const text = pageNavText(prevLeaf, page);
    const url = pageUrl(prevLeaf/*, lastStep*/);
    return (
      <Link className={buttonClass} to={url}>
        <span className={prevLinkArrowClass}>{'◀'}</span>
        <span className={prevLinkTextClass}>{text}</span>
      </Link>
    );
  }

  private renderNextLink(): JSX.Element | null {
    const page = this.props.page;
    const nextLeaf = nextLeafPage(page);
    if (!nextLeaf) {
      return null;
    }
    const text = pageNavText(nextLeaf, page);
    const url = pageUrl(nextLeaf);
    return (
      <Link className={buttonClass} to={url}>
        <span className={nextLinkTextClass}>{text}</span>
        <span className={nextLinkArrowClass}>{'▶'}</span>
      </Link>
    );
  }

}

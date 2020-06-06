import * as React from 'react';
import { Link } from 'react-router-dom';

import {
  alignItemsCenterStyle,
  alignItemsStretchStyle,
  cssClass,
  flexGrowStyle,
  flexRowStyle,
  justifyContentCenterStyle,
} from '../../style';
import { Page, ParentPage } from '../types';
import { nextLeafPage, pageAncestors, pageNavText, pageUrl, prevLeafPage } from '../utils';

const classPrefix = 'NavBar';
const rootClass = cssClass(classPrefix, 'root',
  flexRowStyle,
  {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderBottom: '1px solid #999',
    height: 36,
  },
);
const leftClass = cssClass(classPrefix, 'left',
 flexGrowStyle,
  flexRowStyle,
);
const centerClass = cssClass(classPrefix, 'center',
  alignItemsStretchStyle,
  flexRowStyle,
  flexGrowStyle,
  justifyContentCenterStyle,
);
const rightClass = cssClass(classPrefix, 'right',
  flexGrowStyle,
  flexRowStyle,
  { justifyContent: 'flex-end' },
);
const hierarchyClass = cssClass(classPrefix, 'hierarchy',
  alignItemsStretchStyle,
  flexRowStyle,
  {
    paddingLeft: 12,
    paddingRight: 12,
    userSelect: 'none',
  },
);
const hierarchyArrowClass = cssClass(classPrefix, 'hierarchyArrow',
alignItemsCenterStyle,
  flexRowStyle,
  {
    fontSize: '13px',
    fontWeight: 'bold',
    paddingRight: 3,
  },
);
const ancestorButtonClass = cssClass(classPrefix, 'ancestorButton',
  alignItemsStretchStyle,
  flexRowStyle,
  {
    paddingLeft: 6,
    paddingRight: 6,
    cursor: 'pointer',
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
const hierarchyLeafClass = cssClass(classPrefix, 'hierarchyLeaf',
  alignItemsCenterStyle,
  flexRowStyle,
  {
    paddingLeft: 6,
    paddingRight: 6,
    whiteSpace: 'nowrap',
  },
);
const hierarchyTextClass = cssClass(classPrefix, 'hierarchyText',
  alignItemsCenterStyle,
  flexRowStyle,
  {
    whiteSpace: 'nowrap',
  },
);
const hierarchyDividerClass = cssClass(classPrefix, 'hierarchyDivider',
  alignItemsCenterStyle,
  flexRowStyle,
);
const buttonClass = cssClass(classPrefix, 'button',
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
const nextLinkTextClass = cssClass(classPrefix, 'nextLinkText',
  {
    paddingLeft: 12,
  },
);
const prevLinkTextClass = cssClass(classPrefix, 'prevLinkText',
  {
    paddingRight: 12,
  },
);
const nextLinkArrowClass = cssClass(classPrefix, 'nextLinkArrow',
  {
    paddingLeft: 6,
    paddingRight: 6,
    fontSize: '24px'
  },
);
const prevLinkArrowClass = cssClass(classPrefix, 'prevLinkArrow',
  {
    paddingLeft: 6,
    paddingRight: 6,
    fontSize: '24px'
  },
);

export const NavBar: React.FC<{
  page: Page;
  toggleNavListOverlayForParent: (parent: ParentPage) => void;
}> = ({
  page,
  toggleNavListOverlayForParent,
}) => {
  return (
    <div className={rootClass}>
      <div className={leftClass}>
        <PrevLink page={page} />
      </div>
      <div className={centerClass}>
        <NavBarHierarchy page={page} toggleNavListOverlayForParent={toggleNavListOverlayForParent} />
      </div>
      <div className={rightClass}>
        <NextLink page={page} />
      </div>
    </div>
  );
}
NavBar.displayName = 'NavBar';

const NavBarHierarchy: React.FC<{
  page: Page;
  toggleNavListOverlayForParent: (parent: ParentPage) => void;
}> = ({
  page,
  toggleNavListOverlayForParent,
}) => {
  const ancestors = pageAncestors(page);
  return (
    <span className={hierarchyClass}>
      {ancestors.map((ancestor, index) =>
        ancestor.noNav
          ? null
          : <NavBarAncestor
              key={index}
              ancestor={ancestor}
              toggleNavListOverlayForParent={toggleNavListOverlayForParent}
            />
      )}
      <span className={hierarchyLeafClass}>{page.title}</span>
    </span>
  );
}
NavBarHierarchy.displayName = 'NavBarHierarchy';

const NavBarAncestor: React.FC<{
  ancestor: ParentPage;
  toggleNavListOverlayForParent: (parent: ParentPage) => void;
}> = ({
  ancestor,
  toggleNavListOverlayForParent,
}) => {
  const toggleNavListOverlay = React.useCallback(() => {
    toggleNavListOverlayForParent(ancestor)
  }, [ancestor, toggleNavListOverlayForParent]);
  if (ancestor.noNav) {
    return null;
  } else {
    return (
      <>
        <span className={ancestorButtonClass} onClick={toggleNavListOverlay}>
          <span className={hierarchyArrowClass}>{'▽'}</span>
          <span className={hierarchyTextClass}>{ancestor.title}</span>
        </span>
        <span className={hierarchyDividerClass}>{'/'}</span>
      </>
    );
  }
}
NavBarAncestor.displayName = 'NavBarAncestor';

const PrevLink: React.FC<{
  page: Page;
}> = ({ page }) => {
  const prevLeaf = prevLeafPage(page);
  if (!prevLeaf) {
    return null;
  }
  const text = pageNavText(prevLeaf, page);
  const url = pageUrl(prevLeaf/*, lastStep*/);
  return (
    <Link className={buttonClass} to={url}>
      <span className={prevLinkArrowClass}>{'◅'}</span>
      <span className={prevLinkTextClass}>{text}</span>
    </Link>
  );
}
PrevLink.displayName = 'PrevLink';

const NextLink: React.FC<{
  page: Page
}> = ({ page }) => {
  const nextLeaf = nextLeafPage(page);
  if (!nextLeaf) {
    return null;
  }
  const text = pageNavText(nextLeaf, page);
  const url = pageUrl(nextLeaf);
  return (
    <Link className={buttonClass} to={url}>
      <span className={nextLinkTextClass}>{text}</span>
      <span className={nextLinkArrowClass}>{'▻'}</span>
    </Link>
  );
}
NextLink.displayName = 'NextLink';

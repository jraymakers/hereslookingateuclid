import * as React from 'react';

import {
  alignItemsStretchStyle,
  borderStyle,
  cssClass,
  flexColumnStyle,
  flexGrowStyle,
  textNormalStyle,
  textSerifStyle,
} from '../../style';
import { LeafPage, ParentPage } from '../types';
import { nextLeafPage, pageUrl, prevLeafPage } from '../utils';
import { NavBar } from './NavBar';
import { NavListView } from './NavListView';

const classPrefix = 'PageView';

const rootClass = cssClass(classPrefix, 'root',
  flexGrowStyle,
  flexColumnStyle,
  { position: 'relative' },
);

const pageContentClass = cssClass(classPrefix, 'pageContent',
  alignItemsStretchStyle,
  flexColumnStyle,
  flexGrowStyle,
  textNormalStyle,
  textSerifStyle,
  {
    backgroundColor: '#ddd',
  },
);

const glassPaneClass = cssClass(classPrefix, 'glassPane',
  {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
);

const contentsOverlayClass = cssClass(classPrefix, 'contentsOverlay',
  borderStyle,
  {
    alignSelf: 'center',
    position: 'absolute',
    marginTop: -1,
    width: 600,
    maxHeight: '90%',
    backgroundColor: 'white',
    overflow: 'auto',
  },
);

type PageViewProps = Readonly<{
  page: LeafPage;
  navigate: (path: string) => void;
  onKeyDown?: (event: KeyboardEvent) => void;
}>;

export const PageView: React.FC<PageViewProps> = (props) => {
  const { page, navigate, onKeyDown } = props;
  const [overlayParent, setOverlayParent] = React.useState<ParentPage | null>(null);
  React.useEffect(() => {
    function onBodyKeyDown(event: KeyboardEvent) {
      const neighborPage = neighborPageForKey(event.key, page);
      if (neighborPage) {
        navigate(pageUrl(neighborPage));
      }
      if (onKeyDown) {
        onKeyDown(event);
      }
    }
    document.body.addEventListener('keydown', onBodyKeyDown);
    return () => {
      document.body.removeEventListener('keydown', onBodyKeyDown);
    };
  }, [navigate, onKeyDown, page]);
  const toggleNavListOverlayForParent = React.useCallback((parent: ParentPage) => {
    setOverlayParent(overlayParent ? null : parent);
  }, [overlayParent, setOverlayParent]);
  const hideNavListOverlay = React.useCallback(() => {
    setOverlayParent(null);
  }, []);
  return (
    <div className={rootClass}>
      <NavBar
        page={page}
        toggleNavListOverlayForParent={toggleNavListOverlayForParent}
      />
      <div className={pageContentClass}>
        {props.children}
        {maybeRenderNavListOverlay(overlayParent, hideNavListOverlay)}
      </div>
    </div>
  );
}

function neighborPageForKey(key: string, page: LeafPage) {
  switch (key) {
    case 'ArrowLeft':
      return prevLeafPage(page);
    case 'ArrowRight':
      return nextLeafPage(page);
  }
  return null;
}

function maybeRenderNavListOverlay(overlayParent: ParentPage | null, hideNavListOverlay: () => void) {
  if (overlayParent) {
    return (
      <>
        <div className={glassPaneClass} onClick={hideNavListOverlay} />
        <div className={contentsOverlayClass}>
          <NavListView parent={overlayParent} onClose={hideNavListOverlay} />
        </div>
      </>
    );
  } else {
    return null;
  }
}

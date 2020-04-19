import * as React from 'react';

import {
  alignItemsStretchStyle,
  borderStyle,
  flexColumnStyle,
  flexGrowStyle,
  namedClass,
  textNormalStyle,
  textSerifStyle,
} from '../../style';
import { LeafPage } from '../types';
import { nextLeafPage, pageUrl, prevLeafPage } from '../utils';
import { NavBar } from './NavBar';
import { NavListView } from './NavListView';

const classPrefix = 'PageView';

const rootClass = namedClass(classPrefix, 'root',
  flexGrowStyle,
  flexColumnStyle,
  { position: 'relative' },
);

const pageContentClass = namedClass(classPrefix, 'pageContent',
  alignItemsStretchStyle,
  flexColumnStyle,
  flexGrowStyle,
  textNormalStyle,
  textSerifStyle,
  {
    backgroundColor: '#ddd',
  },
);

const glassPaneClass = namedClass(classPrefix, 'glassPane',
  {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
);

const contentsOverlayClass = namedClass(classPrefix, 'contentsOverlay',
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
  const [contentsVisible, setContentsVisible] = React.useState(false);
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
  const toggleNavListOverlay = React.useCallback(() => {
    if (page.parent) {
      setContentsVisible(!contentsVisible);
    }
  }, [contentsVisible, setContentsVisible, page]);
  const hideNavListOverlay = React.useCallback(() => {
    setContentsVisible(false);
  }, []);
  return (
    <div className={rootClass}>
      <NavBar
        page={page}
        toggleNavListOverlay={toggleNavListOverlay}
      />
      <div className={pageContentClass}>
        {props.children}
        {maybeRenderNavListOverlay(contentsVisible, page, hideNavListOverlay)}
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

function maybeRenderNavListOverlay(contentsVisible: boolean, page: LeafPage, hideNavListOverlay: () => void) {
  if (contentsVisible && page.parent) {
    return (
      <>
        <div className={glassPaneClass} onClick={hideNavListOverlay} />
        <div className={contentsOverlayClass}>
          <NavListView parent={page.parent} onClose={hideNavListOverlay} />
        </div>
      </>
    );
  } else {
    return null;
  }
}

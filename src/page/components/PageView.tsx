import * as React from 'react';

import { pageUrl } from '../../link';
import {
  alignItemsStretchStyle,
  borderStyle,
  flexColumnStyle,
  flexGrowStyle,
  flexRowStyle,
  justifyContentCenterStyle,
  largeSpace,
  mediumSpace,
  namedClass,
  textNormalStyle,
  textSerifStyle,
} from '../../style';

import { LeafPage } from '../types/Page';
import { nextLeafPage, prevLeafPage } from '../utils';

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

type PageViewProps = {
  readonly page: LeafPage;
  readonly navigate: (path: string) => void;
  readonly onKeyDown?: (event: KeyboardEvent) => void;
};

type PageViewState = {
  readonly contentsVisible: boolean;
};

export class PageView extends React.PureComponent<PageViewProps, PageViewState> {

  constructor(props: PageViewProps) {
    super(props);
    this.state = {
      contentsVisible: false,
    };
  }

  public componentDidMount() {
    document.body.addEventListener('keydown', this.onBodyKeyDown);
  }

  public componentWillUnmount() {
    document.body.removeEventListener('keydown', this.onBodyKeyDown);
  }

  public render(): JSX.Element {
    const page = this.props.page;
    return (
      <div className={rootClass}>
        <NavBar
          page={page}
          toggleNavListOverlay={this.toggleNavListOverlay}
        />
        <div className={pageContentClass}>
          {this.props.children}
          {this.maybeRenderGlassPane()}
          {this.maybeRenderNavListOverlay()}
        </div>
      </div>
    );
  }

  private readonly toggleNavListOverlay = () => {
    if (this.props.page.parent) {
      this.setState({
        contentsVisible: !this.state.contentsVisible,
      });
    }
  }

  private readonly hideNavListOverlay = () => {
    this.setState({
      contentsVisible: false,
    });
  }

  private maybeRenderGlassPane(): JSX.Element | null {
    if (this.state.contentsVisible && this.props.page.parent) {
      return (
        <div className={glassPaneClass} onClick={this.hideNavListOverlay} />
      );
    } else {
      return null;
    }
  }

  private maybeRenderNavListOverlay(): JSX.Element | null {
    if (this.state.contentsVisible && this.props.page.parent) {
      return (
        <div className={contentsOverlayClass}>
          <NavListView parent={this.props.page.parent} />
        </div>
      );
    } else {
      return null;
    }
  }

  private goPrevPage() {
    const prevPage = prevLeafPage(this.props.page);
    if (prevPage) {
      this.props.navigate(pageUrl(prevPage));
    }
  }

  private goNextPage() {
    const nextPage = nextLeafPage(this.props.page);
    if (nextPage) {
      this.props.navigate(pageUrl(nextPage));
    }
  }

  private readonly onBodyKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
        this.goPrevPage();
        break;
      case 'ArrowRight':
        this.goNextPage();
        break;
    }
    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
  }

}

import * as React from 'react';

import {
  books,
  mainContentsPage,
} from '../../content';
import {
  SubtitledLinkInfoList,
} from '../../link';
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

import { Page } from '../types/Page';

import { ContentsView } from './ContentsView';
import { NavBar } from './NavBar';

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
    position: 'relative',
  },
);

const navGlassPaneClass = namedClass(classPrefix, 'navGlassPane',
  {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
);

const pageContentGlassPaneClass = namedClass(classPrefix, 'pageContentGlassPane',
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
    width: 800,
    height: '90%',
    backgroundColor: 'white',
    overflow: 'auto',
  },
);

function contentsLinksForBook(bookName: string | null | undefined): SubtitledLinkInfoList {
  if (bookName) {
    const book = books[bookName];
    if (book) {
      return book.contentsPage.contentsLinks;
    }
  }
  return mainContentsPage.contentsLinks;
}

type PageViewProps = {
  readonly page: Page;
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
          bookName={page.bookName}
          prev={page.prev}
          next={page.next}
          toggleContentsOverlay={this.toggleContentsOverlay}
        />
        {this.maybeRenderNavGlassPane()}
        <div className={pageContentClass}>
          {this.props.children}
          {this.maybeRenderPageContentGlassPane()}
          {this.maybeRenderContentsOverlay()}
        </div>
      </div>
    );
  }

  private readonly toggleContentsOverlay = () => {
    this.setState({
      contentsVisible: !this.state.contentsVisible,
    });
  }

  private readonly hideContentsOverlay = () => {
    this.setState({
      contentsVisible: false,
    });
  }

  private maybeRenderNavGlassPane(): JSX.Element | null {
    if (this.state.contentsVisible) {
      return (
        <div className={navGlassPaneClass} onClick={this.hideContentsOverlay} />
      );
    } else {
      return null;
    }
  }

  private maybeRenderPageContentGlassPane(): JSX.Element | null {
    if (this.state.contentsVisible) {
      return (
        <div className={pageContentGlassPaneClass} onClick={this.hideContentsOverlay} />
      );
    } else {
      return null;
    }
  }

  private maybeRenderContentsOverlay(): JSX.Element | null {
    if (this.state.contentsVisible) {
      const contentsLinks = contentsLinksForBook(this.props.page.bookName);
      return (
        <div className={contentsOverlayClass}>
          <ContentsView contentsLinks={contentsLinks} />
        </div>
      );
    } else {
      return null;
    }
  }

  private readonly onBodyKeyDown = (event: KeyboardEvent) => {
    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
  }

}

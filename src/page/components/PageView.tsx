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

const contentsOverlayClass = namedClass(classPrefix, 'contentsOverlay',
  borderStyle,
  {
    alignSelf: 'center',
    position: 'absolute',
    marginTop: -1,
    width: 800,
    height: '90%',
    backgroundColor: 'white',
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
  readonly noSiteTitleLink?: boolean;
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
          toggleContents={this.toggleContents}
        />
        <div className={pageContentClass}>
          {this.props.children}
          {this.maybeRenderContents()}
        </div>
      </div>
    );
  }

  private readonly toggleContents = () => {
    this.setState({
      contentsVisible: !this.state.contentsVisible,
    });
  }

  private maybeRenderContents(): JSX.Element | null {
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

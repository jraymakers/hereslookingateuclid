import * as React from 'react';

// import {
//   books,
//   mainContentsLinks,
// } from '../../content';
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

import { LeafPage, Page } from '../types/Page';

import { ContentsView } from './ContentsView';
import { NavBar } from './NavBar';
import { StepsAndDiagramPageItemView } from './StepsAndDiagramPageItemView';
import { TextPageItemView } from './TextPageItemView';

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
    height: '90%',
    backgroundColor: 'white',
    overflow: 'auto',
  },
);

function contentsLinksForPage(page: Page): SubtitledLinkInfoList {
  // if (bookName) {
  //   const book = books[bookName];
  //   if (book) {
  //     return book.contentsLinks;
  //   }
  // }
  // return mainContentsLinks;
  return [];
}

type PageViewProps = {
  readonly page: LeafPage;
  // readonly onKeyDown?: (event: KeyboardEvent) => void;
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
          // bookName={page.bookName}
          // prev={page.prev}
          // next={page.next}
          toggleContentsOverlay={this.toggleContentsOverlay}
        />
        <div className={pageContentClass}>
          {this.renderPageItems()}
          {this.maybeRenderGlassPane()}
          {this.maybeRenderContentsOverlay()}
        </div>
      </div>
    );
  }

  private renderPageItems(): JSX.Element[] {
    return this.props.page.items.map((item, index) => {
      switch (item.pageItemType) {
        case 'stepsAndDiagram':
          return <StepsAndDiagramPageItemView key={index} pageItem={item} currentStepIndex={0} />;
        case 'text':
          return <TextPageItemView key={index} pageItem={item} />;
      }
    });
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

  private maybeRenderGlassPane(): JSX.Element | null {
    if (this.state.contentsVisible) {
      return (
        <div className={glassPaneClass} onClick={this.hideContentsOverlay} />
      );
    } else {
      return null;
    }
  }

  private maybeRenderContentsOverlay(): JSX.Element | null {
    if (this.state.contentsVisible) {
      const contentsLinks = contentsLinksForPage(this.props.page);
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
    // if (this.props.onKeyDown) {
    //   this.props.onKeyDown(event);
    // }
  }

}

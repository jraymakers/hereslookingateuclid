import * as React from 'react';

import {
  pageUrl, SubtitledLinkInfo, SubtitledLinkInfoList,
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

import { LeafPage, Page, ParentPage } from '../types/Page';

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

function contentsLinksForPage(parent: ParentPage | null): SubtitledLinkInfoList {
  if (parent) {
    return parent.childList.map((child) => {
      const linkInfo: SubtitledLinkInfo = {
        url: pageUrl(child),
        text: child.title,
        subtitle: child.pageType === 'stepsAndDiagram' ? child.stepsAndDiagram.summary : undefined,
      };
      return linkInfo;
    });
  }
  return [];
}

type PageViewProps = {
  readonly page: LeafPage;
  readonly stepIndex?: number;
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
          toggleContentsOverlay={this.toggleContentsOverlay}
        />
        <div className={pageContentClass}>
          {this.props.children}
          {this.maybeRenderGlassPane()}
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
      const contentsLinks = contentsLinksForPage(this.props.page.parent);
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

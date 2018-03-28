import * as React from 'react';

import {
  alignItemsStretchStyle,
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

import { NavBar } from './NavBar';

const classPrefix = 'PageView';

const rootClass = namedClass(classPrefix, 'root',
  flexGrowStyle,
  flexRowStyle,
  justifyContentCenterStyle,
);

const contentClass = namedClass(classPrefix, 'content',
  alignItemsStretchStyle,
  flexColumnStyle,
  flexGrowStyle,
  textNormalStyle,
  textSerifStyle,
  {
    maxWidth: 1200,
    paddingLeft: largeSpace,
    paddingRight: largeSpace,
    paddingTop: mediumSpace,
    paddingBottom: mediumSpace,
  },
);

type PageViewProps = {
  readonly page: Page;
  readonly noSiteTitleLink?: boolean;
  readonly onKeyDown?: (event: KeyboardEvent) => void;
};

export class PageView extends React.PureComponent<PageViewProps> {

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
        <div className={contentClass}>
          <NavBar prev={page.prev} up={page.up} next={page.next}
            noSiteTitleLink={this.props.noSiteTitleLink}
          />
          {this.props.children}
        </div>
      </div>
    );
  }

  private readonly onBodyKeyDown = (event: KeyboardEvent) => {
    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
  }

}

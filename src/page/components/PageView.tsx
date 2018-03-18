import * as React from 'react';
import { style } from 'typestyle';

import { Page } from '../types/Page';

import { NavBar } from './NavBar';

const classPrefix = 'PageView';

const rootClass = style({
  $debugName: `${classPrefix}_root`,
  $unique: true,
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
});

const contentClass = style({
  $debugName: `${classPrefix}_content`,
  $unique: true,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  padding: 12,
  fontFamily: 'serif',
  fontSize: 18,
  maxWidth: 1200,
});

type PageViewProps = {
  readonly page: Page;
  readonly noSiteTitleLink?: boolean;
  readonly onKeyDown?: (event: KeyboardEvent) => void;
}

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

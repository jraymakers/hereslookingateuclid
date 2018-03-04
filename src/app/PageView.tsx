import * as React from 'react';
import { style } from 'typestyle';

import { NavBar } from '../app/NavBar';

import { Page } from '../shared/types';

const classPrefix = 'PageView';

const rootClass = style({
  $debugName: `${classPrefix}_root`,
  $unique: true,
  display: 'flex',
  flexDirection: 'column',
  padding: 12,
});

type PageViewProps = {
  readonly page: Page;
  readonly noTitleLink?: boolean;
}

export class PageView extends React.PureComponent<PageViewProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    return (
      <div className={rootClass}>
        <NavBar prev={page.prev} up={page.up} next={page.next} noTitleLink={this.props.noTitleLink}></NavBar>
        {this.props.children}
      </div>
    );
  }

}

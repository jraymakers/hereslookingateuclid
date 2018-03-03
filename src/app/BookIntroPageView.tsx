import * as React from 'react';
import { Link } from 'react-router-dom';

import { BookIntroPage } from '../shared/types';

import { NavBar } from './NavBar';

export type BookIntroViewProps = {
  readonly page: BookIntroPage;
};

export class BookIntroPageView extends React.PureComponent<BookIntroViewProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    return (
      <div>
        <NavBar prev={page.prev} up={page.up} next={page.next}></NavBar>
        <div>{`Book ${page.bookName}`}</div>
        {this.props.page.content()}
      </div>
    );
  }

}

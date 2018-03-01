import * as React from 'react';
import { RouteComponentProps, Redirect } from 'react-router';

import books from '../books';
import { validBook } from '../shared/utils/BookUtils';

import { BookIntro } from '../app/BookIntro';

export type BookRouteProps = RouteComponentProps<{
  readonly bookNumStr: string;
}>;

export class BookRoute extends React.PureComponent<BookRouteProps> {

  public render(): JSX.Element {
    const bookNum = parseInt(this.props.match.params.bookNumStr, 10);
    if (validBook(books, bookNum)) {
      return <BookIntro bookNum={bookNum} />
    } else {
      return <Redirect to="/" />
    }
  }

}

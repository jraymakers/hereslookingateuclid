import * as React from 'react';
import { RouteComponentProps, Redirect } from 'react-router';

import books from '../books';
import { validBookProp } from '../shared/utils/BookUtils';

export type BookPropRouteProps = RouteComponentProps<{
  readonly bookNumStr: string;
  readonly propNumStr: string;
}>;

export class BookPropRoute extends React.PureComponent<BookPropRouteProps> {

  public render(): JSX.Element {
    const bookNum = parseInt(this.props.match.params.bookNumStr, 10);
    const propNum = parseInt(this.props.match.params.propNumStr, 10);
    if (validBookProp(books, { bookNum, propNum })) {
      return <Redirect to={`/book/${bookNum}/prop/${propNum}/step/0`} />
    } else {
      return <Redirect to={`/book/${bookNum}`} />
    }
  }

}

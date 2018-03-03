import * as React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';

import { books, MainContents, MainIntro } from '../content';

import { BookRoutes } from './BookRoutes';
import {
  mainContentsUrl,
  mainIntroUrl,
  bookUrl,
} from './Urls';

type BookRouteProps = RouteComponentProps<{
  readonly bookName: string;
}>;

export class MainRoutes extends React.Component<{}> {

  public render(): JSX.Element {
    return (
      <Switch>
        <Route exact path={mainContentsUrl} component={MainContents} />
        <Route exact path={mainIntroUrl} component={MainIntro} />
        <Route path={bookUrl(':bookName')} render={this.renderBookRoute} />
        <Redirect to={mainIntroUrl} />
      </Switch>
    );
  }

  private readonly renderBookRoute = (props: BookRouteProps): JSX.Element => {
    const match = props.match;
    const bookName = match.params.bookName;
    const book = books[bookName];
    if (book) {
      return <BookRoutes book={book} />
    } else {
      return <Redirect to={mainContentsUrl} />
    }
  }

}

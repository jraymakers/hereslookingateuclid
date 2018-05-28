import * as React from 'react';
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router';

import {
  books,
  mainIntroPage,
} from '../../content';
import {
  bookUrl,
  mainIntroUrl,
} from '../../link';
import {
  TextPageView,
} from '../../page';

import { BookRoutes } from './BookRoutes';

type BookRouteProps = RouteComponentProps<{
  readonly bookName: string;
}>;

export class MainRoutes extends React.Component<{}> {

  public render(): JSX.Element {
    return (
      <Switch>
        <Route exact path={mainIntroUrl} component={this.renderIntro} />
        <Route path={bookUrl(':bookName')} render={this.renderBookRoute} />
        <Redirect to={mainIntroUrl} />
      </Switch>
    );
  }

  private readonly renderIntro = (): JSX.Element => {
    return <TextPageView page={mainIntroPage} />;
  }

  private readonly renderBookRoute = (props: BookRouteProps): JSX.Element => {
    const match = props.match;
    const bookName = match.params.bookName;
    const book = books[bookName];
    if (book) {
      return <BookRoutes book={book} />;
    } else {
      return <Redirect to={mainIntroUrl} />;
    }
  }

}

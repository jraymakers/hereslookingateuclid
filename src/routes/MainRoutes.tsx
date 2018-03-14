import * as React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';

import { books, mainContentsPage, mainIntroPage } from '../content';
import { ContentsPageView, TextPageView } from '../page';

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
        <Route exact path={mainContentsUrl} render={this.renderContents} />
        <Route exact path={mainIntroUrl} component={this.renderIntro} />
        <Route path={bookUrl(':bookName')} render={this.renderBookRoute} />
        <Redirect to={mainIntroUrl} />
      </Switch>
    );
  }

  private readonly renderContents = (): JSX.Element => {
    return <ContentsPageView page={mainContentsPage} noTitleLink={true} />
  }

  private readonly renderIntro = (): JSX.Element => {
    return <TextPageView page={mainIntroPage} />
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

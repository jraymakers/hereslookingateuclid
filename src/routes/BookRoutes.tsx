import * as React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';

import { ContentsPageView } from '../app/ContentsPageView';
import { IntroPageView } from '../app/IntroPageView';
import { Book } from '../shared/types';

import { PropRoutes } from './PropRoutes';
import {
  bookContentsUrl,
  bookIntroUrl,
  propUrl,
} from './Urls';

type BookRoutesProps = {
  readonly book: Book;
};

type PropRouteProps = RouteComponentProps<{
  readonly propName: string;
}>;

export class BookRoutes extends React.Component<BookRoutesProps> {

  public render(): JSX.Element {
    const bookName = this.props.book.bookName;
    return (
      <Switch>
        <Route exact path={bookContentsUrl(bookName)} render={this.renderContents} />
        <Route exact path={bookIntroUrl(bookName)} render={this.renderIntro} />
        <Route path={propUrl(bookName, ':propName')} render={this.renderPropRoute} />
        <Redirect to={bookIntroUrl(bookName)} />
      </Switch>
    );
  }

  private readonly renderContents = () => {
    return <ContentsPageView page={this.props.book.contentsPage} />;
  }

  private readonly renderIntro = () => {
    return <IntroPageView page={this.props.book.introPage} />;
  }

  private readonly renderPropRoute = (props: PropRouteProps) => {
    const propName = props.match.params.propName;
    const page = this.props.book.propositionPages[propName];
    if (page) {
      return <PropRoutes page={page} />
    } else {
      return <Redirect to={bookContentsUrl(this.props.book.bookName)} />
    }
  }

}

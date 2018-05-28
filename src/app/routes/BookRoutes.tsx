import * as React from 'react';
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router';

import {
  bookIntroUrl,
  commonNotionUrl,
  definitionUrl,
  MakePageUrl,
  postulateUrl,
  propositionUrl,
} from '../../link';
import {
  Book,
  StepsAndDiagramPage,
  TextPageView,
} from '../../page';

import { StepsAndDiagramPageRoutes } from './StepsAndDiagramPageRoutes';

type BookRoutesProps = {
  readonly book: Book;
};

type PageRouteProps = RouteComponentProps<{
  readonly pageName: string;
}>;

export class BookRoutes extends React.Component<BookRoutesProps> {

  public render(): JSX.Element {
    const bookName = this.props.book.bookName;
    return (
      <Switch>
        <Route exact path={bookIntroUrl(bookName)} render={this.renderIntro} />
        <Route path={commonNotionUrl(bookName, ':pageName')} render={this.renderCommonNotionRoute} />
        <Route path={definitionUrl(bookName, ':pageName')} render={this.renderDefinitionRoute} />
        <Route path={postulateUrl(bookName, ':pageName')} render={this.renderPostulateRoute} />
        <Route path={propositionUrl(bookName, ':pageName')} render={this.renderPropositionRoute} />
        <Redirect to={bookIntroUrl(bookName)} />
      </Switch>
    );
  }

  private readonly renderIntro = () => {
    return <TextPageView page={this.props.book.introPage} />;
  }

  private readonly renderCommonNotionRoute = (props: PageRouteProps) => {
    const pageName = props.match.params.pageName;
    const pages = this.props.book.commonNotionPages;
    const page = pages ? pages[pageName] : null;
    return this.renderStepsAndDiagramPage(page, commonNotionUrl);
  }

  private readonly renderDefinitionRoute = (props: PageRouteProps) => {
    const pageName = props.match.params.pageName;
    const pages = this.props.book.definitionPages;
    const page = pages ? pages[pageName] : null;
    return this.renderStepsAndDiagramPage(page, definitionUrl);
  }

  private readonly renderPostulateRoute = (props: PageRouteProps) => {
    const pageName = props.match.params.pageName;
    const pages = this.props.book.postulatePages;
    const page = pages ? pages[pageName] : null;
    return this.renderStepsAndDiagramPage(page, postulateUrl);
  }

  private readonly renderPropositionRoute = (props: PageRouteProps) => {
    const pageName = props.match.params.pageName;
    const page = this.props.book.propositionPages[pageName];
    return this.renderStepsAndDiagramPage(page, propositionUrl);
  }

  private renderStepsAndDiagramPage(
    page: StepsAndDiagramPage | null | undefined,
    makePageUrl: MakePageUrl,
  ): JSX.Element {
    if (page) {
      return (
        <StepsAndDiagramPageRoutes
          page={page}
          makePageUrl={makePageUrl}
        />
      );
    } else {
      return <Redirect to={bookIntroUrl(this.props.book.bookName)} />;
    }
  }

}

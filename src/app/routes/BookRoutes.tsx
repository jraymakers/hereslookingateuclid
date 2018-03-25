import * as React from 'react';
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router';

import {
  axiomGroupStepUrl,
  axiomGroupUrl,
  bookContentsUrl,
  bookIntroUrl,
  defGroupStepUrl,
  defGroupUrl,
  postulateStepUrl,
  postulateUrl,
  propStepUrl,
  propUrl,
} from '../../link';
import {
  Book,
  ContentsPageView,
  StepsAndDiagramPage,
  TextPageView,
} from '../../page';

import { MakePageStepUrl, StepsAndDiagramPageRoutes } from './StepsAndDiagramPageRoutes';

type AxiomGroupRouteProps = RouteComponentProps<{
  readonly axiomGroupName: string;
}>;

type BookRoutesProps = {
  readonly book: Book;
};

type DefGroupRouteProps = RouteComponentProps<{
  readonly defGroupName: string;
}>;

type PostulateRouteProps = RouteComponentProps<{
  readonly postulateName: string;
}>;

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
        <Route path={axiomGroupUrl(bookName, ':axiomGroupName')} render={this.renderAxiomGroupRoute} />
        <Route path={defGroupUrl(bookName, ':defGroupName')} render={this.renderDefGroupRoute} />
        <Route path={postulateUrl(bookName, ':postulateName')} render={this.renderPostulateRoute} />
        <Route path={propUrl(bookName, ':propName')} render={this.renderPropRoute} />
        <Redirect to={bookIntroUrl(bookName)} />
      </Switch>
    );
  }

  private readonly renderContents = () => {
    return <ContentsPageView page={this.props.book.contentsPage} />;
  }

  private readonly renderIntro = () => {
    return <TextPageView page={this.props.book.introPage} />;
  }

  private readonly renderAxiomGroupRoute = (props: AxiomGroupRouteProps) => {
    const axiomGroupName = props.match.params.axiomGroupName;
    const pages = this.props.book.axiomGroupPages;
    const page = pages ? pages[axiomGroupName] : null;
    return this.renderStepsAndDiagramPage(page, axiomGroupStepUrl);
  }

  private readonly renderDefGroupRoute = (props: DefGroupRouteProps) => {
    const defGroupName = props.match.params.defGroupName;
    const pages = this.props.book.definitionGroupPages;
    const page = pages ? pages[defGroupName] : null;
    return this.renderStepsAndDiagramPage(page, defGroupStepUrl);
  }

  private readonly renderPostulateRoute = (props: PostulateRouteProps) => {
    const postulateName = props.match.params.postulateName;
    const pages = this.props.book.postulatePages;
    const page = pages ? pages[postulateName] : null;
    return this.renderStepsAndDiagramPage(page, postulateStepUrl);
  }

  private readonly renderPropRoute = (props: PropRouteProps) => {
    const propName = props.match.params.propName;
    const page = this.props.book.propositionPages[propName];
    return this.renderStepsAndDiagramPage(page, propStepUrl);
  }

  private renderStepsAndDiagramPage(
    page: StepsAndDiagramPage | null | undefined,
    makePageStepUrl: MakePageStepUrl,
  ): JSX.Element {
    if (page) {
      return (
        <StepsAndDiagramPageRoutes
          page={page}
          makePageStepUrl={makePageStepUrl}
        />
      );
    } else {
      return <Redirect to={bookContentsUrl(this.props.book.bookName)} />;
    }
  }

}

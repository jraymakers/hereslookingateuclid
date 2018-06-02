// import * as React from 'react';
// import {
//   Redirect,
//   Route,
//   RouteComponentProps,
//   Switch,
// } from 'react-router';

// import {
//   bookOverviewUrl,
//   commonNotionUrl,
//   definitionUrl,
//   MakePageUrl,
//   postulateUrl,
//   propositionUrl,
// } from '../../link';
// import {
//   ParentPage,
//   // Book,
//   // StepsAndDiagramPage,
//   TextPageView,
// } from '../../page';

// import { StepsAndDiagramPageRoutes } from './StepsAndDiagramPageRoutes';

// type BookRoutesProps = {
//   readonly book: ParentPage;
// };

// type PageRouteProps = RouteComponentProps<{
//   readonly pageName: string;
// }>;

// export class BookRoutes extends React.Component<BookRoutesProps> {

//   public render(): JSX.Element {
//     const bookName = this.props.book.name;
//     return (
//       <Switch>
//         <Route exact path={bookOverviewUrl(bookName)} render={this.renderOverview} />
//         <Route path={commonNotionUrl(bookName, ':pageName')} render={this.renderCommonNotionRoute} />
//         <Route path={definitionUrl(bookName, ':pageName')} render={this.renderDefinitionRoute} />
//         <Route path={postulateUrl(bookName, ':pageName')} render={this.renderPostulateRoute} />
//         <Route path={propositionUrl(bookName, ':pageName')} render={this.renderPropositionRoute} />
//         <Redirect to={bookOverviewUrl(bookName)} />
//       </Switch>
//     );
//   }

//   private readonly renderOverview = () => {
//     return <TextPageView page={this.props.book.pageList[0]} />;
//   }

//   private readonly renderCommonNotionRoute = (props: PageRouteProps) => {
//     const pageName = props.match.params.pageName;
//     const parent = this.props.book.pageMap['common-notions'];
//     if (parent && parent.pageType === 'parent') {
//       const page = parent.pageMap[pageName];
//       return this.renderStepsAndDiagramPage(page, commonNotionUrl);
//     } else {
//       return <Redirect to={bookOverviewUrl(this.props.book.name)} />;
//     }
//   }

//   private readonly renderDefinitionRoute = (props: PageRouteProps) => {
//     const pageName = props.match.params.pageName;
//     const pages = this.props.book.definitionPages;
//     const page = pages ? pages[pageName] : null;
//     return this.renderStepsAndDiagramPage(page, definitionUrl);
//   }

//   private readonly renderPostulateRoute = (props: PageRouteProps) => {
//     const pageName = props.match.params.pageName;
//     const pages = this.props.book.postulatePages;
//     const page = pages ? pages[pageName] : null;
//     return this.renderStepsAndDiagramPage(page, postulateUrl);
//   }

//   private readonly renderPropositionRoute = (props: PageRouteProps) => {
//     const pageName = props.match.params.pageName;
//     const page = this.props.book.propositionPages[pageName];
//     return this.renderStepsAndDiagramPage(page, propositionUrl);
//   }

//   private renderStepsAndDiagramPage(
//     page: StepsAndDiagramPage | null | undefined,
//     makePageUrl: MakePageUrl,
//   ): JSX.Element {
//     if (page) {
//       return (
//         <StepsAndDiagramPageRoutes
//           page={page}
//           makePageUrl={makePageUrl}
//         />
//       );
//     } else {
//       return <Redirect to={bookOverviewUrl(this.props.book.bookName)} />;
//     }
//   }

// }

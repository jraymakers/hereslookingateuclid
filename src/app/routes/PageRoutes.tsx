import * as React from 'react';
// import {
//   Redirect,
//   Route,
//   RouteComponentProps,
//   Switch,
// } from 'react-router';

// import content from '../../content';
// import {
//   bookUrl,
//   mainIntroUrl,
// } from '../../link';
import { Page } from '../../page';

import { LeafPageRoutes } from './LeafPageRoutes';
import { ParentPageRoutes } from './ParentPageRoutes';

// import { BookRoutes } from './BookRoutes';

type PageRoutesProps = {
  readonly prefix: string;
  readonly page: Page;
};

// type BookRouteProps = RouteComponentProps<{
//   readonly bookName: string;
// }>;

export class PageRoutes extends React.Component<PageRoutesProps> {

  public render(): JSX.Element {
    const prefix = this.props.prefix;
    const page = this.props.page;
    switch (page.pageType) {
      case 'leaf':
        return <LeafPageRoutes page={page} />;
      case 'parent':
        return <ParentPageRoutes prefix={prefix} page={page} />;
    }
    // return (
    //   <Switch>
    //     {/* <Route exact path={mainIntroUrl} component={this.renderIntro} /> */}
    //     {/* <Route path={bookUrl(':bookName')} render={this.renderBookRoute} /> */}
    //     {/* <Redirect to={mainIntroUrl} /> */}
    //   </Switch>
    // );
  }

  // private renderLeafPage(): JSX.Element {
  // }

  // private readonly renderIntro = (): JSX.Element => {
  //   return <TextPageView page={mainIntroPage} />;
  // }

  // private readonly renderBookRoute = (props: BookRouteProps): JSX.Element => {
  //   const match = props.match;
  //   const bookName = match.params.bookName;
  //   const book = books.pageMap[bookName];
  //   // const book = books[bookName];
  //   if (book) {
  //     return <BookRoutes book={book} />;
  //   } else {
  //     return <Redirect to={mainIntroUrl} />;
  //   }
  // }

}

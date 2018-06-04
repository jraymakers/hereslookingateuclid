import * as React from 'react';
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router';

import { parentPageUrl } from '../../link';
import { ParentPage } from '../../page';

import { PageRoutes } from './PageRoutes';

type ParentPageRoutesProps = {
  readonly page: ParentPage;
};

type ChildRouteProps = RouteComponentProps<{
  readonly childName: string;
}>;

export class ParentPageRoutes extends React.Component<ParentPageRoutesProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    return (
      <Switch>
        <Route
          path={`${parentPageUrl(page)}:childName`}
          render={this.renderChildRoute}
        />
        {this.redirectToFirstChild()}
      </Switch>
    );
  }

  private redirectToFirstChild() {
    const page = this.props.page;
    const firstChildName = page.childList.length > 0 ? page.childList[0].name : '';
    return <Redirect to={`${parentPageUrl(page)}${firstChildName}`} />;
  }

  private readonly renderChildRoute = (props: ChildRouteProps): JSX.Element | null => {
    const page = this.props.page;
    const childName = props.match.params.childName;
    const child = page.childMap[childName];
    if (child) {
      return (
        <PageRoutes page={child} />
      );
    } else {
      return this.redirectToFirstChild();
    }
  }

}

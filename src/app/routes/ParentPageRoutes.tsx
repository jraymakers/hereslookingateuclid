import * as React from 'react';
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router';

import {
  Page,
  ParentPage,
} from '../../page';

import { PageRoutes } from './PageRoutes';

type ParentPageRoutesProps = {
  readonly prefix: string;
  readonly page: ParentPage;
};

type ChildRouteProps = RouteComponentProps<{
  readonly childName: string;
}>;

export class ParentPageRoutes extends React.Component<ParentPageRoutesProps> {

  public render(): JSX.Element {
    const prefix = this.props.prefix;
    const page = this.props.page;
    return (
      <Switch>
        <Route
          path={`${prefix}/${page.name}/:childName`}
          render={this.renderChildRoute}
        />
        {/* <Redirect to={mainIntroUrl} /> */}
      </Switch>
    );
  }

  private readonly renderChildRoute = (props: ChildRouteProps): JSX.Element | null => {
    const childName = props.match.params.childName;
    const child = this.props.page.childMap[childName];
    if (child) {
      const prefix = this.props.prefix;
      const page = this.props.page;
      return (
        <PageRoutes prefix={`${prefix}/${page.name}`} page={child} />
      );
    } else {
      return null;
    }
  }

}

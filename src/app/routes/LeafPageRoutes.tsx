import * as React from 'react';
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router';

import {
  LeafPage,
  PageView,
} from '../../page';

type LeafPageRoutesProps = {
  readonly page: LeafPage;
};

export class LeafPageRoutes extends React.Component<LeafPageRoutesProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    return (
      <PageView page={page} />
    );
  }

}

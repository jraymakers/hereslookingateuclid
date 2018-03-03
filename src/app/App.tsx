import * as React from 'react';
import { HashRouter } from 'react-router-dom';

import { MainRoutes } from '../routes/MainRoutes';

export class App extends React.Component<{}> {

  public render(): JSX.Element {
    return (
      <HashRouter>
        <MainRoutes />
      </HashRouter>
    );
  }

}

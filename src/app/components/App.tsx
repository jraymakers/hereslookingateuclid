import * as React from 'react';
import { HashRouter } from 'react-router-dom';

import content from '../../content';
import { makePage } from '../../page';
import { PageRoutes } from '../routes/PageRoutes';

const rootPage = makePage(content);

export class App extends React.Component<{}> {

  public render(): JSX.Element {
    return (
      <HashRouter>
        <PageRoutes prefix="" page={rootPage} />
      </HashRouter>
    );
  }

}

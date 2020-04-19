import * as React from 'react';
import { HashRouter } from 'react-router-dom';

import content from '../../content';
import { makePage } from '../../page';
import { PageRoutes } from '../routes/PageRoutes';

export const App: React.FC = () => {
  const rootPage = React.useMemo(() => makePage(content), []);
  return (
    <HashRouter>
      <PageRoutes page={rootPage} />
    </HashRouter>
  );
}
App.displayName = 'App';

import * as React from 'react';
import { HashRouter } from 'react-router-dom';

import content from '../../content';
import { makePage } from '../../page';
import { PageRoutes } from '../../route';

export const Root: React.FC = () => {
  const rootPage = React.useMemo(() => makePage(content), []);
  return (
    <HashRouter>
      <PageRoutes page={rootPage} />
    </HashRouter>
  );
}
Root.displayName = 'Root';

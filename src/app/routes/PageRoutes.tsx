import * as React from 'react';

import { Page, TextPageView } from '../../page';
import { ParentPageRoutes } from './ParentPageRoutes';
import { StepsAndDiagramPageRoutes } from './StepsAndDiagramPageRoutes';

export const PageRoutes: React.FC<{
  page: Page;
}> = ({ page }) => {
  switch (page.pageType) {
    case 'parent':
      return <ParentPageRoutes page={page} />;
    case 'stepsAndDiagram':
      return <StepsAndDiagramPageRoutes page={page} />;
    case 'text':
      return <TextPageView page={page} />;
  }
}
PageRoutes.displayName = 'PageRoutes';

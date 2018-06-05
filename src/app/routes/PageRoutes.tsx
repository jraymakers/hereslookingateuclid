import * as React from 'react';

import { Page, TextPageView } from '../../page';

import { ParentPageRoutes } from './ParentPageRoutes';
import { StepsAndDiagramPageRoutes } from './StepsAndDiagramPageRoutes';

type PageRoutesProps = {
  readonly page: Page;
};

export class PageRoutes extends React.Component<PageRoutesProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    switch (page.pageType) {
      case 'parent':
        return <ParentPageRoutes page={page} />;
      case 'stepsAndDiagram':
        return <StepsAndDiagramPageRoutes page={page} />;
      case 'text':
        return <TextPageView page={page} />;
    }
  }

}

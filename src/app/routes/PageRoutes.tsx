import * as React from 'react';

import { Page } from '../../page';

import { LeafPageRoutes } from './LeafPageRoutes';
import { ParentPageRoutes } from './ParentPageRoutes';

type PageRoutesProps = {
  readonly page: Page;
};

export class PageRoutes extends React.Component<PageRoutesProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    switch (page.pageType) {
      case 'leaf':
        return <LeafPageRoutes page={page} />;
      case 'parent':
        return <ParentPageRoutes page={page} />;
    }
  }

}

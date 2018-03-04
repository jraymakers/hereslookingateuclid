import * as React from 'react';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';

import { ContentsPage, LinkInfo } from '../shared/types';
import { PageView } from './PageView';

const classPrefix = 'ContentsPageView';

const linkClass = style({
  $debugName: `${classPrefix}_link`,
  $unique: true,
  padding: 12,
});

type ContentsPageViewProps = {
  readonly page: ContentsPage;
  readonly noTitleLink?: boolean;
};

export class ContentsPageView extends React.PureComponent<ContentsPageViewProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    return (
      <PageView page={page} noTitleLink={this.props.noTitleLink}>
        {page.contentsLinks.map(this.renderContentsLink)}
      </PageView>
    );
  }

  private readonly renderContentsLink = (contentsLink: LinkInfo): JSX.Element => {
    return <Link className={linkClass} to={contentsLink.url} key={contentsLink.url}>{contentsLink.text}</Link>
  }

}

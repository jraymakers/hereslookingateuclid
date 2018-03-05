import * as React from 'react';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';

import { ContentsPage, LinkInfo } from '../shared/types';
import { PageView } from './PageView';

const classPrefix = 'ContentsPageView';

const titleClass = style({
  $debugName: `${classPrefix}_title`,
  $unique: true,
  fontSize: 24,
  padding: 6,
  textAlign: 'center',
});

const linksSectionClass = style({
  $debugName: `${classPrefix}_linkSection`,
  $unique: true,
  alignSelf: 'center',
  display: 'flex',
  flexDirection: 'column',
});

const linkClass = style({
  $debugName: `${classPrefix}_link`,
  $unique: true,
  padding: 12,
  fontSize: 21,
  color: 'black',
  textDecoration: 'none',
  $nest: {
    '&:hover': {
      $unique: true,
      color: '#888',
    }
  }
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
        {page.title ? <div className={titleClass}>{page.title}</div> : null}
        <div className={linksSectionClass}>
          {page.contentsLinks.map(this.renderContentsLink)}
        </div>
      </PageView>
    );
  }

  private readonly renderContentsLink = (contentsLink: LinkInfo): JSX.Element => {
    return <Link className={linkClass} to={contentsLink.url} key={contentsLink.url}>{contentsLink.text}</Link>
  }

}

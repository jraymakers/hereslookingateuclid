import * as React from 'react';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';

import { SubtitledLinkInfo } from '../../link';
import { ParagraphView } from '../../paragraph';

import { BookContentsPage, ContentsPage } from '../types/Page';

import { PageView } from './PageView';
import { PageHeaderView } from './PageHeaderView';

const classPrefix = 'ContentsPageView';

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
  color: 'black',
  textDecoration: 'none',
  $nest: {
    '&:hover': {
      $unique: true,
      color: '#888',
    }
  }
});

const linkTitleClass = style({
  $debugName: `${classPrefix}_linkTitle`,
  $unique: true,
  fontSize: 21,
});

const linkSubtitleClass = style({
  $debugName: `${classPrefix}_linkSubtitle`,
  $unique: true,
  fontSize: 15,
});

type ContentsPageViewProps = {
  readonly page: ContentsPage | BookContentsPage;
  readonly noSiteTitleLink?: boolean;
};

export class ContentsPageView extends React.PureComponent<ContentsPageViewProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    return (
      <PageView page={page} noSiteTitleLink={this.props.noSiteTitleLink}>
        <PageHeaderView header={page.header} />
        <div className={linksSectionClass}>
          {page.contentsLinks.map(this.renderContentsLink)}
        </div>
      </PageView>
    );
  }

  private readonly renderContentsLink = (contentsLink: SubtitledLinkInfo): JSX.Element => {
    return (
      <Link className={linkClass} to={contentsLink.url} key={contentsLink.url}>
        <div className={linkTitleClass}>{contentsLink.text}</div>
        {contentsLink.subtitle
            ? <div className={linkSubtitleClass}>
                <ParagraphView paragraph={contentsLink.subtitle} />
              </div>
          : null}
      </Link>
    );
  }

}

import * as React from 'react';
import { Link } from 'react-router-dom';

import { SubtitledLinkInfo } from '../../link';
import { Paragraph, ParagraphView } from '../../paragraph';
import {
  alignSelfCenterStyle,
  classes,
  flexColumnStyle,
  linkClass,
  namedClass,
  paddingLargeClass,
  textLargeClass,
  textSmallClass,
} from '../../style';

import { BookContentsPage, ContentsPage } from '../types/Page';

import { PageHeaderView } from './PageHeaderView';
import { PageView } from './PageView';

const classPrefix = 'ContentsPageView';
const linksSectionClass = namedClass(classPrefix, 'links',
  alignSelfCenterStyle,
  flexColumnStyle,
  { maxWidth: 600 },
);

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
      <Link className={classes(linkClass, paddingLargeClass)} to={contentsLink.url} key={contentsLink.url}>
        <div className={textLargeClass}>{contentsLink.text}</div>
        {this.renderSubtitle(contentsLink.subtitle)}
      </Link>
    );
  }

  private renderSubtitle(subtitle: Paragraph | undefined): JSX.Element | null {
    if (subtitle) {
      return (
        <div className={textSmallClass}>
          <ParagraphView paragraph={subtitle} />
        </div>
      );
    } else {
      return null;
    }
  }

}

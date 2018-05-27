import * as React from 'react';
import { Link } from 'react-router-dom';

import { bookTitle, SubtitledLinkInfo } from '../../link';
import { Paragraph, ParagraphView } from '../../paragraph';
import {
  alignSelfCenterStyle,
  classes,
  flexColumnStyle,
  linkClass,
  mediumSpace,
  namedClass,
  paddingMediumClass,
  textLargeClass,
  textSmallClass,
} from '../../style';

import { ContentsPage } from '../types/Page';

import { PageHeaderView } from './PageHeaderView';
import { PageView } from './PageView';

const classPrefix = 'ContentsPageView';
const linksSectionClass = namedClass(classPrefix, 'links',
  alignSelfCenterStyle,
  flexColumnStyle,
  {
    marginTop: mediumSpace,
    maxWidth: 600,
  },
);

type ContentsPageViewProps = {
  readonly page: ContentsPage;
};

export class ContentsPageView extends React.PureComponent<ContentsPageViewProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    return (
      <PageView page={page}>
        {/* <PageHeaderView header={page.bookName ? bookTitle(page.bookName) : null} /> */}
        <div className={linksSectionClass}>
          {page.contentsLinks.map(this.renderContentsLink)}
        </div>
      </PageView>
    );
  }

  private readonly renderContentsLink = (contentsLink: SubtitledLinkInfo): JSX.Element => {
    return (
      <Link className={classes(linkClass, paddingMediumClass)} to={contentsLink.url} key={contentsLink.url}>
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

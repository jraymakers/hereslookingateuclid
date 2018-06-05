import * as React from 'react';
import { Link } from 'react-router-dom';

import {
  pageUrl,
  SubtitledLinkInfo,
  SubtitledLinkInfoList,
} from '../../link';
import {
  Paragraph,
  ParagraphView,
} from '../../paragraph';
import {
  classes,
  flexColumnStyle,
  linkClass,
  namedClass,
  paddingMediumClass,
  textLargeClass,
  textSmallClass,
} from '../../style';

import { ParentPage } from '../types';

function contentsLinksForPage(parent: ParentPage | null): SubtitledLinkInfoList {
  if (parent) {
    return parent.childList.map((child) => {
      const linkInfo: SubtitledLinkInfo = {
        url: pageUrl(child),
        text: child.title,
        subtitle: child.pageType === 'stepsAndDiagram' ? child.stepsAndDiagram.summary : undefined,
      };
      return linkInfo;
    });
  } else {
    return [];
  }
}

const classPrefix = 'ContentsView';

const rootClass = namedClass(classPrefix, 'root', flexColumnStyle, {
  padding: 12,
});

type ContentsViewProps = {
  readonly parent: ParentPage | null;
};

type ContentsViewState = {
  readonly currentParent: ParentPage | null;
};

export class ContentsView extends React.PureComponent<ContentsViewProps, ContentsViewState> {

  constructor(props: ContentsViewProps) {
    super(props);
    this.state = {
      currentParent: this.props.parent,
    };
  }

  public render(): JSX.Element {
    const contentsLinks = contentsLinksForPage(this.state.currentParent);
    return (
      <div className={rootClass}>
        {this.renderHeader()}
        {contentsLinks.map(this.renderContentsLink)}
      </div>
    );
  }

  private renderHeader(): JSX.Element | null {
    const currentParent = this.state.currentParent;
    if (!currentParent) {
      return null;
    }
    const up = currentParent.parent;
    if (!up) {
      return null;
    }
    return (
      <div onClick={this.goUp}>{'^ '}{currentParent.title}</div>
    );
  }

  private readonly goUp = () => {
    this.setState({
      currentParent: this.state.currentParent ? this.state.currentParent.parent : null,
    });
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

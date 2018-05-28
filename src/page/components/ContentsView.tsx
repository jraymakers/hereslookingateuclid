import * as React from 'react';
import { Link } from 'react-router-dom';

import {
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

const classPrefix = 'ContentsView';

const rootClass = namedClass(classPrefix, 'root', flexColumnStyle, {
  padding: 12,
});

type ContentsViewProps = {
  readonly contentsLinks: SubtitledLinkInfoList;
};

export class ContentsView extends React.PureComponent<ContentsViewProps> {

  public render(): JSX.Element {
    return (
      <div className={rootClass}>
        {this.props.contentsLinks.map(this.renderContentsLink)}
      </div>
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

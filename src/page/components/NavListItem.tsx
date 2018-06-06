import * as React from 'react';
import { Link } from 'react-router-dom';

import {
  ParagraphView,
} from '../../paragraph';
import {
  classes,
  linkClass,
  paddingMediumClass,
  textLargeClass,
  textSmallClass,
} from '../../style';

import {
  Page,
  ParentPage,
  StepsAndDiagramPage,
  TextPage,
} from '../types';
import {
  pageUrl,
} from '../utils';

export type NavListItemProps = {
  readonly page: Page;
  readonly parentClicked: (parent: ParentPage) => void;
  readonly leafClicked: () => void;
};

export class NavListItem extends React.PureComponent<NavListItemProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    switch (page.pageType) {
      case 'parent':
        return this.renderParentListItem(page);
      case 'stepsAndDiagram':
        return this.renderStepsAndDiagramListItem(page);
      case 'text':
        return this.renderTextListItem(page);
    }
  }

  private renderParentListItem(item: ParentPage): JSX.Element {
    return (
      <div className={classes(linkClass, paddingMediumClass)} onClick={this.parentClicked}>
        <div className={textLargeClass}>{' ❯ '}{item.title}</div>
      </div>
    );
  }

  private readonly parentClicked = () => {
    const page = this.props.page;
    if (page.pageType === 'parent') {
      this.props.parentClicked(page);
    }
  }

  private renderStepsAndDiagramListItem(item: StepsAndDiagramPage): JSX.Element {
    const url = pageUrl(item);
    return (
      <Link className={classes(linkClass, paddingMediumClass)} to={url} onClick={this.props.leafClicked}>
        <div className={textLargeClass}>{item.title}</div>
        <div className={textSmallClass}>
          <ParagraphView paragraph={item.stepsAndDiagram.summary} />
        </div>
      </Link>
    );
  }

  private renderTextListItem(item: TextPage): JSX.Element {
    const url = pageUrl(item);
    return (
      <Link className={classes(linkClass, paddingMediumClass)} to={url} onClick={this.props.leafClicked}>
        <div className={textLargeClass}>{item.title}</div>
      </Link>
    );
  }

}

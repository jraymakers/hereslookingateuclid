import * as React from 'react';
import { Link } from 'react-router-dom';

import { ParagraphView } from '../../paragraph';
import {
  classes,
  linkClass,
  paddingMediumClass,
  textLargeClass,
  textSmallClass,
} from '../../style';
import { Page, ParentPage, StepsAndDiagramPage, TextPage } from '../types';
import { pageUrl } from '../utils';

type NavListItemProps = Readonly<{
  page: Page;
  parentClicked: (parent: ParentPage) => void;
  leafClicked: () => void;
}>;

export const NavListItem: React.FC<NavListItemProps> = (props) => {
  const { page, parentClicked, leafClicked } = props;
  const parentClickedCallback = React.useCallback(() => {
    if (page.pageType === 'parent') {
      parentClicked(page);
    }
  }, [page, parentClicked]);
  switch (page.pageType) {
    case 'parent':
      return renderParentListItem(page, parentClickedCallback);
    case 'stepsAndDiagram':
      return renderStepsAndDiagramListItem(page, leafClicked);
    case 'text':
      return renderTextListItem(page, leafClicked);
  }
}
NavListItem.displayName = 'NavListItem';

function renderParentListItem(item: ParentPage, parentClickedCallback: () => void): JSX.Element {
  return (
    <div className={classes(linkClass, paddingMediumClass)} onClick={parentClickedCallback}>
      <div className={textLargeClass}>{' ❯ '}{item.title}</div>
    </div>
  );
}

function renderStepsAndDiagramListItem(item: StepsAndDiagramPage, leafClicked: () => void): JSX.Element {
  const url = pageUrl(item);
  return (
    <Link className={classes(linkClass, paddingMediumClass)} to={url} onClick={leafClicked}>
      <div className={textLargeClass}>{item.title}</div>
      <div className={textSmallClass}>
        <ParagraphView paragraph={item.stepsAndDiagram.summary} />
      </div>
    </Link>
  );
}

function renderTextListItem(item: TextPage, leafClicked: () => void): JSX.Element {
  const url = pageUrl(item);
  return (
    <Link className={classes(linkClass, paddingMediumClass)} to={url} onClick={leafClicked}>
      <div className={textLargeClass}>{item.title}</div>
    </Link>
  );
}

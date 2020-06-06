import * as React from 'react';
import { Link } from 'react-router-dom';

import { ParagraphView } from '../../paragraph';
import {
  classes,
  linkClass,
  textLargeClass,
  textSmallClass,
  cssClass,
} from '../../style';
import { Page, ParentPage, StepsAndDiagramPage, TextPage } from '../types';
import { pageUrl } from '../utils';

export const marginLeftClass = cssClass('NavListItem', 'marginLeft', {
  marginLeft: 18,
});

export const marginBottomClass = cssClass('NavListItem', 'marginBottomClass', {
  display: 'block',
  marginBottom: 12,
});

type NavListItemProps = Readonly<{
  page: Page;
  leafClicked: () => void;
}>;

export const NavListItem: React.FC<NavListItemProps> = (props) => {
  const { page,  leafClicked } = props;
  switch (page.pageType) {
    case 'parent':
      return renderParentListItem(page, leafClicked);
    case 'stepsAndDiagram':
      return renderStepsAndDiagramListItem(page, leafClicked);
    case 'text':
      return renderTextListItem(page, leafClicked);
  }
}
NavListItem.displayName = 'NavListItem';

function renderParentListItem(item: ParentPage, leafClicked: () => void): JSX.Element {
  return (
    <>
      <div className={classes(textLargeClass, marginBottomClass)}>{item.title}</div>
      <div className={marginLeftClass}>
        {item.childList ? item.childList.map((child, index) =>
          <NavListItem key={index} page={child} leafClicked={leafClicked} />
        ) : null }
      </div>
    </>
  );
}

function renderStepsAndDiagramListItem(item: StepsAndDiagramPage, leafClicked: () => void): JSX.Element {
  const url = pageUrl(item);
  return (
    <Link className={classes(linkClass, marginBottomClass)} to={url} onClick={leafClicked}>
      <div className={textLargeClass}>{item.title+' ▻'}</div>
      <div className={textSmallClass}>
        <ParagraphView paragraph={item.stepsAndDiagram.summary} />
      </div>
    </Link>
  );
}

function renderTextListItem(item: TextPage, leafClicked: () => void): JSX.Element {
  const url = pageUrl(item);
  return (
    <Link className={classes(linkClass, marginBottomClass)} to={url} onClick={leafClicked}>
      <div className={textLargeClass}>{item.title+' ▻'}</div>
    </Link>
  );
}

import * as React from 'react';

import { cssClass, flexColumnStyle } from '../../style';
import { ParentPage } from '../types';
import { NavListItem } from './NavListItem';

const classPrefix = 'NavListView';

const rootClass = cssClass(classPrefix, 'root', flexColumnStyle, {
});

const listClass = cssClass(classPrefix, 'list', flexColumnStyle, {
  padding: '12px 18px',
  overflow: 'auto',
});

type NavListViewProps = Readonly<{
  parent: ParentPage;
  onClose: () => void;
}>;

export const NavListView: React.FC<NavListViewProps> = (props) => {
  return (
    <div className={rootClass}>
      {renderList(props.parent, props.onClose)}
    </div>
  );
}
NavListView.displayName = 'NavListView';

function renderList(parent: ParentPage, onClose: () => void) {
  const items = parent ? parent.childList : [];
  return (
    <div className={listClass}>
      {items.map((item, index) =>
        <NavListItem page={item} leafClicked={onClose} key={index} />)}
    </div>
  );
}

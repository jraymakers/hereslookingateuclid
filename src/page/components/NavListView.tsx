import * as React from 'react';

import { flexColumnStyle, flexRowStyle, namedClass } from '../../style';
import { ParentPage } from '../types';
import { NavListItem } from './NavListItem';

const classPrefix = 'NavListView';

const rootClass = namedClass(classPrefix, 'root', flexColumnStyle, {
});

const headerClass = namedClass(classPrefix, 'header', flexRowStyle, {
  borderBottom: '1px solid #999',
  padding: 12,
});

const listClass = namedClass(classPrefix, 'list', flexColumnStyle, {
  padding: 12,
  maxHeight: 400,
  overflow: 'auto',
});

const upNavClass = namedClass(classPrefix, 'upNav', flexRowStyle, {
  padding: 12,
  borderBottom: '1px solid #999',
  cursor: 'pointer',
  $nest: {
    '&:focus': {
      $unique: true,
      color: 'orange',
    },
    '&:hover': {
      $unique: true,
      backgroundColor: '#eee',
    },
  },
});

type NavListViewProps = Readonly<{
  parent: ParentPage;
  onClose: () => void;
}>;

export const NavListView: React.FC<NavListViewProps> = (props) => {
  const [currentParent, setCurrentParent] = React.useState<ParentPage>(props.parent);
  const goUp = React.useCallback(() => {
    if (currentParent.parent) {
      setCurrentParent(currentParent.parent);
    }
  }, [currentParent, setCurrentParent]);
  const goDown = React.useCallback((parent: ParentPage) => {
    setCurrentParent(parent);
  }, [setCurrentParent]);
  return (
    <div className={rootClass}>
      {renderUpNav(currentParent, goUp)}
      {renderHeader(currentParent)}
      {renderList(currentParent, goDown, props.onClose)}
    </div>
  );
}
NavListView.displayName = 'NavListView';

function renderHeader(currentParent: ParentPage) {
  return (
    <div className={headerClass}>{currentParent.title}</div>
  );
}

function renderUpNav(currentParent: ParentPage, goUp: () => void) {
  const up = currentParent.parent;
  if (!up) {
    return null;
  }
  return (
    <div className={upNavClass} onClick={goUp}>{' ❮ '}{up.title}</div>
  );
}

function renderList(parent: ParentPage, goDown: (parent: ParentPage) => void, onClose: () => void) {
  const items = parent ? parent.childList : [];
  return (
    <div className={listClass}>
      {items.map((item, index) =>
        <NavListItem page={item} parentClicked={goDown} leafClicked={onClose} key={index} />)}
    </div>
  );
}

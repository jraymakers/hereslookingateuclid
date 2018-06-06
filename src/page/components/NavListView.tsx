import * as React from 'react';

import {
  flexColumnStyle,
  flexRowStyle,
  namedClass,
} from '../../style';

import {
  ParentPage,
} from '../types';

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

const footerClass = namedClass(classPrefix, 'footer', flexRowStyle, {
  padding: 12,
  borderTop: '1px solid #999',
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

type NavListViewProps = {
  readonly parent: ParentPage;
};

type NavListViewState = {
  readonly currentParent: ParentPage;
};

export class NavListView extends React.PureComponent<NavListViewProps, NavListViewState> {

  constructor(props: NavListViewProps) {
    super(props);
    this.state = {
      currentParent: this.props.parent,
    };
  }

  public render(): JSX.Element {
    return (
      <div className={rootClass}>
        {this.renderHeader()}
        {this.renderList()}
        {this.renderFooter()}
      </div>
    );
  }

  private renderHeader(): JSX.Element | null {
    const currentParent = this.state.currentParent;
    return (
      <div className={headerClass}>{currentParent.title}</div>
    );
  }

  private renderFooter(): JSX.Element | null {
    const currentParent = this.state.currentParent;
    const up = currentParent.parent;
    if (!up) {
      return null;
    }
    return (
      <div className={footerClass} onClick={this.goUp}>{' ❮ '}{up.title}</div>
    );
  }

  private readonly goUp = () => {
    if (this.state.currentParent.parent) {
      this.setState({
        currentParent: this.state.currentParent.parent,
      });
    }
  }

  private readonly goDown = (parent: ParentPage) => {
    this.setState({
      currentParent: parent,
    });
  }

  private renderList(): JSX.Element {
    const parent = this.state.currentParent;
    const items = parent ? parent.childList : [];
    return (
      <div className={listClass}>
        {items.map((item, index) => <NavListItem page={item} parentClicked={this.goDown} key={index} />)}
      </div>
    );
  }

}

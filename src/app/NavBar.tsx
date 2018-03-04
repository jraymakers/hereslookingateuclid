import * as React from 'react';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';

import { LinkInfo } from '../shared/types';

import { mainContentsUrl } from '../routes/Urls';

const classPrefix = 'NavBar';

const rootClass = style({
  $debugName: `${classPrefix}_root`,
  $unique: true,
  display: 'flex',
  flexDirection: 'row',
});

const leftClass = style({
  $debugName: `${classPrefix}_left`,
  $unique: true,
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
});

const centerClass = style({
  $debugName: `${classPrefix}_center`,
  $unique: true,
  flex: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const titleClass = style({
  $debugName: `${classPrefix}_title`,
  $unique: true,
  textAlign: 'center',
  fontSize: 24,
});

const titleLinkClass = style({
  $debugName: `${classPrefix}_titleLink`,
  $unique: true,
  textAlign: 'center',
  fontSize: 24,
  color: 'black',
  textDecoration: 'none',
  $nest: {
    '&:hover': {
      $unique: true,
      color: '#888',
    }
  }
});

const rightClass = style({
  $debugName: `${classPrefix}_right`,
  $unique: true,
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'stretch',
});

const buttonClass = style({
  $debugName: `${classPrefix}_button`,
  $unique: true,
  paddingLeft: 18,
  paddingRight: 18,
  border: '1px solid #ddd',
  color: 'black',
  display: 'flex',
  alignItems: 'center',
  outline: 'none',
  textDecoration: 'none',
  $nest: {
    '&:focus': {
      $unique: true,
      outline: '1px solid black',
    },
    '&:hover': {
      $unique: true,
      backgroundColor: '#eee',
    },
  }
});

const title = "Here's Looking at Euclid";

export type NavBarProps = {
  readonly prev: LinkInfo | null;
  readonly up: LinkInfo | null;
  readonly next: LinkInfo | null;
  readonly noTitleLink?: boolean;
};

export class NavBar extends React.PureComponent<NavBarProps> {

  public render(): JSX.Element {
    return (
      <div className={rootClass}>
        <div className={leftClass}>
          {this.renderLink(this.props.prev)}
        </div>
        <div className={centerClass}>
          {this.renderTitle()}
          {/* {this.renderLink(this.props.up)} */}
        </div>
        <div className={rightClass}>
          {this.renderLink(this.props.next)}
        </div>
      </div>
    );
  }

  private renderTitle(): JSX.Element {
    if (this.props.noTitleLink) {
      return <div className={titleClass}>{title}</div>
    } else {
      return <Link className={titleLinkClass} to={mainContentsUrl}>{title}</Link>
    }
  }

  private renderLink(link: LinkInfo | null): JSX.Element | null {
    if (link) {
      return <Link className={buttonClass} to={link.url}>{link.text}</Link>;
    } else {
      return null;
    }
  }

}

import * as React from 'react';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';

import { BookContentsPage, LinkInfo } from '../shared/types';
import { NavBar } from './NavBar';

const classPrefix = 'BookContentsPageView';

const rootClass = style({
  $debugName: `${classPrefix}_root`,
  $unique: true,
  display: 'flex',
  flexDirection: 'column',
  padding: 12,
});

const linkClass = style({
  $debugName: `${classPrefix}_link`,
  $unique: true,
  padding: 12,
});

type BookContentsPageViewProps = {
  readonly page: BookContentsPage;
};

export class BookContentsPageView extends React.PureComponent<BookContentsPageViewProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    return (
      <div className={rootClass}>
        <NavBar prev={page.prev} up={page.up} next={page.next}></NavBar>
        {page.sectionLinks.map(this.renderSectionLink)}
      </div>
    );
  }

  private readonly renderSectionLink = (sectionLink: LinkInfo): JSX.Element => {
    return <Link className={linkClass} to={sectionLink.url} key={sectionLink.url}>{sectionLink.contentsText}</Link>
  }

}

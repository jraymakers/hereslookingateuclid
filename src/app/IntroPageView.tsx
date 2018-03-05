import * as React from 'react';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';

import { IntroPage, Paragraph } from '../shared/types';

import { PageView } from './PageView';
import { ParagraphView } from './ParagraphView';

const classPrefix = 'IntroPageView';

const titleClass = style({
  $debugName: `${classPrefix}_title`,
  $unique: true,
  fontSize: 24,
  padding: 6,
  color: 'black',
  textDecoration: 'none',
  textAlign: 'center',
  $nest: {
    '&:hover': {
      $unique: true,
      color: '#888',
    }
  }
});

const contentClass = style({
  $debugName: `${classPrefix}_content`,
  $unique: true,
  maxWidth: 800,
  alignSelf: 'center',
});

export type IntroPageViewProps = {
  readonly page: IntroPage;
};

export class IntroPageView extends React.PureComponent<IntroPageViewProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    return (
      <PageView page={page}>
        {this.renderTitle()}
        <div className={contentClass}>
          {page.paragraphs.map((paragraph, index) => <ParagraphView paragraph={paragraph} key={index} />)}
        </div>
      </PageView>
    );
  }

  private renderTitle(): JSX.Element | null {
    const title = this.props.page.title;
    if (title) {
      return <Link className={titleClass} to={title.url} key={title.url}>{title.text}</Link>;
    } else {
      return null;
    }
  }

}

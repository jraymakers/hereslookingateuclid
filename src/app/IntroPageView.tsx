import * as React from 'react';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';

import { IntroPage, Paragraph } from '../shared/types';

import { PageView } from './PageView';

const classPrefix = 'IntroPageView';

const titleClass = style({
  $debugName: `${classPrefix}_title`,
  $unique: true,
  fontSize: 18,
  padding: 6,
});

const paragraphClass = style({
  $debugName: `${classPrefix}_paragraph`,
  $unique: true,
  padding: 6,
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
        {page.paragraphs.map(this.renderParagraph)}
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

  private readonly renderParagraph = (paragraph: Paragraph, paragraphIndex: number): JSX.Element => {
    return (
      <div className={paragraphClass} key={paragraphIndex}>
        {paragraph.map((runText, runIndex) => <span key={runIndex}>{runText}{' '}</span>)}
      </div>
    );
  }

}

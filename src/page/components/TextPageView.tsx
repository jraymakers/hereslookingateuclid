import * as React from 'react';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';

import { ParagraphView } from '../../paragraph';

import { BookTextPage, TextPage } from '../types/Page';

import { PageView } from './PageView';
import { PageHeaderView } from './PageHeaderView';

const classPrefix = 'TextPageView';

const contentClass = style({
  $debugName: `${classPrefix}_content`,
  $unique: true,
  maxWidth: 800,
  alignSelf: 'center',
});

export type TextPageViewProps = {
  readonly page: TextPage | BookTextPage;
};

export class TextPageView extends React.PureComponent<TextPageViewProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    return (
      <PageView page={page}>
        <PageHeaderView header={this.props.page.header} />
        <div className={contentClass}>
          {page.paragraphs.map((paragraph, index) => <ParagraphView paragraph={paragraph} key={index} />)}
        </div>
      </PageView>
    );
  }

}

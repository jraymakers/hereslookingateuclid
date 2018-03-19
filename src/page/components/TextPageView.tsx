import * as React from 'react';
import { Link } from 'react-router-dom';

import { ParagraphView } from '../../paragraph';
import { alignSelfCenterStyle, namedClass } from '../../style';

import { BookTextPage, TextPage } from '../types/Page';

import { PageHeaderView } from './PageHeaderView';
import { PageView } from './PageView';

const classPrefix = 'TextPageView';
const contentClass = namedClass(classPrefix, 'content',
  alignSelfCenterStyle,
  { maxWidth: 800 },
);

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

import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import { ParagraphView } from '../../paragraph';
import {
  alignSelfCenterStyle,
  marginTopLargeStyle,
  namedClass,
} from '../../style';

import { BookTextPage, TextPage } from '../types/Page';

import { PageHeaderView } from './PageHeaderView';
import { PageView } from './PageView';

const classPrefix = 'TextPageView';
const contentClass = namedClass(classPrefix, 'content',
  alignSelfCenterStyle,
  marginTopLargeStyle,
  { maxWidth: 800 },
  {
    $nest: {
      '&>*': {
        marginTop: 12,
      },
    },
  },
);

export type TextPageViewProps = RouteComponentProps<{}> & {
  readonly page: TextPage | BookTextPage;
};

class TextPageViewInternal extends React.PureComponent<TextPageViewProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    return (
      <PageView page={page} onKeyDown={this.onKeyDown}>
        <PageHeaderView header={this.props.page.header} />
        <div className={contentClass}>
          {page.paragraphs.map((paragraph, index) => <ParagraphView paragraph={paragraph} key={index} />)}
        </div>
      </PageView>
    );
  }

  private readonly onKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        this.goPrev();
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        this.goNext();
        break;
    }
  }

  private readonly goPrev = () => {
    const page = this.props.page;
    if (page.prev) {
      this.navigate(page.prev.url);
    }
  }

  private readonly goNext = () => {
    const page = this.props.page;
    if (page.next) {
      this.navigate(page.next.url);
    }
  }

  private navigate(pathname: string) {
    if (this.props.location.pathname !== pathname) {
      this.props.history.push(pathname);
    }
  }

}

export const TextPageView = withRouter(TextPageViewInternal);

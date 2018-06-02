import * as React from 'react';
// import { RouteComponentProps, withRouter } from 'react-router';
// import { Link } from 'react-router-dom';

// import { bookTitle } from '../../link';
import { ParagraphView } from '../../paragraph';
import {
  alignSelfCenterStyle,
  borderStyle,
  mediumSpace,
  namedClass,
} from '../../style';

import { TextPageItem } from '../types/PageItem';

// import { PageView } from './PageView';

const classPrefix = 'TextPageItemView';

const contentClass = namedClass(classPrefix, 'content',
  alignSelfCenterStyle,
  borderStyle,
  {
    marginTop: mediumSpace,
    maxWidth: 800,
    padding: 12,
    backgroundColor: 'white',
    $nest: {
      '&>*': {
        marginTop: mediumSpace,
      },
      '&>:first-child': {
        marginTop: 0,
      },
    },
  },
);

export type TextPageItemViewProps = {
  readonly pageItem: TextPageItem;
};

export class TextPageItemView extends React.PureComponent<TextPageItemViewProps> {

  public render(): JSX.Element {
    const paragraphs = this.props.pageItem.paragraphs;
    return (
      <div className={contentClass}>
        {paragraphs.map((paragraph, index) => <ParagraphView paragraph={paragraph} key={index} />)}
      </div>
    );
  }

  // private readonly onKeyDown = (event: KeyboardEvent) => {
  //   switch (event.key) {
  //     case 'ArrowLeft':
  //     case 'ArrowUp':
  //       this.goPrevPage();
  //       break;
  //     case 'ArrowRight':
  //     case 'ArrowDown':
  //       this.goNextPage();
  //       break;
  //   }
  // }

  // private readonly goPrevPage = () => {
  //   const page = this.props.page;
  //   if (page.prev) {
  //     this.navigate(page.prev.url);
  //   }
  // }

  // private readonly goNextPage = () => {
  //   const page = this.props.page;
  //   if (page.next) {
  //     this.navigate(page.next.url);
  //   }
  // }

  // private navigate(pathname: string) {
  //   if (this.props.location.pathname !== pathname) {
  //     this.props.history.push(pathname);
  //   }
  // }

}

// export const TextPageView = withRouter(TextPageViewInternal);

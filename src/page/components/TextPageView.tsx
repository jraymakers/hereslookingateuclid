import * as React from 'react';
// import { RouteComponentProps, withRouter } from 'react-router';
// import { Link } from 'react-router-dom';

// import { bookTitle } from '../../link';
// import { PageView, TextPage } from '..';
import { ParagraphView } from '../../paragraph';
import {
  alignSelfCenterStyle,
  borderStyle,
  mediumSpace,
  namedClass,
} from '../../style';

import { TextPage } from '../types';

import { PageView } from './PageView';

// import {
//   alignSelfCenterStyle,
//   borderStyle,
//   mediumSpace,
//   namedClass,
// } from '../../style';

// import { TextPage } from '../types/Page';

// import { PageView } from './PageView';

// const classPrefix = 'TextPageView';

// const contentClass = namedClass(classPrefix, 'content',
//   alignSelfCenterStyle,
//   borderStyle,
//   {
//     marginTop: mediumSpace,
//     maxWidth: 800,
//     padding: 12,
//     backgroundColor: 'white',
//     $nest: {
//       '&>*': {
//         marginTop: mediumSpace,
//       },
//       '&>:first-child': {
//         marginTop: 0,
//       },
//     },
//   },
// );

// export type TextPageViewProps = RouteComponentProps<{}> & {
//   readonly page: TextPage;
// };

// class TextPageViewInternal extends React.PureComponent<TextPageViewProps> {

//   public render(): JSX.Element {
//     const page = this.props.page;
//     return (
//       <PageView page={page} onKeyDown={this.onKeyDown}>
//         <div className={contentClass}>
//           {page.paragraphs.map((paragraph, index) => <ParagraphView paragraph={paragraph} key={index} />)}
//         </div>
//       </PageView>
//     );
//   }

//   private readonly onKeyDown = (event: KeyboardEvent) => {
//     switch (event.key) {
//       case 'ArrowLeft':
//       case 'ArrowUp':
//         this.goPrevPage();
//         break;
//       case 'ArrowRight':
//       case 'ArrowDown':
//         this.goNextPage();
//         break;
//     }
//   }

//   private readonly goPrevPage = () => {
//     const page = this.props.page;
//     if (page.prev) {
//       this.navigate(page.prev.url);
//     }
//   }

//   private readonly goNextPage = () => {
//     const page = this.props.page;
//     if (page.next) {
//       this.navigate(page.next.url);
//     }
//   }

//   private navigate(pathname: string) {
//     if (this.props.location.pathname !== pathname) {
//       this.props.history.push(pathname);
//     }
//   }

// }

// export const TextPageView = withRouter(TextPageViewInternal);

const classPrefix = 'TextPageView';

const textPaneClass = namedClass(classPrefix, 'textPane',
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

export type TextPageViewProps = {
  readonly page: TextPage;
};

export class TextPageView extends React.PureComponent<TextPageViewProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    return (
      <PageView page={page}>
        <div className={textPaneClass}>
          {page.paragraphs.map((paragraph, index) => <ParagraphView paragraph={paragraph} key={index} />)}
        </div>
      </PageView>
    );
  }

}

import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { ParagraphView } from '../../paragraph';
import {
  alignSelfCenterStyle,
  borderStyle,
  mediumSpace,
  namedClass,
} from '../../style';

import { TextPage } from '../types';

import { PageView } from './PageView';

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

export type TextPageViewProps = RouteComponentProps<{}> & {
  readonly page: TextPage;
};

class TextPageViewInternal extends React.PureComponent<TextPageViewProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    return (
      <PageView page={page} navigate={this.navigate}>
        <div className={textPaneClass}>
          {page.paragraphs.map((paragraph, index) => <ParagraphView paragraph={paragraph} key={index} />)}
        </div>
      </PageView>
    );
  }

  private readonly navigate = (path: string) => {
    if (this.props.location.pathname !== path) {
      this.props.history.push(path);
    }
  }

}

export const TextPageView = withRouter(TextPageViewInternal);

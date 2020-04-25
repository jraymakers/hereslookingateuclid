import * as React from 'react';
import { useHistory, useLocation } from 'react-router';

import { ParagraphView } from '../../paragraph';
import { alignSelfCenterStyle, borderStyle, cssClass, mediumSpace } from '../../style';
import { TextPage } from '../types';
import { PageView } from './PageView';

const classPrefix = 'TextPageView';

const textPaneClass = cssClass(classPrefix, 'textPane',
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

type TextPageViewProps = Readonly<{
  page: TextPage;
}>;

export const TextPageView: React.FC<TextPageViewProps> = (props) => {
  const page = props.page;
  const history = useHistory();
  const location = useLocation();
  const navigate = React.useCallback((path: string) => {
    if (location.pathname !== path) {
      history.push(path);
    }
  }, [history, location]);
  return (
    <PageView page={page} navigate={navigate}>
      <div className={textPaneClass}>
        {page.paragraphs.map((paragraph, index) => <ParagraphView paragraph={paragraph} key={index} />)}
      </div>
    </PageView>
  );
}

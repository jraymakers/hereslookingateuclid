import * as React from 'react';

import { Sentence } from '../types/Paragraph';
import { RunView } from './RunView';

type SentenceViewProps = Readonly<{
  sentence: Sentence;
}>;

export const SentenceView: React.FC<SentenceViewProps> = (props) => {
  return (
    <span>
      {props.sentence.map((run, index) => <RunView run={run} key={index} />)}
      {' '}
    </span>
  );
}
SentenceView.displayName = 'SentenceView';

import * as React from 'react';

import { Sentence } from '../types/Paragraph';

import { RunView } from './RunView';

export type SentenceViewProps = {
  readonly sentence: Sentence;
};

export class SentenceView extends React.PureComponent<SentenceViewProps> {

  public render(): JSX.Element {
    return (
      <span>
        {this.props.sentence.map((run, index) => <RunView run={run} key={index} />)}
        {' '}
      </span>
    );
  }

}

import * as React from 'react';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';

import {
  Paragraph,
  Run,
  Sentence,
} from '../types/Paragraph';

const classPrefix = 'Paragraph';

const paragraphClass = style({
  $debugName: `${classPrefix}_root`,
  $unique: true,
  padding: 6,
});

export type ParagraphViewProps = {
  readonly paragraph: Paragraph;
};

export class ParagraphView extends React.PureComponent<ParagraphViewProps> {

  public render(): JSX.Element {
    return (
      <div className={paragraphClass}>
        {this.props.paragraph.map((sentence, index) => <SentenceView sentence={sentence} key={index} />)}
      </div>
    );
  }

}

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

export type RunViewProps = {
  readonly run: Run;
};

export class RunView extends React.PureComponent<RunViewProps> {

  public render(): JSX.Element | null {
    const run = this.props.run;
    if (typeof run === 'string') {
      return <span>{run}</span>;
    } else if (run.className) {
      return <span className={run.className}>{run.text}</span>
    } else {
      console.warn(`Unrecognized run: ${run}`);
      return null;
    }
  }

}
import * as React from 'react';

import { Paragraph } from '../types/Paragraph';
import { SentenceView } from './SentenceView';

export type ParagraphViewProps = {
  readonly paragraph: Paragraph;
};

export class ParagraphView extends React.PureComponent<ParagraphViewProps> {

  public render(): JSX.Element {
    return (
      <div>
        {this.props.paragraph.map((sentence, index) => <SentenceView sentence={sentence} key={index} />)}
      </div>
    );
  }

}

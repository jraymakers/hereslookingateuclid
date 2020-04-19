import * as React from 'react';

import { Paragraph } from '../types/Paragraph';
import { SentenceView } from './SentenceView';

type ParagraphViewProps = Readonly<{
  paragraph: Paragraph;
}>;

export const ParagraphView: React.FC<ParagraphViewProps> = (props) => {
  return (
    <div>
      {props.paragraph.map((sentence, index) => <SentenceView sentence={sentence} key={index} />)}
    </div>
  );
}
ParagraphView.displayName = 'ParagraphView';

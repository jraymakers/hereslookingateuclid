import * as React from 'react';

import {
  Paragraph,
  ParagraphView,
} from '../../paragraph';
import {
  flexNoneStyle,
  flexRowStyle,
  namedClass,
} from '../../style';

import {
  Step,
} from '../types/Step';

const classPrefix = 'StepView';

const rootClass = namedClass(classPrefix, 'root', flexRowStyle, {
  alignItems: 'start',
  paddingTop: 6,
  paddingBottom: 6,
  $nest: {
    '&:hover': {
      $unique: true,
      outline: '1px solid #888'
    }
  }
});

const numberClass = namedClass(classPrefix, 'number', flexNoneStyle, {
  width: 30,
  textAlign: 'right',
});

const textClass = namedClass(classPrefix, 'text', {
  paddingLeft: 12,
  paddingRight: 12,
});

export type StepViewProps = {
  readonly stepIndex: number;
  readonly stepName: string;
  readonly text: Paragraph;
  readonly faded?: boolean;
  readonly goToStep: (stepNum: number) => void;
};

export class StepView extends React.PureComponent<StepViewProps> {

  public render(): JSX.Element {
    const stepName = this.props.stepName;
    return (
      <div
        className={rootClass}
        style={{ opacity: this.props.faded ? 0.2 : 1}}
        onClick={this.onClick}
      >
        <div className={numberClass}>{stepName}.</div>
        <div className={textClass}><ParagraphView paragraph={this.props.text} /></div>
      </div>
    );
  }

  private readonly onClick = () => {
    this.props.goToStep(this.props.stepIndex);
  }

}

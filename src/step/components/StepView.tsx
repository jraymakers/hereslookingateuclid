import * as React from 'react';

import {
  Paragraph,
  ParagraphView,
} from '../../paragraph';
import {
  classes,
  flexNoneStyle,
  flexRowStyle,
  namedClass,
} from '../../style';

import {
  Step,
} from '../types/Step';

const classPrefix = 'StepView';

const rootClass = namedClass(classPrefix, 'root', flexRowStyle, {
  paddingTop: 6,
  paddingBottom: 6,
  cursor: 'pointer',
  borderLeft: '3px solid transparent',
  $nest: {
    '&:hover': {
      $unique: true,
      borderLeft: '3px solid #666',
    },
  },
});

const fadedClass = namedClass(classPrefix, 'faded', {
  opacity: 0.5,
});

const highlightedClass = namedClass(classPrefix, 'highlighted', {
  borderLeft: '3px solid orange',
  $nest: {
    '&:hover': {
      $unique: true,
      borderLeft: '3px solid orange',
    },
  },
});

const numberClass = namedClass(classPrefix, 'number', flexNoneStyle, {
  width: 36,
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
  readonly highlighted?: boolean;
  readonly goToStep: (stepNum: number) => void;
};

export class StepView extends React.PureComponent<StepViewProps> {

  public render(): JSX.Element {
    const stepName = this.props.stepName;
    const rootClasses = classes(
      rootClass,
      this.props.faded && fadedClass,
      this.props.highlighted && highlightedClass,
    );
    return (
      <div
        className={rootClasses}
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

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
  $nest: {
    '&:hover': {
      $unique: true,
      outline: '1px solid #888',
    },
  },
});

const fadedClass = namedClass(classPrefix, 'faded', {
  opacity: 0.2,
});

const highlightedClass = namedClass(classPrefix, 'highlighted', {
  outline: '1px solid orange',
  $nest: {
    '&:hover': {
      $unique: true,
      outline: '1px solid orange',
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

import * as React from 'react';
import { style } from 'typestyle';

import {
  StepList,
} from '../types/Step';

import { StepView } from './StepView';

const classPrefix = 'StepsView';

const rootClass = style({
  $debugName: `${classPrefix}_root`,
  $unique: true,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  marginRight: 12,
});

export type StepsViewProps = {
  readonly steps: StepList;
  readonly currentStepNum?: number;
  readonly firstStepNum?: number;
  readonly goToStep: (stepNum: number) => void;
};

export class StepsView extends React.PureComponent<StepsViewProps> {

  public render(): JSX.Element {
    const firstStepNum = this.props.firstStepNum || 1;
    const currentStepNum = this.props.currentStepNum || 0;
    const goToStep = this.props.goToStep;
    const stepElements = this.props.steps.map((step, index) => {
      const stepNum = firstStepNum + index;
      return (
        <StepView
          key={stepNum}
          stepNum={stepNum}
          text={step.text}
          faded={stepNum > currentStepNum}
          goToStep={goToStep}
        />
      );
    });
    return (
      <div className={rootClass}>
        {stepElements}
      </div>
    );
  }

}

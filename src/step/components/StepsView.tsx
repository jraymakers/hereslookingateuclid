import * as React from 'react';

import {
  flexColumnStyle,
  flexGrowStyle,
  namedClass,
} from '../../style';

import {
  StepList,
} from '../types/Step';

import { StepView } from './StepView';

const classPrefix = 'StepsView';

const rootClass = namedClass(classPrefix, 'root',
  flexColumnStyle,
  flexGrowStyle,
  { marginRight: 12 },
);

export type StepsViewProps = {
  readonly steps: StepList;
  readonly currentStepIndex: number;
  readonly goToStep: (stepIndex: number) => void;
};

export class StepsView extends React.PureComponent<StepsViewProps> {

  public render(): JSX.Element {
    const currentStepIndex = this.props.currentStepIndex;
    const goToStep = this.props.goToStep;
    const stepElements = this.props.steps.map((step, index) => {
      return (
        <StepView
          key={step.name}
          stepIndex={index}
          stepName={step.name}
          text={step.text}
          faded={index > currentStepIndex}
          highlighted={index === currentStepIndex}
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

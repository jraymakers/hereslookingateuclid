import * as React from 'react';

import {
  borderStyle,
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
  borderStyle,
  flexColumnStyle,
  flexGrowStyle,
  {
    backgroundColor: 'white',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    marginRight: 12,
  },
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

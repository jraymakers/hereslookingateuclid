import * as React from 'react';

import { borderStyle, flexColumnStyle, flexGrowStyle, namedClass } from '../../style';
import { StepList } from '../types/Step';
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
    paddingLeft: 18,
    paddingRight: 18,
    marginRight: 12,
  },
);

type StepsViewProps = Readonly<{
  steps: StepList;
  currentStepIndex: number;
  makeStepUrl: (stepName: string) => string;
}>;

export const StepsView: React.FC<StepsViewProps> = (props) => {
  const currentStepIndex = props.currentStepIndex;
  const stepElements = props.steps.map((step, index) => {
    return (
      <StepView
        key={step.name}
        stepIndex={index}
        stepName={step.name}
        text={step.text}
        link={step.link}
        links={step.links}
        faded={index > currentStepIndex}
        highlighted={index === currentStepIndex}
        makeStepUrl={props.makeStepUrl}
      />
    );
  });
  return (
    <div className={rootClass}>
      {stepElements}
    </div>
  );
}
StepsView.displayName = 'StepsView';

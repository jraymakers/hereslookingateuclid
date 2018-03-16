import * as React from 'react';
import { style } from 'typestyle';

import {
  StepList,
} from '../types/Proposition';

const classPrefix = 'PropositionStepsView';

const rootClass = style({
  $debugName: `${classPrefix}_root`,
  $unique: true,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  marginRight: 12,
});

const stepClass = style({
  $debugName: `${classPrefix}_step`,
  $unique: true,
  display: 'flex',
  flexDirection: 'row',
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

const stepNumberClass = style({
  $debugName: `${classPrefix}_stepNumber`,
  $unique: true,
  width: 30,
  textAlign: 'right',
  flex: 'none',
});

const stepTextClass = style({
  $debugName: `${classPrefix}_stepText`,
  $unique: true,
  paddingLeft: 12,
  paddingRight: 12,
});

export type PropositionStepsViewProps = {
  readonly steps: StepList;
  readonly stepNum: number;
  readonly goToStep: (stepNum: number) => void;
};

export class PropositionStepsView extends React.PureComponent<PropositionStepsViewProps> {

  public render(): JSX.Element {
    const stepNum = this.props.stepNum;
    const stepElements = this.props.steps.map((step, index) =>
      <div
        className={stepClass}
        key={index+1}
        style={{ opacity: stepNum >= index+1 ? 1 : 0.2}}
        onClick={() => this.props.goToStep(index+1)}
      >
        <div className={stepNumberClass}>{index+1}.</div>
        <div className={stepTextClass}>{step.text}</div>
      </div>
    );
    return (
      <div className={rootClass}>
        {stepElements}
      </div>
    );
  }

}

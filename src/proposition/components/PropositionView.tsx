import * as React from 'react';
import { style } from 'typestyle';

import {
  DiagramView,
} from '../../diagram';
import {
  StepControlsView,
  StepsView,
} from '../../step';

import {
  Proposition,
} from '../types/Proposition';

import {
  getDiagramPartStates,
} from '../utils/PropositionUtils';

const classPrefix = 'PropositionView';

const rootClass = style({
  $debugName: `${classPrefix}_root`,
  $unique: true,
  display: 'flex',
  flexDirection: 'column',
});

const headerClass = style({
  $debugName: `${classPrefix}_header`,
  $unique: true,
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: 12,
  paddingRight: 12,
  paddingTop: 6,
  paddingBottom: 6,
});

const titleAndSummaryClass = style({
  $debugName: `${classPrefix}_titleAndSummary`,
  $unique: true,
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

const titleClass = style({
  $debugName: `${classPrefix}_titleAndSummary`,
  $unique: true,
  fontSize: 24,
});

const summaryClass = style({
  $debugName: `${classPrefix}_titleAndSummary`,
  $unique: true,
  marginTop: 6,
});

const stepsAndDiagramClass = style({
  $debugName: `${classPrefix}_stepsAndDiagram`,
  $unique: true,
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'start',
  padding: 12,
});

export type PropositionViewProps = {
  readonly proposition: Proposition;
  readonly currentStepNum: number;
  readonly goToStep: (stepNum: number) => void;
};

export class PropositionView extends React.PureComponent<PropositionViewProps> {

  public render(): JSX.Element {
    const proposition = this.props.proposition;
    const title = `Proposition ${proposition.propName}`;
    const steps = proposition.steps;
    const currentStepNum = this.props.currentStepNum;
    const diagramPartStates = getDiagramPartStates(steps, currentStepNum);
    const goToStep = this.props.goToStep;
    return (
      <div className={rootClass}>
        <div className={headerClass}>
          <div className={titleAndSummaryClass}>
            <div className={titleClass}>{title}</div>
            <div className={summaryClass}>{proposition.summary}</div>
          </div>
          <StepControlsView
            currentStepNum={currentStepNum}
            minStepNum={0}
            maxStepNum={steps.length}
            goToStep={goToStep}
          />
        </div>
        <div className={stepsAndDiagramClass}>
          <StepsView
            steps={steps}
            currentStepNum={currentStepNum}
            goToStep={goToStep}
          />
          <DiagramView
            diagram={proposition.diagram}
            diagramPartStates={diagramPartStates}
          />
        </div>
      </div>
    );
  }

}

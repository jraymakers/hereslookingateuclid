import * as React from 'react';
import { style } from 'typestyle';

import {
  Diagram,
  DiagramView,
} from '../../diagram';
import {
  Paragraph,
  ParagraphView,
} from '../../paragraph';
import {
  StepControlsView,
  StepList,
  StepsView,
} from '../../step';

import {
  getDiagramPartStates,
} from '../utils/StepsAndDiagramUtils';

const classPrefix = 'StepsAndDiagramView';

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
  $debugName: `${classPrefix}_title`,
  $unique: true,
  fontSize: 24,
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

export type StepsAndDiagramViewProps = {
  readonly title: string;
  readonly summary: Paragraph;
  readonly steps: StepList;
  readonly diagram: Diagram;
  readonly currentStepIndex: number;
  readonly goToStep: (stepNum: number) => void;
};

export class StepsAndDiagramView extends React.PureComponent<StepsAndDiagramViewProps> {

  public render(): JSX.Element {
    const title = this.props.title;
    const summary = this.props.summary;
    const steps = this.props.steps;
    const diagram = this.props.diagram;
    const currentStepIndex = this.props.currentStepIndex;
    const diagramPartStates = getDiagramPartStates(steps, currentStepIndex);
    const goToStep = this.props.goToStep;
    return (
      <div className={rootClass}>
        <div className={headerClass}>
          <div className={titleAndSummaryClass}>
            <div className={titleClass}>{title}</div>
            <ParagraphView paragraph={summary} />
          </div>
          <StepControlsView
            currentStepIndex={currentStepIndex}
            minStepIndex={-1}
            maxStepIndex={steps.length - 1}
            goToStep={goToStep}
          />
        </div>
        <div className={stepsAndDiagramClass}>
          <StepsView
            steps={steps}
            currentStepIndex={currentStepIndex}
            goToStep={goToStep}
          />
          <DiagramView
            diagram={diagram}
            diagramPartStates={diagramPartStates}
          />
        </div>
      </div>
    );
  }

}

import * as React from 'react';

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
  flexColumnStyle,
  flexGrowStyle,
  flexRowStyle,
  mediumSpace,
  namedClass,
  textXLargeStyle,
} from '../../style';

import {
  getDiagramPartStates,
} from '../utils/StepsAndDiagramUtils';

const classPrefix = 'StepsAndDiagramView';

const rootClass = namedClass(classPrefix, 'root', flexColumnStyle,
  { padding: 12 },
);

const titleAndSummaryClass = namedClass(classPrefix, 'titleAndSummary',
  flexColumnStyle,
  flexGrowStyle,
  {
    padding: '6px 12px',
    backgroundColor: 'white',
    border: '1px solid #aaa',
  },
);

const titleClass = namedClass(classPrefix, 'title', textXLargeStyle);

const stepsAndDiagramClass = namedClass(classPrefix, 'stepsAndDiagram',
  flexGrowStyle,
  flexRowStyle,
  { marginTop: 12 },
);

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
        <div className={titleAndSummaryClass}>
          <div className={titleClass}>{title}</div>
          <ParagraphView paragraph={summary} />
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

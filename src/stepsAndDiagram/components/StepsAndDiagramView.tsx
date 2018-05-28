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
  flexRowStyle,
  flexGrowStyle,
  {
    backgroundColor: 'white',
    border: '1px solid #999',
  },
);

const titleAndSummaryTextClass = namedClass(classPrefix, 'titleAndSummaryText',
  flexColumnStyle,
  flexGrowStyle,
  {
    padding: '12px 18px',
  },
);

const stepControlsClass = namedClass(classPrefix, 'stepControls',
  flexColumnStyle,
);

const stepButtonClass = namedClass(classPrefix, 'stepButton',
  {
    flex: '1',
    paddingLeft: 12,
    paddingRight: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333',
    textDecoration: 'none',
    outline: 'none',
    userSelect: 'none',
    $nest: {
      '&:focus': {
        $unique: true,
        color: 'orange',
      },
      '&:hover': {
        $unique: true,
        backgroundColor: '#eee',
      },
    },
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
  readonly goPrevStep: () => void;
  readonly goNextStep: () => void;
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
          <div className={titleAndSummaryTextClass}>
            <div className={titleClass}>{title}</div>
            <ParagraphView paragraph={summary} />
          </div>
          <div className={stepControlsClass}>
            <div className={stepButtonClass} onClick={this.props.goPrevStep}>{'▲'}</div>
            <div className={stepButtonClass} onClick={this.props.goNextStep}>{'▼'}</div>
          </div>
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

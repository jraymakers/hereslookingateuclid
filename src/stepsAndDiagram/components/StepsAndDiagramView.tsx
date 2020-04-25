import * as React from 'react';
import { Link } from 'react-router-dom';

import { Diagram, DiagramView } from '../../diagram';
import { Paragraph, ParagraphView } from '../../paragraph';
import { StepList, StepsView } from '../../step';
import {
  cssClass,
  flexColumnStyle,
  flexGrowStyle,
  flexRowStyle,
  textXLargeStyle,
} from '../../style';
import { getDiagramPartStates } from '../utils/StepsAndDiagramUtils';

const classPrefix = 'StepsAndDiagramView';

const rootClass = cssClass(classPrefix, 'root', flexColumnStyle,
  { padding: 12 },
);

const titleAndSummaryClass = cssClass(classPrefix, 'titleAndSummary',
  flexRowStyle,
  flexGrowStyle,
  {
    backgroundColor: 'white',
    border: '1px solid #999',
  },
);

const titleAndSummaryTextClass = cssClass(classPrefix, 'titleAndSummaryText',
  flexColumnStyle,
  flexGrowStyle,
  {
    padding: '12px 18px',
  },
);

const stepControlsClass = cssClass(classPrefix, 'stepControls',
  flexColumnStyle,
);

const stepButtonClass = cssClass(classPrefix, 'stepButton',
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

const titleClass = cssClass(classPrefix, 'title', textXLargeStyle);

const stepsAndDiagramClass = cssClass(classPrefix, 'stepsAndDiagram',
  flexGrowStyle,
  flexRowStyle,
  { marginTop: 12 },
);

type StepsAndDiagramViewProps = Readonly<{
  title: string;
  summary: Paragraph;
  steps: StepList;
  diagram: Diagram;
  currentStepIndex: number;
  makeStepUrl: (stepName: string) => string;
  prevUrl: string | null;
  nextUrl: string | null;
}>;

export const StepsAndDiagramView: React.FC<StepsAndDiagramViewProps> = (props) => {
  const title = props.title;
  const summary = props.summary;
  const steps = props.steps;
  const diagram = props.diagram;
  const currentStepIndex = props.currentStepIndex;
  const diagramPartStates = getDiagramPartStates(steps, currentStepIndex);
  return (
    <div className={rootClass}>
      <div className={titleAndSummaryClass}>
        <div className={titleAndSummaryTextClass}>
          <div className={titleClass}>{title}</div>
          <ParagraphView paragraph={summary} />
        </div>
        <div className={stepControlsClass}>
          {props.prevUrl
            ? <Link className={stepButtonClass} to={props.prevUrl}>{'▲'}</Link>
            : <div className={stepButtonClass} />
          }
          {props.nextUrl
            ? <Link className={stepButtonClass} to={props.nextUrl}>{'▼'}</Link>
            : <div className={stepButtonClass} />
          }
        </div>
      </div>
      <div className={stepsAndDiagramClass}>
        <StepsView
          steps={steps}
          currentStepIndex={currentStepIndex}
          makeStepUrl={props.makeStepUrl}
        />
        <DiagramView
          diagram={diagram}
          diagramPartStates={diagramPartStates}
        />
      </div>
    </div>
  );
}
StepsAndDiagramView.displayName = 'StepsAndDiagramView';

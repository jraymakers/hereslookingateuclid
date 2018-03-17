import * as React from 'react';
import { style } from 'typestyle';

import {
  DiagramView
} from '../../diagram';

import {
  Proposition,
} from '../types/Proposition';

import {
  getDiagramPartStates,
} from '../utils/PropositionUtils';

import {
  PropositionStepsView,
} from './PropositionStepsView';

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

const buttonsClass = style({
  $debugName: `${classPrefix}_buttons`,
  $unique: true,
  display: 'flex',
  flexDirection: 'row',
});

const verticalBarClass = style({
  $debugName: `${classPrefix}_verticalBar`,
  $unique: true,
  width: 4,
  height: 24,
  backgroundColor: 'black',
});

const arrowLeftClass = style({
  $debugName: `${classPrefix}_arrowLeft`,
  $unique: true,
  width: 0,
  height: 0,
  borderTop: '12px solid transparent',
  borderBottom: '12px solid transparent',
  borderRightWidth: 12,
  borderRightStyle: 'solid',
  borderRightColor: 'black',
});

const arrowRightClass = style({
  $debugName: `${classPrefix}_arrowRight`,
  $unique: true,
  width: 0,
  height: 0,
  borderTop: '12px solid transparent',
  borderBottom: '12px solid transparent',
  borderLeftWidth: 12,
  borderLeftStyle: 'solid',
  borderLeftColor: 'black',
});

const buttonClass = style({
  $debugName: `${classPrefix}_button`,
  $unique: true,
  marginLeft: 6,
  paddingLeft: 12,
  paddingRight: 12,
  display: 'flex',
  flexDirection: 'row',
  border: '1px solid #ddd',
  outline: 'none',
  $nest: {
    '&:focus': {
      $unique: true,
      outline: '1px solid black',
    },
    '&:hover': {
      $unique: true,
      backgroundColor: '#eee',
    },
    '&:disabled': {
      $unique: true,
      backgroundColor: 'transparent',
      border: '1px solid #888',
      opacity: 0.3,
    },
  }
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
  readonly stepNum: number;
  readonly goToStep: (stepNum: number) => void;
};

export class PropositionView extends React.PureComponent<PropositionViewProps> {

  public render(): JSX.Element {
    const stepNum = this.props.stepNum;
    const maxStepNum = this.props.proposition.steps.length;
    const proposition = this.props.proposition;
    const title = `Proposition ${this.props.proposition.propName}`;
    const diagramPartStates = getDiagramPartStates(this.props.proposition.steps, this.props.stepNum);
    return (
      <div className={rootClass}>
        <div className={headerClass}>
          <div className={titleAndSummaryClass}>
            <div className={titleClass}>{title}</div>
            <div className={summaryClass}>{proposition.summary}</div>
          </div>
          <div className={buttonsClass}>
            <button
              className={buttonClass}
              disabled={stepNum === 0}
              onClick={this.start}
            >
              <div className={verticalBarClass} />
              <div className={arrowLeftClass} />
            </button>
            <button
              className={buttonClass}
              disabled={stepNum === 0}
              onClick={this.back}
            >
              <div className={arrowLeftClass} />
            </button>
            <button
              className={buttonClass}
              disabled={stepNum === maxStepNum}
              onClick={this.next}
            >
              <div className={arrowRightClass} />
            </button>
            <button
              className={buttonClass}
              disabled={stepNum === maxStepNum}
              onClick={this.end}
            >
              <div className={arrowRightClass} />
              <div className={verticalBarClass} />
            </button>
          </div>
        </div>
        <div className={stepsAndDiagramClass}>
          <PropositionStepsView
            steps={this.props.proposition.steps}
            stepNum={this.props.stepNum}
            goToStep={this.props.goToStep}
          />
          <DiagramView
            diagram={this.props.proposition.diagram}
            diagramPartStates={diagramPartStates}
          />
        </div>
      </div>
    );
  }

  private readonly start = () => {
    this.props.goToStep(0);
  };

  private readonly back = () => {
    this.props.goToStep(Math.max(this.props.stepNum - 1, 0));
  };

  private readonly next = () => {
    this.props.goToStep(Math.min(this.props.stepNum + 1, this.props.proposition.steps.length));
  };

  private readonly end = () => {
    this.props.goToStep(this.props.proposition.steps.length);
  };

}

import * as React from 'react';
import { style } from 'typestyle';

import {
  CircleDiagramPart,
  CircleSvg,
  DiagramPart,
  DiagramPartMap,
  LabelDir,
  LineDiagramPart,
  LineSvg,
  PointDiagramPart,
  PointSvg,
} from '../../diagram';

import {
  Proposition,
  Step,
} from '../types';

type DiagramPartState = 'hidden' | 'visible' | 'highlighted';

type DiagramPartStateMap = {
  [key: string]: DiagramPartState;
}

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

const stepsClass = style({
  $debugName: `${classPrefix}_steps`,
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

const diagramClass = style({
  $debugName: `${classPrefix}_diagram`,
  $unique: true,
  borderColor: '#aaa',
  borderStyle: 'solid',
  borderWidth: 1,
});

export type PropositionViewProps = {
  readonly bookName: string,
  readonly proposition: Proposition;
  readonly stepNum: number;
  readonly goToStep: (stepNum: number) => void;
};

export class PropositionView extends React.PureComponent<PropositionViewProps> {

  private nextButton: HTMLButtonElement | undefined;
  private backButton: HTMLButtonElement | undefined;

  public componentDidUpdate() {
    if (this.nextButton && this.props.stepNum === 0) {
      this.nextButton.focus();
    }
    if (this.backButton && this.props.stepNum === this.props.proposition.steps.length) {
      this.backButton.focus();
    }
  }

  public render(): JSX.Element {
    const stepNum = this.props.stepNum;
    const maxStepNum = this.props.proposition.steps.length;
    const proposition = this.props.proposition;
    const title = `Book ${this.props.bookName}: Proposition ${this.props.proposition.propName}`;
    return (
      <div className={rootClass} onKeyDown={this.onKeyDown}>
        <div className={headerClass}>
          <div className={titleAndSummaryClass}>
            <div className={titleClass}>{title}</div>
            <div className={summaryClass}>{proposition.summary}</div>
          </div>
          <div className={buttonsClass}>
            <button
              tabIndex={3}
              className={buttonClass}
              disabled={stepNum === 0}
              onClick={this.start}
            >
              <div className={verticalBarClass} />
              <div className={arrowLeftClass} />
            </button>
            <button
              tabIndex={4}
              className={buttonClass}
              disabled={stepNum === 0}
              onClick={this.back}
              ref={this.setBackButton}
            >
              <div className={arrowLeftClass} />
            </button>
            <button
              tabIndex={1}
              className={buttonClass}
              disabled={stepNum === maxStepNum}
              onClick={this.next}
              autoFocus={true}
              ref={this.setNextButton}
            >
              <div className={arrowRightClass} />
            </button>
            <button
              tabIndex={2}
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
          {this.renderSteps()}
          {this.renderDiagram()}
        </div>
      </div>
    );
  }

  private readonly onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    switch (event.which) {
      case 39: // right arrow
        this.next();
        break;
      case 37: // left arrow
        this.back();
        break;
    }
  }

  private readonly setNextButton = (button: HTMLButtonElement) => {
    this.nextButton = button;
  }

  private readonly setBackButton = (button: HTMLButtonElement) => {
    this.backButton = button;
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

  private renderSteps(): JSX.Element {
    const stepNum = this.props.stepNum;
    const stepElements = this.props.proposition.steps.map((step, index) =>
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
      <div className={stepsClass}>
        {stepElements}
      </div>
    );
  }

  private renderDiagram(): JSX.Element {
    const diagram = this.props.proposition.diagram;
    const states = this.getDiagramPartStates();
    const diagramElements: JSX.Element[] = [];
    const parts = diagram.parts;
    for (const key in parts) {
      const part = parts[key];
      const state = states[key];
      if (state === 'visible') {
        const element = this.renderDiagramPart(key, part, state);
        if (element) {
          diagramElements.push(element);
        }
      }
    }
    for (const key in parts) {
      const part = parts[key];
      const state = states[key];
      if (state === 'highlighted') {
        const element = this.renderDiagramPart(key, part, state);
        if (element) {
          diagramElements.push(element);
        }
      }
    }
    return (
      <div className={diagramClass}>
        <svg
          width={diagram.width}
          height={diagram.height}
          viewBox={`0 0 ${diagram.width} ${diagram.height}`}
        >
          {diagramElements}
        </svg>
      </div>
    );
  }

  private getDiagramPartStates() {
    const steps = this.props.proposition.steps;
    const stepNum = this.props.stepNum;
    const stateMap: DiagramPartStateMap = {};
    if (stepNum >= 1) {
      let stepIndex = 0;
      while (stepIndex < stepNum - 1) {
        const step = steps[stepIndex];
        for (const key of step.highlight) {
          stateMap[key] = 'visible';
        }
        stepIndex++;
      }
      const step = steps[stepIndex];
      for (const key of step.highlight) {
        stateMap[key] = 'highlighted';
      }
    }
    return stateMap;
  }

  private renderDiagramPart(key: string, part: DiagramPart, state: DiagramPartState): JSX.Element | null {
    switch (part.type) {
      case 'point':
        return this.renderPoint(key, part, state);
      case 'line':
        return this.renderLine(key, part, state);
      case 'circle':
        return this.renderCircle(key, part, state);
      default:
        return null;
    }
  }

  private renderPoint(key: string, point: PointDiagramPart, state: DiagramPartState): JSX.Element {
    return <PointSvg
      key={key}
      x={point.x}
      y={point.y}
      label={key}
      labelX={point.labelX}
      labelY={point.labelY}
      highlighted={state === 'highlighted'}
    />;
  }

  private renderLine(key: string, line: LineDiagramPart, state: DiagramPartState): JSX.Element | null {
    const parts = this.props.proposition.diagram.parts;
    const p1 = parts[line.p1];
    const p2 = parts[line.p2];
    if (p1 && p1.type === 'point' && p2 && p2.type === 'point') {
      return <LineSvg
        key={key}
        x1={p1.x}
        y1={p1.y}
        x2={p2.x}
        y2={p2.y}
        highlighted={state === 'highlighted'}
      />
    } else {
      return null;
    }
  }

  private renderCircle(key: string, circle: CircleDiagramPart, state: DiagramPartState): JSX.Element | null {
    const parts = this.props.proposition.diagram.parts;
    const p1 = parts[circle.p1];
    const p2 = parts[circle.p2];
    if (p1 && p1.type === 'point' && p2 && p2.type === 'point') {
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      const r = Math.sqrt(dx * dx + dy * dy);
      return <CircleSvg
          key={key}
          cx={p1.x}
          cy={p1.y}
          r={r}
          label={key}
          labelDir={circle.labelDir}
          highlighted={state === 'highlighted'}
        />
    } else {
      return null;
    }
  }

}

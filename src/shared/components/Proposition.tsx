import * as React from 'react';
import { style } from 'typestyle';
import { CircleSvg } from './CircleSvg';
import { LineSvg } from './LineSvg';
import { PointSvg } from './PointSvg';
import { LabelDir } from '../constants/LabelDir';
import { DiagramPartMap, DiagramPart, PointDiagramPart, LineDiagramPart, CircleDiagramPart } from '../types/Diagram';
import { PropositionStep } from '../types/PropositionStep';

type DiagramPartState = 'hidden' | 'visible' | 'highlighted';

type DiagramPartStateMap = {
  [key: string]: DiagramPartState;
}

const classPrefix = 'Proposition';

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
  fontSize: 20,
});

const summaryClass = style({
  $debugName: `${classPrefix}_titleAndSummary`,
  $unique: true,
  fontSize: 16,
  marginTop: 6,
});

const buttonsClass = style({
  $debugName: `${classPrefix}_controls`,
  $unique: true,
  display: 'flex',
  flexDirection: 'row',
});

const buttonClass = style({
  $debugName: `${classPrefix}_controls`,
  $unique: true,
  marginLeft: 6,
  fontSize: 24,
  border: 'none',
  outline: 'none',
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
  display: 'flex',
  flexDirection: 'column',
});

const stepClass = style({
  $debugName: `${classPrefix}_step`,
  $unique: true,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'start',
  paddingTop: 6,
  paddingBottom: 6,
});

const stepNumberClass = style({
  $debugName: `${classPrefix}_stepNumber`,
  $unique: true,
  width: 30,
  textAlign: 'right',
});

const stepTextClass = style({
  $debugName: `${classPrefix}_stepText`,
  $unique: true,
  paddingLeft: 12,
  paddingRight: 12,
  width: 500,
});

const diagramClass = style({
  $debugName: `${classPrefix}_diagram`,
  $unique: true,
  borderColor: '#aaa',
  borderStyle: 'solid',
  borderWidth: 1,
});

const leftDoubleTriangle = '\u23ea';
const rightDoubleTriangle = '\u23e9';
const leftDoubleTriangleWithBar = '\u23ee';
const rightDoubleTriangleWithBar = '\u23ed';

export type PropositionProps = {
  readonly title: string;
  readonly summary: string;
  readonly width: number;
  readonly height: number;
  readonly diagramParts: DiagramPartMap;
  readonly steps: ReadonlyArray<PropositionStep>;
};

type PropositionState = {
  readonly stepNum: number;
};

export class Proposition extends React.PureComponent<PropositionProps, PropositionState> {

  constructor(props: PropositionProps) {
    super(props);
    this.state = {
      stepNum: 0,
    };
  }

  public render(): JSX.Element {
    return (
      <div className={rootClass}>
        <div className={headerClass}>
          <div className={titleAndSummaryClass}>
            <div className={titleClass}>{this.props.title}</div>
            <div className={summaryClass}>{this.props.summary}</div>
          </div>
          <div className={buttonsClass}>
            <button className={buttonClass} onClick={this.start} disabled={this.state.stepNum === 0}>
              {leftDoubleTriangleWithBar}
            </button>
            <button className={buttonClass} onClick={this.back} disabled={this.state.stepNum === 0}>
              {leftDoubleTriangle}
            </button>
            <button className={buttonClass} onClick={this.next} disabled={this.state.stepNum === this.props.steps.length}>
              {rightDoubleTriangle}
            </button>
            <button className={buttonClass} onClick={this.end} disabled={this.state.stepNum === this.props.steps.length}>
              {rightDoubleTriangleWithBar}
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

  private readonly start = () => {
    this.setState({
      stepNum: 0,
    });
  };

  private readonly back = () => {
    this.setState({
      stepNum: Math.max(this.state.stepNum - 1, 0),
    });
  };

  private readonly next = () => {
    this.setState({
      stepNum: Math.min(this.state.stepNum + 1, this.props.steps.length),
    });
  };

  private readonly end = () => {
    this.setState({
      stepNum: this.props.steps.length,
    });
  };

  private renderSteps(): JSX.Element {
    const stepElements = this.props.steps.map((step, index) =>
      <div
        className={stepClass}
        key={index+1}
        style={{ visibility: this.state.stepNum >= index+1 ? 'visible' : 'hidden'}}
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
    const states = this.getDiagramPartStates();
    const diagramElements: JSX.Element[] = [];
    for (const key in this.props.diagramParts) {
      const part = this.props.diagramParts[key];
      const state = states[key];
      if (state === 'visible') {
        const element = this.renderDiagramPart(key, part, state);
        if (element) {
          diagramElements.push(element);
        }
      }
    }
    for (const key in this.props.diagramParts) {
      const part = this.props.diagramParts[key];
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
          width={this.props.width}
          height={this.props.height}
          viewBox={`0 0 ${this.props.width} ${this.props.height}`}
        >
          {diagramElements}
        </svg>
      </div>
    );
  }

  private getDiagramPartStates() {
    const stateMap: DiagramPartStateMap = {};
    if (this.state.stepNum >= 1) {
      let stepIndex = 0;
      while (stepIndex < this.state.stepNum - 1) {
        const step = this.props.steps[stepIndex];
        for (const key of step.highlight) {
          stateMap[key] = 'visible';
        }
        stepIndex++;
      }
      const step = this.props.steps[stepIndex];
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
    const p1 = this.props.diagramParts[line.p1];
    const p2 = this.props.diagramParts[line.p2];
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
    const p1 = this.props.diagramParts[circle.p1];
    const p2 = this.props.diagramParts[circle.p2];
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

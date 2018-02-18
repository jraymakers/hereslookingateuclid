import * as React from 'react';
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
      <div>
        <div>{this.props.title}</div>
        <div>{this.props.summary}</div>
        <button onClick={this.start} disabled={this.state.stepNum === 0}>Start</button>
        <button onClick={this.back} disabled={this.state.stepNum === 0}>Back</button>
        <button onClick={this.next} disabled={this.state.stepNum === this.props.steps.length}>Next</button>
        <button onClick={this.end} disabled={this.state.stepNum === this.props.steps.length}>End</button>
        {this.renderSteps()}
        {this.renderDiagram()}
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
      <li
        key={index+1}
        style={{ visibility: this.state.stepNum >= index+1 ? 'visible' : 'hidden'}}
      >
        {step.text}
      </li>
    );
    return (
      <ol>
        {stepElements}
      </ol>
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
      <div>
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
      label={key}
      labelDir={point.labelDir}
      x={point.x}
      y={point.y}
      hidden={state === 'hidden'}
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
        hidden={state === 'hidden'}
        highlighted={state === 'highlighted'}
      />
    } else {
      return null;
    }
  }

  private renderCircle(key: string, circle: CircleDiagramPart, state: DiagramPartState): JSX.Element | null {
    const c = this.props.diagramParts[circle.c];
    const rp = this.props.diagramParts[circle.rp];
    if (c && c.type === 'point' && rp && rp.type === 'point') {
      const dx = rp.x - c.x;
      const dy = rp.y - c.y;
      const r = Math.sqrt(dx * dx + dy * dy);
      return <CircleSvg
          key={key}
          label={key}
          labelDir={circle.labelDir}
          cx={c.x}
          cy={c.y}
          r={r}
          hidden={state === 'hidden'}
          highlighted={state === 'highlighted'}
        />
    } else {
      return null;
    }
  }

}

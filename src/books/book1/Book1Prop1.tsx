import * as React from 'react';
import { style } from 'typestyle';
import { CircleSvg } from '../../shared/components/CircleSvg';
import { LineSvg } from '../../shared/components/LineSvg';
import { PointSvg } from '../../shared/components/PointSvg';
import { LabelDir } from '../../shared/LabelDir';

const classPrefix = 'Book1Prop1';

const circleClass = style({
  $debugName: `${classPrefix}_circle`,
  fill: 'transparent',
  stroke: 'black',
  strokeWidth: '2px',
});

const lineClass = style({
  $debugName: `${classPrefix}_line`,
  stroke: 'black',
  strokeWidth: '2px',
  strokeLinecap: 'round',
});

const svgClass = style({
  $debugName: `${classPrefix}_svg`,
  width: '400px',
  height: '400px',
});

const title = 'Book 1, Proposition 1 (I.i)';
const summary = 'Construct an equilateral triangle on a given straight line.';

const w = 400;
const h = 400;
const centerX = w/2;
const centerY = h/2;
const ab = 100;
const aX = centerX - ab/2;
const aY = centerY;
const bX = centerX + ab/2;
const bY = centerY;
const alphaX = aX - ab;
const alphaY = aY;
const betaX = bX + ab;
const betaY = bY;
const cX = centerX;
const cY = centerY - ab * Math.sqrt(3)/2;

const alpha = '\u03b1';
const beta = '\u03b2';

type PointDiagramPart = {
  type: 'point';
  x: number;
  y: number;
  labelDir: number;
};

type LineDiagramPart = {
  type: 'line';
  p1: string;
  p2: string;
};

type CircleDiagramPart = {
  type: 'circle';
  c: string;
  rp: string;
  labelDir: number;
};

type DiagramPart =
  PointDiagramPart |
  LineDiagramPart |
  CircleDiagramPart;

type DiagramPartMap = {
  [key: string]: DiagramPart;
};

const diagramParts: DiagramPartMap = {
  ['A']: { type: 'point', x: aX, y: aY, labelDir: LabelDir.W },
  ['B']: { type: 'point', x: bX, y: bY, labelDir: LabelDir.E },
  ['C']: { type: 'point', x: cX, y: cY, labelDir: LabelDir.N },
  ['AB']: { type: 'line', p1: 'A', p2: 'B' },
  ['AC']: { type: 'line', p1: 'A', p2: 'C' },
  ['BC']: { type: 'line', p1: 'B', p2: 'C' },
  [alpha]: { type: 'circle', c: 'A', rp: 'B', labelDir: LabelDir.W },
  [beta]:  { type: 'circle', c: 'B', rp: 'A', labelDir: LabelDir.E },
};

type PropositionStep = {
  text: string;
  highlight: string[];
};

const steps: PropositionStep[] = [
  {
    text: 'Let AB be the given straight line.',
    highlight: [ 'AB', 'A', 'B' ]
  },
  {
    text: `Construct a circle ${alpha} with center A and radius AB.`,
    highlight: [ alpha ]
  },
  {
    text: `Construct another circle ${beta} with center B and radius AB.`,
    highlight: [ beta ]
  },
  {
    text: `Let C be either one of the two intersection points of ${alpha} and ${beta}.`,
    highlight: [ 'C' ]
  },
  {
    text: 'Construct the straight lines AC and BC.',
    highlight: [ 'AC', 'BC' ]
  },
  {
    text: `Since AB and AC are both radii of circle ${alpha}, they are equal.`,
    highlight: [ 'AB', 'AC' ]
  },
  {
    text: `Likewise, since AB and BC are both radii of circle ${beta}, they are equal.`,
    highlight: [ 'AB', 'BC' ]
  },
  {
    text: 'Because AB equals AC and AB equals BC, AC equals BC.',
    highlight: [ 'AC', 'BC' ]
  },
  {
    text: 'Thus AB, AC, and BC equal each other, so the triangle ABC is equilateral, as desired.',
    highlight: [ 'AB', 'AC', 'BC' ]
  }
];

type DiagramPartState = 'hidden' | 'visible' | 'highlighted';

type DiagramPartStateMap = {
  [key: string]: DiagramPartState;
}

function getDiagramPartStates(stepNum: number) {
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

type State = {
  readonly stepNum: number;
};

export class Book1Prop1 extends React.PureComponent<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      stepNum: 0,
    };
  }

  public render(): JSX.Element {
    return (
      <div>
        <div>{title}</div>
        <div>{summary}</div>
        <button onClick={this.start} disabled={this.state.stepNum === 0}>Start</button>
        <button onClick={this.back} disabled={this.state.stepNum === 0}>Back</button>
        <button onClick={this.next} disabled={this.state.stepNum === steps.length}>Next</button>
        <button onClick={this.end} disabled={this.state.stepNum === steps.length}>End</button>
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
      stepNum: Math.min(this.state.stepNum + 1, steps.length),
    });
  };

  private readonly end = () => {
    this.setState({
      stepNum: steps.length,
    });
  };

  private renderSteps(): JSX.Element {
    const stepElements = steps.map((step, index) =>
      <li key={index+1} style={this.visibleFrom(index+1)}>{step.text}</li>
    );
    return (
      <ol>
        {stepElements}
      </ol>
    );
  }

  private renderDiagram(): JSX.Element {
    const states = getDiagramPartStates(this.state.stepNum);
    const diagramElements: JSX.Element[] = [];
    for (const key in diagramParts) {
      const part = diagramParts[key];
      const state = states[key];
      if (state === 'visible') {
        const element = this.renderDiagramPart(key, part, state);
        if (element) {
          diagramElements.push(element);
        }
      }
    }
    for (const key in diagramParts) {
      const part = diagramParts[key];
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
        <svg className={svgClass} viewBox={`0 0 ${w} ${h}`}>
          {diagramElements}
        </svg>
      </div>
    );
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
    const p1 = diagramParts[line.p1];
    const p2 = diagramParts[line.p2];
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
    const c = diagramParts[circle.c];
    const rp = diagramParts[circle.rp];
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

  private visibleFrom(step: number) {
    return {
      visibility: this.state.stepNum >= step ? 'visible' : 'hidden',
    };
  }

}

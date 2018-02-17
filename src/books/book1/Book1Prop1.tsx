import * as React from 'react';
import { style } from 'typestyle';

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

type State = {
  readonly step: number;
};

const minStep = 0;
const maxStep = 9;

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

export class Book1Prop1 extends React.PureComponent<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      step: minStep,
    };
  }

  public render(): JSX.Element {
    return (
      <div>
        <div>Book 1, Proposition 1 (I.i)</div>
        <div>Construct an equilateral triangle on a given straight line.</div>
        <button onClick={this.start} disabled={this.state.step === minStep}>Start</button>
        <button onClick={this.back} disabled={this.state.step === minStep}>Back</button>
        <button onClick={this.next} disabled={this.state.step === maxStep}>Next</button>
        <button onClick={this.end} disabled={this.state.step === maxStep}>End</button>
        <ol>
          <li style={this.visibleFrom(1)}>Let AB be the given straight line.</li>
          <li style={this.visibleFrom(2)}>Construct a circle &alpha; with center A and radius AB.</li>
          <li style={this.visibleFrom(3)}>Construct another circle &beta; with center B and radius AB.</li>
          <li style={this.visibleFrom(4)}>Let C be either one of the two intersection points of &alpha; and &beta;.</li>
          <li style={this.visibleFrom(5)}>Construct the straight lines AC and BC.</li>
          <li style={this.visibleFrom(6)}>Since AB and AC are both radii of circle &alpha;, they are equal.</li>
          <li style={this.visibleFrom(7)}>Likewise, since AB and BC are both radii of circle &beta;, they are equal.</li>
          <li style={this.visibleFrom(8)}>Because AB equals AC and AB equals BC, AC equals BC.</li>
          <li style={this.visibleFrom(9)}>Thus AB, AC, and BC equal each other, so the triangle ABC is equilateral, as desired.</li>
        </ol>
        <div>
          <svg className={svgClass} viewBox={`0 0 ${w} ${h}`}>
            <line style={this.getStyleLineAB()} className={lineClass} x1={aX} y1={aY} x2={bX} y2={bY} />
            <text style={this.getStyleLabelA()} x={aX} y={aY} dx={-5} dy={5} textAnchor="end">A</text>
            <text style={this.getStyleLabelA()} x={bX} y={bY} dx={5} dy={5} textAnchor="start">B</text>
            <circle style={this.getStyleCircleAlpha()} className={circleClass} cx={aX} cy={aY} r={ab} />
            <text style={this.getStyleLabelAlpha()} x={alphaX} y={alphaY} dx={-5} dy={5} textAnchor="end">&alpha;</text>
            <circle style={this.getStyleCircleBeta()} className={circleClass} cx={bX} cy={bY} r={ab} />
            <text style={this.getStyleLabelBeta()} x={betaX} y={betaY} dx={5} dy={5} textAnchor="start">&beta;</text>
            <text style={this.getStyleLabelC()} x={cX} y={cY} dy={-7} textAnchor="middle">C</text>
            <line style={this.getStyleLineAC()} className={lineClass} x1={aX} y1={aY} x2={cX} y2={cY} />
            <line style={this.getStyleLineBC()} className={lineClass} x1={bX} y1={bY} x2={cX} y2={cY} />
          </svg>
        </div>
      </div>
    );
  }

  private readonly start = () => {
    this.setState({
      step: minStep,
    });
  };

  private readonly back = () => {
    this.setState({
      step: Math.max(this.state.step - 1, minStep),
    });
  };

  private readonly next = () => {
    this.setState({
      step: Math.min(this.state.step + 1, maxStep),
    });
  };

  private readonly end = () => {
    this.setState({
      step: maxStep,
    });
  };

  private visibleFrom(step: number) {
    return {
      visibility: this.state.step >= step ? 'visible' : 'hidden',
    };
  }

  private lineHighlight(steps: number[]) {
    const highlight = steps.some((step) => step === this.state.step);
    return {
      stroke: highlight ? 'red' : 'black',
    }
  }

  private textHighlight(steps: number[]) {
    const highlight = steps.some((step) => step === this.state.step);
    return {
      fill: highlight ? 'red' : 'black',
      stroke: highlight ? 'red' : 'black',
    }
  }

  private getStyleLineAB() {
    return {
      ...this.visibleFrom(1),
      ...this.lineHighlight([1,6,7,9]),
    };
  }

  private getStyleLabelA() {
    return {
      ...this.visibleFrom(1),
      ...this.textHighlight([1]),
    };
  }

  private getStyleLabelB() {
    return {
      ...this.visibleFrom(1),
      ...this.textHighlight([1]),
    };
  }

  private getStyleCircleAlpha() {
    return {
      ...this.visibleFrom(2),
      ...this.lineHighlight([2]),
    };
  }

  private getStyleLabelAlpha() {
    return {
      ...this.visibleFrom(2),
      ...this.textHighlight([2]),
    };
  }

  private getStyleCircleBeta() {
    return {
      ...this.visibleFrom(3),
      ...this.lineHighlight([3]),
    };
  }

  private getStyleLabelBeta() {
    return {
      ...this.visibleFrom(3),
      ...this.textHighlight([3]),
    };
  }

  private getStyleLabelC() {
    return {
      ...this.visibleFrom(4),
      ...this.textHighlight([4]),
    };
  }

  private getStyleLineAC() {
    return {
      ...this.visibleFrom(5),
      ...this.lineHighlight([5,6,8,9]),
    };
  }

  private getStyleLineBC() {
    return {
      ...this.visibleFrom(5),
      ...this.lineHighlight([5,7,8,9]),
    };
  }

}

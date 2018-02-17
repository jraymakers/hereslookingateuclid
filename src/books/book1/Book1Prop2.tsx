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

const pointClass = style({
  $debugName: `${classPrefix}_point`,
  fill: 'black',
  // stroke: 'black',
  // strokeWidth: '2px',
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
const maxStep = 12;

const w = 400;
const h = 400;
const centerX = w/2;
const centerY = h/2;
const dX = centerX;
const dY = centerY;
const ab = 50;
const bc = 100;
const fg = 40;
const dg = ab + bc;
const daAngle = Math.PI*11/24;
const dbAngle = Math.PI*3/24;
const bcAngle = Math.PI*10/24;
const aX = dX + ab * Math.cos(daAngle);
const aY = dY + ab * Math.sin(daAngle);
const bX = dX + ab * Math.cos(dbAngle);
const bY = dY + ab * Math.sin(dbAngle);
const cX = bX - bc * Math.cos(bcAngle);
const cY = bY - bc * Math.sin(bcAngle);
const gX = bX + bc * Math.cos(dbAngle);
const gY = bY + bc * Math.sin(dbAngle);
const hX = aX + bc * Math.cos(daAngle);
const hY = aY + bc * Math.sin(daAngle);
const fX = gX + fg * Math.cos(dbAngle);
const fY = gY + fg * Math.sin(dbAngle);
const eX = hX + fg * Math.cos(daAngle);
const eY = hY + fg * Math.sin(daAngle);

export class Book1Prop2 extends React.PureComponent<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      step: minStep,
    };
  }

  public render(): JSX.Element {
    return (
      <div>
        <div>Book 1, Proposition 2 (I.ii)</div>
        <div>Construct a straight line equal to a given straight line with one end at a given point.</div>
        <button onClick={this.start} disabled={this.state.step === minStep}>Start</button>
        <button onClick={this.back} disabled={this.state.step === minStep}>Back</button>
        <button onClick={this.next} disabled={this.state.step === maxStep}>Next</button>
        <button onClick={this.end} disabled={this.state.step === maxStep}>End</button>
        <ol>
          <li style={this.visibleFrom(1)}>Let A be the given point, and BC the given straight line.</li>
          <li style={this.visibleFrom(2)}>Construct the straight line AB.</li>
          <li style={this.visibleFrom(3)}>Construct an equilateral triangle ABD on AB. So AB, AD, and BD are all equal. (I.i)</li>
          <li style={this.visibleFrom(4)}>Construct the straight lines DE and DF by extending DA and DB, respectively.</li>
          <li style={this.visibleFrom(5)}>Construct the circle &beta; with center B and radius BC.</li>
          <li style={this.visibleFrom(6)}>Let G be the intersection of &beta; and DF.</li>
          <li style={this.visibleFrom(7)}>Construct the circle &delta; with center D and radius DG.</li>
          <li style={this.visibleFrom(8)}>Let H be the intersection of &delta; and DE.</li>
          <li style={this.visibleFrom(9)}>Since BC and BG are both radii of circle &beta;, they are equal.</li>
          <li style={this.visibleFrom(10)}>Since DG and DH are both radii of circle &delta;, they are equal.</li>
          <li style={this.visibleFrom(11)}>
            Because AD equals BD, and AD and BD are parts of DH and DG respectively,
            the remaining parts of each, AH and BG, are also equal.
          </li>
          <li style={this.visibleFrom(12)}>And since BG also equals BC, then AH equals BC, as desired.</li>
        </ol>
        <div>
          <svg className={svgClass} viewBox={`0 0 ${w} ${h}`}>
            <circle style={this.getStylePointA()} className={pointClass} cx={aX} cy={aY} r={3} />
            <text style={this.getStyleLabelA()} x={aX} y={aY} dx={-5} dy={5} textAnchor="end">A</text>
            <line style={this.getStyleLineBC()} className={lineClass} x1={bX} y1={bY} x2={cX} y2={cY} />
            <text style={this.getStyleLabelB()} x={bX} y={bY} dx={3} dy={-3} textAnchor="start">B</text>
            <text style={this.getStyleLabelC()} x={cX} y={cY} dy={-5} textAnchor="middle">C</text>
            <line style={this.getStyleLineAB()} className={lineClass} x1={aX} y1={aY} x2={bX} y2={bY} />
            <line style={this.getStyleLineAD()} className={lineClass} x1={aX} y1={aY} x2={dX} y2={dY} />
            <line style={this.getStyleLineBD()} className={lineClass} x1={bX} y1={bY} x2={dX} y2={dY} />
            <text style={this.getStyleLabelD()} x={dX} y={dY} dx={-5} dy={5} textAnchor="end">D</text>
            <line style={this.getStyleLineBG()} className={lineClass} x1={bX} y1={bY} x2={gX} y2={gY} />
            <text style={this.getStyleLabelG()} x={gX} y={gY} dx={-1} dy={-7} textAnchor="end">G</text>
            <line style={this.getStyleLineFG()} className={lineClass} x1={fX} y1={fY} x2={gX} y2={gY} />
            <text style={this.getStyleLabelF()} x={fX} y={fY} dy={-7} textAnchor="middle">F</text>
            <line style={this.getStyleLineAH()} className={lineClass} x1={aX} y1={aY} x2={hX} y2={hY} />
            <text style={this.getStyleLabelH()} x={hX} y={hY} dx={-5} dy={-5} textAnchor="end">H</text>
            <line style={this.getStyleLineEH()} className={lineClass} x1={eX} y1={eY} x2={hX} y2={hY} />
            <text style={this.getStyleLabelE()} x={eX} y={eY} dx={-5} dy={5} textAnchor="end">E</text>
            <circle style={this.getStyleCircleBeta()} className={circleClass} cx={bX} cy={bY} r={bc} />
            <text style={this.getStyleLabelBeta()} x={bX-bc} y={bY} dx={-5} dy={5} textAnchor="end">&beta;</text>
            <circle style={this.getStyleCircleDelta()} className={circleClass} cx={dX} cy={dY} r={dg} />
            <text style={this.getStyleLabelDelta()} x={dX-dg} y={dY} dx={-5} dy={5} textAnchor="end">&delta;</text>
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

  private pointHighlight(steps: number[]) {
    const highlight = steps.some((step) => step === this.state.step);
    return {
      fill: highlight ? 'red' : 'black',
    }
  }

  private textHighlight(steps: number[]) {
    const highlight = steps.some((step) => step === this.state.step);
    return {
      fill: highlight ? 'red' : 'black',
      stroke: highlight ? 'red' : 'black',
    }
  }

  private getStylePointA() {
    return {
      ...this.visibleFrom(1),
      ...this.pointHighlight([1]),
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

  private getStyleLabelC() {
    return {
      ...this.visibleFrom(1),
      ...this.textHighlight([1]),
    };
  }

  private getStyleLabelD() {
    return {
      ...this.visibleFrom(3),
      ...this.textHighlight([3]),
    };
  }

  private getStyleLabelE() {
    return {
      ...this.visibleFrom(4),
      ...this.textHighlight([4]),
    };
  }

  private getStyleLabelF() {
    return {
      ...this.visibleFrom(4),
      ...this.textHighlight([4]),
    };
  }

  private getStyleLabelG() {
    return {
      ...this.visibleFrom(6),
      ...this.textHighlight([6]),
    };
  }

  private getStyleLabelH() {
    return {
      ...this.visibleFrom(8),
      ...this.textHighlight([8]),
    };
  }

  private getStyleLabelBeta() {
    return {
      ...this.visibleFrom(5),
      ...this.textHighlight([5]),
    };
  }

  private getStyleLabelDelta() {
    return {
      ...this.visibleFrom(7),
      ...this.textHighlight([7]),
    };
  }

  private getStyleCircleBeta() {
    return {
      ...this.visibleFrom(5),
      ...this.lineHighlight([5]),
    };
  }

  private getStyleCircleDelta() {
    return {
      ...this.visibleFrom(7),
      ...this.lineHighlight([7]),
    };
  }

  private getStyleLineAB() {
    return {
      ...this.visibleFrom(2),
      ...this.lineHighlight([2]),
    };
  }

  private getStyleLineAD() {
    return {
      ...this.visibleFrom(3),
      ...this.lineHighlight([3,10]),
    };
  }

  private getStyleLineAH() {
    return {
      ...this.visibleFrom(4),
      ...this.lineHighlight([4,10,11,12]),
    };
  }

  private getStyleLineBC() {
    return {
      ...this.visibleFrom(1),
      ...this.lineHighlight([1,9]),
    };
  }

  private getStyleLineBD() {
    return {
      ...this.visibleFrom(3),
      ...this.lineHighlight([3,10]),
    };
  }

  private getStyleLineBG() {
    return {
      ...this.visibleFrom(4),
      ...this.lineHighlight([4,9,10,11]),
    };
  }

  private getStyleLineEH() {
    return {
      ...this.visibleFrom(4),
      ...this.lineHighlight([4]),
    };
  }

  private getStyleLineFG() {
    return {
      ...this.visibleFrom(4),
      ...this.lineHighlight([4]),
    };
  }

}

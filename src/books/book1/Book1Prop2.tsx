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
const maxStep = 0;

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
        <div>Book 1, Proposition 2</div>
        <div>Construct a straight line equal to a given straight line with one end at a given point.</div>
        <button onClick={this.start} disabled={this.state.step === minStep}>Start</button>
        <button onClick={this.back} disabled={this.state.step === minStep}>Back</button>
        <button onClick={this.next} disabled={this.state.step === maxStep}>Next</button>
        <button onClick={this.end} disabled={this.state.step === maxStep}>End</button>
        <ol>
        </ol>
        <div>
          <svg className={svgClass} viewBox="0 0 400 400" preserve-aspect-ratio="true">
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

}

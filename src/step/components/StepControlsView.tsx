import * as React from 'react';
import { style } from 'typestyle';

const classPrefix = 'StepControlsView';

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

export type StepControlsViewProps = {
  readonly currentStepIndex: number;
  readonly minStepIndex: number;
  readonly maxStepIndex: number;
  readonly goToStep: (stepIndex: number) => void;
};

export class StepControlsView extends React.PureComponent<StepControlsViewProps> {

  public render(): JSX.Element {
    const currentStepIndex = this.props.currentStepIndex;
    const minStepIndex = this.props.minStepIndex;
    const maxStepIndex = this.props.maxStepIndex;
    const atMin = currentStepIndex === minStepIndex;
    const atMax = currentStepIndex === maxStepIndex
    return (
      <div className={buttonsClass}>
        <button
          className={buttonClass}
          disabled={atMin}
          onClick={this.goMin}
        >
          <div className={verticalBarClass} />
          <div className={arrowLeftClass} />
        </button>
        <button
          className={buttonClass}
          disabled={atMin}
          onClick={this.goPrev}
        >
          <div className={arrowLeftClass} />
        </button>
        <button
          className={buttonClass}
          disabled={atMax}
          onClick={this.goNext}
        >
          <div className={arrowRightClass} />
        </button>
        <button
          className={buttonClass}
          disabled={atMax}
          onClick={this.goMax}
        >
          <div className={arrowRightClass} />
          <div className={verticalBarClass} />
        </button>
      </div>
    );
  }

  private readonly goMin = () => {
    this.props.goToStep(this.props.minStepIndex);
  };

  private readonly goPrev = () => {
    this.props.goToStep(Math.max(this.props.currentStepIndex - 1, this.props.minStepIndex));
  };

  private readonly goNext = () => {
    this.props.goToStep(Math.min(this.props.currentStepIndex + 1, this.props.maxStepIndex));
  };

  private readonly goMax = () => {
    this.props.goToStep(this.props.maxStepIndex);
  };

}

import * as React from 'react';
import { style } from 'typestyle';

import {
  Step,
} from '../types/Step';

const classPrefix = 'StepView';

const rootClass = style({
  $debugName: `${classPrefix}_root`,
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

const numberClass = style({
  $debugName: `${classPrefix}_number`,
  $unique: true,
  width: 30,
  textAlign: 'right',
  flex: 'none',
});

const textClass = style({
  $debugName: `${classPrefix}_text`,
  $unique: true,
  paddingLeft: 12,
  paddingRight: 12,
});

export type StepViewProps = {
  readonly stepNum: number;
  readonly text: string;
  readonly faded?: boolean;
  readonly goToStep: (stepNum: number) => void;
};

export class StepView extends React.PureComponent<StepViewProps> {

  public render(): JSX.Element {
    const stepNum = this.props.stepNum;
    return (
      <div
        className={rootClass}
        style={{ opacity: this.props.faded ? 0.2 : 1}}
        onClick={this.onClick}
      >
        <div className={numberClass}>{stepNum}.</div>
        <div className={textClass}>{this.props.text}</div>
      </div>
    );
  }

  private readonly onClick = () => {
    this.props.goToStep(this.props.stepNum);
  }

}

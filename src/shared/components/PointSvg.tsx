import * as React from 'react';

import { LabelSvg } from './LabelSvg';

export type PointSvgProps = {
  readonly x: number;
  readonly y: number;
  readonly label: string;
  readonly labelDir: number;
  readonly hidden?: boolean;
  readonly highlighted?: boolean;
};

export class PointSvg extends React.PureComponent<PointSvgProps> {

  public render(): JSX.Element | null {
    if (!this.props.hidden) {
      return (
        <g>
          <circle
            fill={this.props.highlighted ? 'red' : 'black'}
            cx={this.props.x}
            cy={this.props.y}
            r={3}
          />
          <LabelSvg
            x={this.props.x}
            y={this.props.y}
            text={this.props.label}
            dir={this.props.labelDir}
            highlighted={this.props.highlighted}
          />
        </g>
      );
    } else {
      return null;
    }
  }

}

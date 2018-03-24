import * as React from 'react';

import { LabelSvg } from './LabelSvg';

export type PointSvgProps = {
  readonly x: number;
  readonly y: number;
  readonly label: string;
  readonly labelX?: number;
  readonly labelY?: number;
  readonly highlighted?: boolean;
};

export class PointSvg extends React.PureComponent<PointSvgProps> {

  public render(): JSX.Element | null {
    return (
      <g>
        <circle
          fill={this.props.highlighted ? 'orange' : 'black'}
          cx={this.props.x}
          cy={this.props.y}
          r={3}
        />
        <LabelSvg
          text={this.props.label}
          x={this.props.x + (this.props.labelX || 0)}
          y={this.props.y + (this.props.labelY || 0)}
          highlighted={this.props.highlighted}
        />
      </g>
    );
  }

}

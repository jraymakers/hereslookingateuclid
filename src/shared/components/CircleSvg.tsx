import * as React from 'react';

import { LabelSvg } from './LabelSvg';

export type CircleSvgProps = {
  readonly cx: number;
  readonly cy: number;
  readonly r: number;
  readonly label: string;
  readonly labelDir: number;
  readonly hidden?: boolean;
  readonly highlighted?: boolean;
};

export class CircleSvg extends React.PureComponent<CircleSvgProps> {

  public render(): JSX.Element | null {
    if (!this.props.hidden) {
      return (
        <g>
          <circle
            fill="transparent"
            stroke={this.props.highlighted ? 'red' : 'black'}
            strokeWidth={2}
            cx={this.props.cx}
            cy={this.props.cy}
            r={this.props.r}
          />
          <LabelSvg
            x={this.props.cx + this.props.r * Math.cos(this.props.labelDir)}
            y={this.props.cy + this.props.r * Math.sin(this.props.labelDir)}
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

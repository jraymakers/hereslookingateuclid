import * as React from 'react';

import { LabelSvg } from './LabelSvg';

const labelDist = 10;

export type CircleSvgProps = {
  readonly cx: number;
  readonly cy: number;
  readonly r: number;
  readonly label: string;
  readonly labelDir?: number;
  readonly highlighted?: boolean;
};

export class CircleSvg extends React.PureComponent<CircleSvgProps> {

  public render(): JSX.Element | null {
    return (
      <g>
        <circle
          fill="transparent"
          stroke={this.props.highlighted ? 'orange' : 'black'}
          strokeWidth={2}
          cx={this.props.cx}
          cy={this.props.cy}
          r={this.props.r}
        />
        {this.renderLabel()}
      </g>
    );
  }

  private renderLabel(): JSX.Element | null {
    if (this.props.labelDir != null) {
      return <LabelSvg
        text={this.props.label}
        x={this.props.cx + (this.props.r + labelDist) * Math.cos(this.props.labelDir)}
        y={this.props.cy + (this.props.r + labelDist) * Math.sin(this.props.labelDir)}
        highlighted={this.props.highlighted}
      />;
    } else {
      return null;
    }
  }

}

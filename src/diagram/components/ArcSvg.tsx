import * as React from 'react';

import { LabelSvg } from './LabelSvg';

const labelDist = 10;

export type ArcSvgProps = {
  readonly x1: number;
  readonly y1: number;
  readonly x2: number;
  readonly y2: number;
  readonly rx: number;
  readonly ry: number;
  readonly largest?: boolean;
  readonly ccw?: boolean;
  readonly label: string;
  readonly labelDir?: number;
  readonly highlighted?: boolean;
  readonly className?: string;
  readonly dasharray?: string;
};

export class ArcSvg extends React.PureComponent<ArcSvgProps> {

  public render(): JSX.Element | null {
    const x1 = this.props.x1;
    const y1 = this.props.y1;
    const x2 = this.props.x2;
    const y2 = this.props.y2;
    const rx = this.props.rx;
    const ry = this.props.ry;
    const largest = this.props.largest ? 1 : 0;
    const sweep = this.props.ccw ? 0 : 1;
    return (
      <g className={this.props.className}>
        <path
          d={`M ${x1},${y1} A ${rx},${ry} 0 ${largest} ${sweep} ${x2},${y2}`}
          fill="transparent"
          stroke={this.props.highlighted ? 'orange' : 'black'}
          strokeWidth={2}
          strokeDasharray={this.props.dasharray}
        />
        {this.renderLabel()}
      </g>
    );
  }

  private renderLabel(): JSX.Element | null {
    if (this.props.labelDir != null) {
      const rx = this.props.rx;
      const ry = this.props.ry;
      return <LabelSvg
        text={this.props.label}
        x={this.props.x1 - rx + (rx + labelDist) * Math.cos(this.props.labelDir)}
        y={this.props.y1 - rx + (ry + labelDist) * Math.sin(this.props.labelDir)}
        highlighted={this.props.highlighted}
      />;
    } else {
      return null;
    }
  }

}

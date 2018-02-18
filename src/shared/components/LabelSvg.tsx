import * as React from 'react';

const labelRadius = 12;
const labelYOffset = 6;

export type LabelSvgProps = {
  readonly x: number;
  readonly y: number;
  readonly text: string;
  readonly dir?: number; // radians, 0 is +x, 90 is +y
  readonly hidden?: boolean;
  readonly highlighted?: boolean;
};

export class LabelSvg extends React.PureComponent<LabelSvgProps> {

  public render(): JSX.Element | null {
    if (!this.props.hidden) {
      const dir = this.props.dir || 0;
      return <text
        fill={this.props.highlighted ? 'red' : 'black'}
        textAnchor="middle"
        x={this.props.x}
        y={this.props.y}
        dx={labelRadius * Math.cos(dir)}
        dy={labelYOffset + labelRadius * Math.sin(dir)}
      >
        {this.props.text}
      </text>;
    } else {
      return null;
    }
  }

}

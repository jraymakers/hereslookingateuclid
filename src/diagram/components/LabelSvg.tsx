import * as React from 'react';

const labelYOffset = 6;

export type LabelSvgProps = {
  readonly text: string;
  readonly x: number;
  readonly y: number;
  readonly highlighted?: boolean;
};

export class LabelSvg extends React.PureComponent<LabelSvgProps> {

  public render(): JSX.Element | null {
    return <text
      fill={this.props.highlighted ? 'orange' : 'black'}
      textAnchor="middle"
      x={this.props.x}
      y={this.props.y + labelYOffset}
    >
      {this.props.text}
    </text>;
  }

}

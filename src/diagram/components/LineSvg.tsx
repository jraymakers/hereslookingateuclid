import * as React from 'react';

export type LineSvgProps = {
  readonly x1: number;
  readonly y1: number;
  readonly x2: number;
  readonly y2: number;
  readonly highlighted?: boolean;
  readonly className?: string;
  readonly lineWidth?: number;
  readonly dasharray?: string;
};

export class LineSvg extends React.PureComponent<LineSvgProps> {

  public render(): JSX.Element | null {
    return <line
      className={this.props.className}
      stroke={this.props.highlighted ? 'orange' : 'black'}
      strokeWidth={this.props.lineWidth || 2}
      strokeLinecap="round"
      strokeDasharray={this.props.dasharray}
      x1={this.props.x1}
      y1={this.props.y1}
      x2={this.props.x2}
      y2={this.props.y2}
    />;
  }

}

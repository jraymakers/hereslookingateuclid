import * as React from 'react';

export type LineSvgProps = {
  readonly x1: number;
  readonly y1: number;
  readonly x2: number;
  readonly y2: number;
  readonly hidden?: boolean;
  readonly highlighted?: boolean;
};

export class LineSvg extends React.PureComponent<LineSvgProps> {

  public render(): JSX.Element | null {
    if (!this.props.hidden) {
      return <line
        stroke={this.props.highlighted ? 'red' : 'black'}
        strokeWidth={2}
        strokeLinecap="round"
        x1={this.props.x1}
        y1={this.props.y1}
        x2={this.props.x2}
        y2={this.props.y2}
      />;
    } else {
      return null;
    }
  }

}

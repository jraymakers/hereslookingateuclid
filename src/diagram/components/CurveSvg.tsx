import * as React from 'react';

export type CurveSvgProps = {
  readonly x1: number;
  readonly y1: number;
  readonly cx1: number;
  readonly cy1: number;
  readonly cx2: number;
  readonly cy2: number;
  readonly x2: number;
  readonly y2: number;
  readonly highlighted?: boolean;
};

export class CurveSvg extends React.PureComponent<CurveSvgProps> {

  public render(): JSX.Element | null {
    const x1 = this.props.x1;
    const y1 = this.props.y1;
    const cx1 = this.props.cx1;
    const cy1 = this.props.cy1;
    const cx2 = this.props.cx2;
    const cy2 = this.props.cy2;
    const x2 = this.props.x2;
    const y2 = this.props.y2;
    return <path
      d={`M ${x1},${y2} C ${cx1},${cy1} ${cx2},${cy2} ${x2},${y2}`}
      fill="transparent"
      stroke={this.props.highlighted ? 'orange' : 'black'}
      strokeLinecap="round"
      strokeWidth={2}
    />;
  }

}

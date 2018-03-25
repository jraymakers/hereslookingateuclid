import * as React from 'react';

export type CurveSvgProps = {
  readonly x1: number;
  readonly y1: number;
  readonly cpx1: number;
  readonly cpy1: number;
  readonly cpx2: number;
  readonly cpy2: number;
  readonly x2: number;
  readonly y2: number;
  readonly highlighted?: boolean;
};

export class CurveSvg extends React.PureComponent<CurveSvgProps> {

  public render(): JSX.Element | null {
    const x1 = this.props.x1;
    const y1 = this.props.y1;
    const cpx1 = this.props.cpx1;
    const cpy1 = this.props.cpy1;
    const cpx2 = this.props.cpx2;
    const cpy2 = this.props.cpy2;
    const x2 = this.props.x2;
    const y2 = this.props.y2;
    return <path
      d={`M ${x1},${y1} C ${cpx1},${cpy1} ${cpx2},${cpy2} ${x2},${y2}`}
      fill="transparent"
      stroke={this.props.highlighted ? 'orange' : 'black'}
      strokeLinecap="round"
      strokeWidth={2}
    />;
  }

}

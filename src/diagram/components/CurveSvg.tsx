import * as React from 'react';

type CurveSvgProps = Readonly<{
  x1: number;
  y1: number;
  cpx1: number;
  cpy1: number;
  cpx2: number;
  cpy2: number;
  x2: number;
  y2: number;
  highlighted?: boolean;
}>;

export const CurveSvg: React.FC<CurveSvgProps> = (props) => {
  const x1 = props.x1;
  const y1 = props.y1;
  const cpx1 = props.cpx1;
  const cpy1 = props.cpy1;
  const cpx2 = props.cpx2;
  const cpy2 = props.cpy2;
  const x2 = props.x2;
  const y2 = props.y2;
  return (
    <path
      d={`M ${x1},${y1} C ${cpx1},${cpy1} ${cpx2},${cpy2} ${x2},${y2}`}
      fill="transparent"
      stroke={props.highlighted ? 'orange' : 'black'}
      strokeLinecap="round"
      strokeWidth={2}
    />
  );
}
CurveSvg.displayName = 'CurveSvg';
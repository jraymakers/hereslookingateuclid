import * as React from 'react';

type LineSvgProps = Readonly<{
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  highlighted?: boolean;
  className?: string;
  lineWidth?: number;
  dasharray?: string;
}>;

export const LineSvg: React.FC<LineSvgProps> = (props) => {
  return <line
    className={props.className}
    stroke={props.highlighted ? 'orange' : 'black'}
    strokeWidth={props.lineWidth || 2}
    strokeLinecap="round"
    strokeDasharray={props.dasharray}
    x1={props.x1}
    y1={props.y1}
    x2={props.x2}
    y2={props.y2}
  />;
}
LineSvg.displayName = 'LineSvg';

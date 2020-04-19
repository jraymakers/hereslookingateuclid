import * as React from 'react';

import { LabelSvg } from './LabelSvg';

const labelDist = 10;

type ArcSvgProps = Readonly<{
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  rx: number;
  ry: number;
  largest?: boolean;
  ccw?: boolean;
  label: string;
  labelDir?: number;
  highlighted?: boolean;
  className?: string;
  lineWidth?: number;
  dasharray?: string;
}>;

export const ArcSvg: React.FC<ArcSvgProps> = (props) => {
  const x1 = props.x1;
  const y1 = props.y1;
  const x2 = props.x2;
  const y2 = props.y2;
  const rx = props.rx;
  const ry = props.ry;
  const largest = props.largest ? 1 : 0;
  const sweep = props.ccw ? 0 : 1;
  return (
    <g className={props.className}>
      <path
        d={`M ${x1},${y1} A ${rx},${ry} 0 ${largest} ${sweep} ${x2},${y2}`}
        fill="transparent"
        stroke={props.highlighted ? 'orange' : 'black'}
        strokeWidth={props.lineWidth || 2}
        strokeDasharray={props.dasharray}
      />
      <ArcSvgLabel {...props} />
    </g>
  );
}
ArcSvg.displayName = 'ArcSvg';

const ArcSvgLabel: React.FC<ArcSvgProps> = (props) => {
  if (props.labelDir != null) {
    const rx = props.rx;
    const ry = props.ry;
    return (
      <LabelSvg
        text={props.label}
        x={props.x1 - rx + (rx + labelDist) * Math.cos(props.labelDir)}
        y={props.y1 - rx + (ry + labelDist) * Math.sin(props.labelDir)}
        highlighted={props.highlighted}
      />
    );
  } else {
    return null;
  }
}
ArcSvgLabel.displayName = 'ArcSvgLabel';

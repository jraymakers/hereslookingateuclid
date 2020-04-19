import * as React from 'react';

import { LabelSvg } from './LabelSvg';

type PointSvgProps = Readonly<{
  x: number;
  y: number;
  label: string;
  labelX?: number;
  labelY?: number;
  highlighted?: boolean;
  className?: string;
}>;

export const PointSvg: React.FC<PointSvgProps> = (props) => {
  return (
    <g className={props.className}>
      <circle
        fill={props.highlighted ? 'orange' : 'black'}
        cx={props.x}
        cy={props.y}
        r={3}
      />
      <LabelSvg
        text={props.label}
        x={props.x + (props.labelX || 0)}
        y={props.y + (props.labelY || 0)}
        highlighted={props.highlighted}
      />
    </g>
  );
}
PointSvg.displayName = 'PointSvg';

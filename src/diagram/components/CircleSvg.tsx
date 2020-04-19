import * as React from 'react';

import { LabelSvg } from './LabelSvg';

const labelDist = 10;

type CircleSvgProps = Readonly<{
  cx: number;
  cy: number;
  r: number;
  label: string;
  labelDir?: number;
  highlighted?: boolean;
}>;

export const CircleSvg: React.FC<CircleSvgProps> = (props) => {
  return (
    <g>
      <circle
        fill="transparent"
        stroke={props.highlighted ? 'orange' : 'black'}
        strokeWidth={2}
        cx={props.cx}
        cy={props.cy}
        r={props.r}
      />
      <CircleSvgLabel {...props} />
    </g>
  );
}
CircleSvg.displayName = 'CircleSvg';

const CircleSvgLabel: React.FC<CircleSvgProps> = (props) => {
  if (props.labelDir != null) {
    return (
      <LabelSvg
        text={props.label}
        x={props.cx + (props.r + labelDist) * Math.cos(props.labelDir)}
        y={props.cy + (props.r + labelDist) * Math.sin(props.labelDir)}
        highlighted={props.highlighted}
      />
    );
  } else {
    return null;
  }
}
CircleSvgLabel.displayName = 'CircleSvgLabel';

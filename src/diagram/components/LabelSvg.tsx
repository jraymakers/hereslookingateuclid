import * as React from 'react';

const labelYOffset = 6;

type LabelSvgProps = Readonly<{
  text: string;
  x: number;
  y: number;
  highlighted?: boolean;
}>;

export const LabelSvg: React.FC<LabelSvgProps> = (props) => {
  return (
    <text
      fill={props.highlighted ? 'orange' : 'black'}
      textAnchor="middle"
      x={props.x}
      y={props.y + labelYOffset}
    >
      {props.text}
    </text>
  );
}
LabelSvg.displayName = 'LabelSvg';

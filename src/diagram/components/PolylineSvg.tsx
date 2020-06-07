import * as React from 'react';

type Point = Readonly<{
  x: number;
  y: number;
}>;

type PolylineSvgProps = Readonly<{
  points: readonly Point[];
  highlighted?: boolean;
  className?: string;
  lineWidth?: number;
  dasharray?: string;
  linecap?: 'butt' | 'round' | 'square';
  linejoin?: 'bevel' | 'miter' | 'round';
}>;

export const PolylineSvg: React.FC<PolylineSvgProps> = (props) => {
  return (
    <polyline
      className={props.className}
      fill='none'
      points={props.points.map(p => `${p.x},${p.y}`).join(' ')}
      stroke={props.highlighted ? 'orange' : 'black'}
      strokeWidth={props.lineWidth || 2}
      strokeLinecap={props.linecap || 'butt'}
      strokeLinejoin={props.linejoin || 'miter'}
      strokeDasharray={props.dasharray}
    />
  );
}
PolylineSvg.displayName = 'PolylineSvg';

import * as React from 'react';

import { assertNever } from '../../typescript';

export type ArcBoundaryPart = {
  type: 'arc';
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  rx: number;
  ry: number;
  largest?: boolean;
  ccw?: boolean;
};

export type CurveBoundaryPart = {
  type: 'curve';
  x1: number;
  y1: number;
  cpx1: number;
  cpy1: number;
  cpx2: number;
  cpy2: number;
  x2: number;
  y2: number;
};

export type LineBoundaryPart = {
  type: 'line';
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

export type FigureBoundaryPart = ArcBoundaryPart | CurveBoundaryPart | LineBoundaryPart;

export type FigureBoundaryPartList = ReadonlyArray<FigureBoundaryPart>;

function pathFromBoundary(boundaryParts: FigureBoundaryPartList): string {
  const stringParts: string[] = [];
  if (boundaryParts.length > 0) {
    const firstPart = boundaryParts[0];
    let x = firstPart.x1;
    let y = firstPart.y1;
    stringParts.push(`M ${x},${y}`);
    for (const part of boundaryParts) {
      switch (part.type) {
        case 'arc': {
          const rx = part.rx;
          const ry = part.ry;
          const largest = part.largest ? 1 : 0;
          const sweep = part.ccw ? 0 : 1;
          if (part.x2 === x && part.y2 === y) {
            stringParts.push(`A ${rx},${ry} 0 ${largest} ${sweep} ${part.x1},${part.y1}`);
            x = part.x1;
            y = part.y1;
          } else {
            if (part.x1 !== x && part.y1 !== y) {
              console.warn('disconnected boundary; adding line');
              stringParts.push(`L ${part.x1},${part.y1}`);
            }
            stringParts.push(`A ${rx},${ry} 0 ${largest} ${sweep} ${part.x2},${part.y2}`);
            x = part.x2;
            y = part.y2;
          }
          break;
        }
        case 'curve':
          if (part.x2 === x && part.y2 === y) {
            stringParts.push(`C ${part.cpx2},${part.cpy2} ${part.cpx1},${part.cpy1} ${part.x1},${part.y1}`);
            x = part.x1;
            y = part.y1;
          } else {
            if (part.x1 !== x && part.y1 !== y) {
              console.warn('disconnected boundary; adding line');
              stringParts.push(`L ${part.x1},${part.y1}`);
            }
            stringParts.push(`C ${part.cpx1},${part.cpy1} ${part.cpx2},${part.cpy2} ${part.x2},${part.y2}`);
            x = part.x2;
            y = part.y2;
          }
          break;
        case 'line':
          if (part.x2 === x && part.y2 === y) {
            stringParts.push(`L ${part.x1},${part.y1}`);
            x = part.x1;
            y = part.y1;
          } else {
            if (part.x1 !== x && part.y1 !== y) {
              console.warn('disconnected boundary; adding line');
              stringParts.push(`L ${part.x1},${part.y1}`);
            }
            stringParts.push(`L ${part.x2},${part.y2}`);
            x = part.x2;
            y = part.y2;
          }
          break;
        default:
          assertNever(part);
      }
    }
    if (x !== firstPart.x1 || y !== firstPart.y1) {
      console.warn('unclosed boundary; closing');
      stringParts.push(`Z`);
    }
  } else {
    console.warn('empty boundary');
  }
  return stringParts.join(' ');
}

type FigureSvgProps = Readonly<{
  boundaryParts: FigureBoundaryPartList;
  highlighted?: boolean;
}>;

export const FigureSvg: React.FC<FigureSvgProps> = (props) => {
  return (
    <path
      d={pathFromBoundary(props.boundaryParts)}
      fill={props.highlighted ? 'orange' : 'gray'}
    />
  );
}
FigureSvg.displayName = 'FigureSvg';

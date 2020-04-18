import * as React from 'react';

import { assertNever } from '../../common';

export type ArcBoundaryPart = {
  readonly type: 'arc';
  readonly x1: number;
  readonly y1: number;
  readonly x2: number;
  readonly y2: number;
  readonly rx: number;
  readonly ry: number;
  readonly largest?: boolean;
  readonly ccw?: boolean;
};

export type CurveBoundaryPart = {
  readonly type: 'curve';
  readonly x1: number;
  readonly y1: number;
  readonly cpx1: number;
  readonly cpy1: number;
  readonly cpx2: number;
  readonly cpy2: number;
  readonly x2: number;
  readonly y2: number;
};

export type LineBoundaryPart = {
  readonly type: 'line';
  readonly x1: number;
  readonly y1: number;
  readonly x2: number;
  readonly y2: number;
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

export type FigureSvgProps = {
  readonly boundaryParts: FigureBoundaryPartList;
  readonly highlighted?: boolean;
};

export class FigureSvg extends React.PureComponent<FigureSvgProps> {

  public render(): JSX.Element | null {
    return <path
      d={pathFromBoundary(this.props.boundaryParts)}
      fill={this.props.highlighted ? 'orange' : 'gray'}
    />;
  }

}

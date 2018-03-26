import * as React from 'react';

import { assertNever } from '../../common';
import { borderClass } from '../../style';

import {
  ArcDiagramPart,
  CircleDiagramPart,
  CurveDiagramPart,
  Diagram,
  DiagramPart,
  DiagramPartState,
  DiagramPartStateMap,
  FigureDiagramPart,
  LineDiagramPart,
  PointDiagramPart,
} from '../types';

import { ArcSvg } from './ArcSvg';
import { CircleSvg } from './CircleSvg';
import { CurveSvg } from './CurveSvg';
import {
  CurveBoundaryPart,
  FigureBoundaryPart,
  FigureBoundaryPartList,
  FigureSvg,
  LineBoundaryPart,
} from './FigureSvg';
import { LineSvg } from './LineSvg';
import { PointSvg } from './PointSvg';

function isArc(dp: DiagramPart | null | undefined): dp is ArcDiagramPart {
  return dp ? dp.type === 'arc' : false;
}

function isCurve(dp: DiagramPart | null | undefined): dp is CurveDiagramPart {
  return dp ? dp.type === 'curve' : false;
}

function isLine(dp: DiagramPart | null | undefined): dp is LineDiagramPart {
  return dp ? dp.type === 'line' : false;
}

function isPoint(dp: DiagramPart | null | undefined): dp is PointDiagramPart {
  return dp ? dp.type === 'point' : false;
}

export type DiagramViewProps = {
  readonly diagram: Diagram;
  readonly diagramPartStates: DiagramPartStateMap;
};

export class DiagramView extends React.PureComponent<DiagramViewProps> {

  public render(): JSX.Element {
    const diagram = this.props.diagram;
    const states = this.props.diagramPartStates;
    const diagramElements: JSX.Element[] = [];
    const parts = diagram.parts;
    for (const key in parts) {
      if (parts.hasOwnProperty(key)) {
        const part = parts[key];
        const state = states[key];
        if (state === 'visible' || state === 'highlighted') {
          const element = part && this.renderDiagramPart(key, part, state);
          if (element) {
            diagramElements.push(element);
          }
        }
      }
    }
    return (
      <div className={borderClass}>
        <svg
          width={diagram.width}
          height={diagram.height}
          viewBox={`0 0 ${diagram.width} ${diagram.height}`}
        >
          {diagramElements}
        </svg>
      </div>
    );
  }

  private renderDiagramPart(key: string, part: DiagramPart, state: DiagramPartState): JSX.Element | null {
    switch (part.type) {
      case 'arc':
        return this.renderArc(key, part, state);
      case 'circle':
        return this.renderCircle(key, part, state);
      case 'curve':
        return this.renderCurve(key, part, state);
      case 'figure':
        return this.renderFigure(key, part, state);
      case 'line':
        return this.renderLine(key, part, state);
      case 'point':
        return this.renderPoint(key, part, state);
      default:
        assertNever(part);
        return null;
    }
  }

  private renderArc(key: string, arc: ArcDiagramPart, state: DiagramPartState): JSX.Element | null {
    const parts = this.props.diagram.parts;
    const p1 = parts[arc.p1];
    const p2 = parts[arc.p2];
    const center = parts[arc.center];
    if (isPoint(p1) && isPoint(p2) && isPoint(center)) {
      const rx = p1.x - center.x;
      const ry = p1.y - center.y;
      const r = Math.sqrt(rx * rx + ry * ry);
      return <ArcSvg
        key={key}
        x1={p1.x}
        y1={p1.y}
        x2={p2.x}
        y2={p2.y}
        rx={r}
        ry={r}
        largest={arc.largest}
        ccw={arc.ccw}
        label={key}
        labelDir={arc.labelDir}
        highlighted={state === 'highlighted'}
      />;
    } else {
      return null;
    }
  }

  private renderCircle(key: string, circle: CircleDiagramPart, state: DiagramPartState): JSX.Element | null {
    const parts = this.props.diagram.parts;
    const p1 = parts[circle.p1];
    const p2 = parts[circle.p2];
    if (isPoint(p1) && isPoint(p2)) {
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      const r = Math.sqrt(dx * dx + dy * dy);
      return <CircleSvg
        key={key}
        cx={p1.x}
        cy={p1.y}
        r={r}
        label={key}
        labelDir={circle.labelDir}
        highlighted={state === 'highlighted'}
      />;
    } else {
      return null;
    }
  }

  private renderCurve(key: string, curve: CurveDiagramPart, state: DiagramPartState): JSX.Element | null {
    const parts = this.props.diagram.parts;
    const p1 = parts[curve.p1];
    const cp1 = parts[curve.cp1];
    const cp2 = parts[curve.cp2];
    const p2 = parts[curve.p2];
    if (isPoint(p1) && isPoint(cp1) && isPoint(cp2) && isPoint(p2)) {
      return <CurveSvg
        key={key}
        x1={p1.x}
        y1={p1.y}
        cpx1={cp1.x}
        cpy1={cp1.y}
        cpx2={cp2.x}
        cpy2={cp2.y}
        x2={p2.x}
        y2={p2.y}
        highlighted={state === 'highlighted'}
      />;
    } else {
      return null;
    }
  }

  private renderFigure(key: string, figure: FigureDiagramPart, state: DiagramPartState): JSX.Element | null {
    const diagramParts = this.props.diagram.parts;
    const figureBoundaryParts: FigureBoundaryPart[] = [];
    for (const boundaryPartName of figure.boundary) {
      const boundaryPart = diagramParts[boundaryPartName];
      if (isArc(boundaryPart)) {
        const p1 = diagramParts[boundaryPart.p1];
        const p2 = diagramParts[boundaryPart.p2];
        const center = diagramParts[boundaryPart.center];
        if (isPoint(p1) && isPoint(p2) && isPoint(center)) {
          const rx = p1.x - center.x;
          const ry = p1.y - center.y;
          const r = Math.sqrt(rx * rx + ry * ry);
          figureBoundaryParts.push({
            type: 'arc',
            x1: p1.x,
            y1: p1.y,
            x2: p2.x,
            y2: p2.y,
            rx: r,
            ry: r,
            largest: boundaryPart.largest,
            ccw: boundaryPart.ccw,
          });
        }
      } else if (isCurve(boundaryPart)) {
        const p1 = diagramParts[boundaryPart.p1];
        const cp1 = diagramParts[boundaryPart.cp1];
        const cp2 = diagramParts[boundaryPart.cp2];
        const p2 = diagramParts[boundaryPart.p2];
        if (isPoint(p1) && isPoint(cp1) && isPoint(cp2) && isPoint(p2)) {
          figureBoundaryParts.push({
            type: 'curve',
            x1: p1.x,
            y1: p1.y,
            cpx1: cp1.x,
            cpy1: cp1.y,
            cpx2: cp2.x,
            cpy2: cp2.y,
            x2: p2.x,
            y2: p2.y,
          });
        }
      } else if (isLine(boundaryPart)) {
        const p1 = diagramParts[boundaryPart.p1];
        const p2 = diagramParts[boundaryPart.p2];
        if (isPoint(p1) && isPoint(p2)) {
          figureBoundaryParts.push({
            type: 'line',
            x1: p1.x,
            y1: p1.y,
            x2: p2.x,
            y2: p2.y,
          });
        }
      } else {
        console.warn(`unsupported boundary part: ${boundaryPartName}`);
      }
    }
    return <FigureSvg
      key={key}
      boundaryParts={figureBoundaryParts}
      highlighted={state === 'highlighted'}
    />;
  }

  private renderLine(key: string, line: LineDiagramPart, state: DiagramPartState): JSX.Element | null {
    const parts = this.props.diagram.parts;
    const p1 = parts[line.p1];
    const p2 = parts[line.p2];
    if (isPoint(p1) && isPoint(p2)) {
      return <LineSvg
        key={key}
        x1={p1.x}
        y1={p1.y}
        x2={p2.x}
        y2={p2.y}
        highlighted={state === 'highlighted'}
      />;
    } else {
      return null;
    }
  }

  private renderPoint(key: string, point: PointDiagramPart, state: DiagramPartState): JSX.Element {
    return <PointSvg
      key={key}
      x={point.x}
      y={point.y}
      label={key}
      labelX={point.labelX}
      labelY={point.labelY}
      highlighted={state === 'highlighted'}
    />;
  }

}

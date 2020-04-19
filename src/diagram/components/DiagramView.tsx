import * as React from 'react';

import { assertNever } from '../../common';
import { borderStyle, namedClass } from '../../style';
import {
  AngleDiagramPart,
  ArcDiagramPart,
  CircleDiagramPart,
  CurveDiagramPart,
  Diagram,
  DiagramPart,
  DiagramPartMap,
  DiagramPartState,
  DiagramPartStateMap,
  FigureDiagramPart,
  LineDiagramPart,
  PointDiagramPart,
  RightAngleDiagramPart,
} from '../types';
import { ArcSvg } from './ArcSvg';
import { CircleSvg } from './CircleSvg';
import { CurveSvg } from './CurveSvg';
import { FigureBoundaryPart, FigureSvg } from './FigureSvg';
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

const classPrefix = 'DiagramView';

const rootClass = namedClass(classPrefix, 'root',
  borderStyle,
  { backgroundColor: 'white' },
);

type DiagramViewProps = Readonly<{
  diagram: Diagram;
  diagramPartStates: DiagramPartStateMap;
}>;

export const DiagramView: React.FC<DiagramViewProps> = (props) => {
  const diagram = props.diagram;
  const states = props.diagramPartStates;
  const diagramElements: JSX.Element[] = [];
  const parts = diagram.parts;
  for (const key in parts) {
    if (Object.prototype.hasOwnProperty.call(parts, key)) {
      const part = parts[key];
      const state = states[key];
      if (state === 'visible' || state === 'highlighted') {
        const element = part && renderDiagramPart(key, part, parts, state);
        if (element) {
          diagramElements.push(element);
        }
      }
    }
  }
  return (
    <div className={rootClass}>
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
DiagramView.displayName = 'DiagramView';

function renderDiagramPart(
  key: string,
  part: DiagramPart,
  parts: DiagramPartMap,
  state: DiagramPartState,
): JSX.Element | null {
  switch (part.type) {
    case 'angle':
      return renderAngle(key, part, parts, state);
    case 'arc':
      return renderArc(key, part, parts, state);
    case 'circle':
      return renderCircle(key, part, parts, state);
    case 'curve':
      return renderCurve(key, part, parts, state);
    case 'figure':
      return renderFigure(key, part, parts, state);
    case 'line':
      return renderLine(key, part, parts, state);
    case 'point':
      return renderPoint(key, part, state);
    case 'rightangle':
      return renderRightAngle(key, part, parts, state);
    default:
      assertNever(part);
      return null;
  }
}

function renderAngle(
  key: string,
  angle: AngleDiagramPart,
  parts: DiagramPartMap,
  state: DiagramPartState,
): JSX.Element | null {
  const p1 = parts[angle.p1];
  const v = parts[angle.v];
  const p2 = parts[angle.p2];
  if (isPoint(v) && isPoint(p1) && isPoint(p2)) {
    const p1dx = p1.x - v.x;
    const p1dy = p1.y - v.y;
    const p1d = Math.sqrt(p1dx * p1dx + p1dy * p1dy);
    const p2dx = p2.x - v.x;
    const p2dy = p2.y - v.y;
    const p2d = Math.sqrt(p2dx * p2dx + p2dy * p2dy);
    const r = angle.r;
    return (
      <ArcSvg
        key={key}
        x1={v.x + r * p1dx / p1d}
        y1={v.y + r * p1dy / p1d}
        x2={v.x + r * p2dx / p2d}
        y2={v.y + r * p2dy / p2d}
        rx={r}
        ry={r}
        ccw={angle.ccw}
        label={key}
        labelDir={angle.labelDir}
        highlighted={state === 'highlighted'}
        className={angle.className}
        lineWidth={1}
        dasharray={'2'}
      />
    );
  } else {
    return null;
  }
}

function renderArc(
  key: string,
  arc: ArcDiagramPart,
  parts: DiagramPartMap,
  state: DiagramPartState,
): JSX.Element | null {
  const p1 = parts[arc.p1];
  const p2 = parts[arc.p2];
  const center = parts[arc.center];
  if (isPoint(p1) && isPoint(p2) && isPoint(center)) {
    const rx = p1.x - center.x;
    const ry = p1.y - center.y;
    const r = Math.sqrt(rx * rx + ry * ry);
    return (
      <ArcSvg
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
      />
    );
  } else {
    return null;
  }
}

function renderCircle(
  key: string,
  circle: CircleDiagramPart,
  parts: DiagramPartMap,
  state: DiagramPartState,
): JSX.Element | null {
  const p1 = parts[circle.p1];
  const p2 = parts[circle.p2];
  if (isPoint(p1) && isPoint(p2)) {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const r = Math.sqrt(dx * dx + dy * dy);
    return (
      <CircleSvg
        key={key}
        cx={p1.x}
        cy={p1.y}
        r={r}
        label={key}
        labelDir={circle.labelDir}
        highlighted={state === 'highlighted'}
      />
    );
  } else {
    return null;
  }
}

function renderCurve(
  key: string,
  curve: CurveDiagramPart,
  parts: DiagramPartMap,
  state: DiagramPartState,
): JSX.Element | null {
  const p1 = parts[curve.p1];
  const cp1 = parts[curve.cp1];
  const cp2 = parts[curve.cp2];
  const p2 = parts[curve.p2];
  if (isPoint(p1) && isPoint(cp1) && isPoint(cp2) && isPoint(p2)) {
    return (
      <CurveSvg
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
      />
    );
  } else {
    return null;
  }
}

function renderFigure(
  key: string,
  figure: FigureDiagramPart,
  diagramParts: DiagramPartMap,
  state: DiagramPartState,
): JSX.Element | null {
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
  return (
    <FigureSvg
      key={key}
      boundaryParts={figureBoundaryParts}
      highlighted={state === 'highlighted'}
    />
  );
}

function renderLine(
  key: string,
  line: LineDiagramPart,
  parts: DiagramPartMap,
  state: DiagramPartState,
): JSX.Element | null {
  const p1 = parts[line.p1];
  const p2 = parts[line.p2];
  if (isPoint(p1) && isPoint(p2)) {
    return (
      <LineSvg
        key={key}
        x1={p1.x}
        y1={p1.y}
        x2={p2.x}
        y2={p2.y}
        highlighted={state === 'highlighted'}
        className={line.className}
      />
    );
  } else {
    return null;
  }
}

function renderPoint(
  key: string,
  point: PointDiagramPart,
  state: DiagramPartState,
): JSX.Element {
  return (
    <PointSvg
      key={key}
      x={point.x}
      y={point.y}
      label={key}
      labelX={point.labelX}
      labelY={point.labelY}
      highlighted={state === 'highlighted'}
      className={point.className}
    />
  );
}

function renderRightAngle(
  key: string,
  angle: RightAngleDiagramPart,
  parts: DiagramPartMap,
  state: DiagramPartState,
): JSX.Element | null {
  const p1 = parts[angle.p1];
  const v = parts[angle.v];
  const p2 = parts[angle.p2];
  if (isPoint(v) && isPoint(p1) && isPoint(p2)) {
    const p1dx = p1.x - v.x;
    const p1dy = p1.y - v.y;
    const p1d = Math.sqrt(p1dx * p1dx + p1dy * p1dy);
    const p2dx = p2.x - v.x;
    const p2dy = p2.y - v.y;
    const p2d = Math.sqrt(p2dx * p2dx + p2dy * p2dy);
    const r = angle.r;
    const l1dx = r * p1dx / p1d;
    const l1dy = r * p1dy / p1d;
    const l2dx = r * p2dx / p2d;
    const l2dy = r * p2dy / p2d;
    const vdx = l1dx + l2dx;
    const vdy = l1dy + l2dy;
    return (
      <g key={key}>
        <LineSvg
          x1={v.x + vdx}
          y1={v.y + vdy}
          x2={v.x + l1dx}
          y2={v.y + l1dy}
          highlighted={state === 'highlighted'}
          className={angle.className}
          lineWidth={1}
          dasharray={'2'}
        />
        <LineSvg
          x1={v.x + vdx}
          y1={v.y + vdy}
          x2={v.x + l2dx}
          y2={v.y + l2dy}
          highlighted={state === 'highlighted'}
          className={angle.className}
          lineWidth={1}
          dasharray={'2'}
        />
      </g>
    );
  } else {
    return null;
  }
}

import * as React from 'react';

import { assertNever } from '../../common';
import { borderClass } from '../../style';

import {
  CircleDiagramPart,
  CurveDiagramPart,
  Diagram,
  DiagramPart,
  DiagramPartState,
  DiagramPartStateMap,
  LineDiagramPart,
  PointDiagramPart,
} from '../types';

import { CircleSvg } from './CircleSvg';
import { CurveSvg } from './CurveSvg';
import { LineSvg } from './LineSvg';
import { PointSvg } from './PointSvg';

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
        if (state === 'visible') {
          const element = part && this.renderDiagramPart(key, part, state);
          if (element) {
            diagramElements.push(element);
          }
        }
      }
    }
    for (const key in parts) {
      if (parts.hasOwnProperty(key)) {
        const part = parts[key];
        const state = states[key];
        if (state === 'highlighted') {
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
      case 'circle':
        return this.renderCircle(key, part, state);
      case 'curve':
        return this.renderCurve(key, part, state);
      case 'line':
        return this.renderLine(key, part, state);
        case 'point':
        return this.renderPoint(key, part, state);
      default:
        assertNever(part);
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
        cx1={cp1.x}
        cy1={cp1.y}
        cx2={cp2.x}
        cy2={cp2.y}
        x2={p2.x}
        y2={p2.y}
        highlighted={state === 'highlighted'}
      />;
    } else {
      return null;
    }
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

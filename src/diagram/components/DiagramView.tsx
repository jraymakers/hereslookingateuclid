import * as React from 'react';
import { borderClass } from '../../style';

import {
  CircleDiagramPart,
  Diagram,
  DiagramPart,
  DiagramPartState,
  DiagramPartStateMap,
  LineDiagramPart,
  PointDiagramPart,
} from '../types';

import { CircleSvg } from './CircleSvg';
import { LineSvg } from './LineSvg';
import { PointSvg } from './PointSvg';

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
      const part = parts[key];
      const state = states[key];
      if (state === 'visible') {
        const element = this.renderDiagramPart(key, part, state);
        if (element) {
          diagramElements.push(element);
        }
      }
    }
    for (const key in parts) {
      const part = parts[key];
      const state = states[key];
      if (state === 'highlighted') {
        const element = this.renderDiagramPart(key, part, state);
        if (element) {
          diagramElements.push(element);
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
      case 'point':
        return this.renderPoint(key, part, state);
      case 'line':
        return this.renderLine(key, part, state);
      case 'circle':
        return this.renderCircle(key, part, state);
      default:
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

  private renderLine(key: string, line: LineDiagramPart, state: DiagramPartState): JSX.Element | null {
    const parts = this.props.diagram.parts;
    const p1 = parts[line.p1];
    const p2 = parts[line.p2];
    if (p1 && p1.type === 'point' && p2 && p2.type === 'point') {
      return <LineSvg
        key={key}
        x1={p1.x}
        y1={p1.y}
        x2={p2.x}
        y2={p2.y}
        highlighted={state === 'highlighted'}
      />
    } else {
      return null;
    }
  }

  private renderCircle(key: string, circle: CircleDiagramPart, state: DiagramPartState): JSX.Element | null {
    const parts = this.props.diagram.parts;
    const p1 = parts[circle.p1];
    const p2 = parts[circle.p2];
    if (p1 && p1.type === 'point' && p2 && p2.type === 'point') {
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
        />
    } else {
      return null;
    }
  }

}

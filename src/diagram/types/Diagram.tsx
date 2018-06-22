export type AngleDiagramPart = {
  readonly type: 'angle';
  readonly p1: string; // point reference
  readonly v: string; // point reference
  readonly p2: string; // point reference
  readonly ccw?: boolean;
  readonly r: number;
  readonly labelDir?: number;
};

export type ArcDiagramPart = {
  readonly type: 'arc';
  readonly p1: string; // point reference
  readonly p2: string; // point reference
  readonly center: string; // point reference
  readonly largest?: boolean;
  readonly ccw?: boolean;
  readonly labelDir?: number;
};

export type CircleDiagramPart = {
  readonly type: 'circle';
  readonly p1: string; // center point reference
  readonly p2: string; // radius point reference
  readonly labelDir?: number;
};

export type CurveDiagramPart = {
  readonly type: 'curve';
  readonly p1: string; // point reference
  readonly cp1: string; // point reference
  readonly cp2: string; // point reference
  readonly p2: string; // point reference
};

export type FigureDiagramPart = {
  readonly type: 'figure';
  readonly boundary: ReadonlyArray<string>; // arc, curve or line references
};

export type LineDiagramPart = {
  readonly type: 'line';
  readonly p1: string; // point reference
  readonly p2: string; // point reference
  readonly className?: string;
};

export type PointDiagramPart = {
  readonly type: 'point';
  readonly x: number;
  readonly y: number;
  readonly labelX?: number;
  readonly labelY?: number;
  readonly className?: string;
};

export type DiagramPart =
  AngleDiagramPart |
  ArcDiagramPart |
  CircleDiagramPart |
  CurveDiagramPart |
  FigureDiagramPart |
  LineDiagramPart |
  PointDiagramPart;

export type DiagramPartMap = {
  readonly [key: string]: DiagramPart | null | undefined;
};

export type Diagram = {
  readonly width: number;
  readonly height: number;
  readonly parts: DiagramPartMap;
};

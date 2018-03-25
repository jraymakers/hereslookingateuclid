export type PointDiagramPart = {
  readonly type: 'point';
  readonly x: number;
  readonly y: number;
  readonly labelX?: number;
  readonly labelY?: number;
};

export type LineDiagramPart = {
  readonly type: 'line';
  readonly p1: string; // point reference
  readonly p2: string; // point reference
};

export type CircleDiagramPart = {
  readonly type: 'circle';
  readonly p1: string; // center point reference
  readonly p2: string; // radius point reference
  readonly labelDir: number;
};

export type DiagramPart =
  PointDiagramPart |
  LineDiagramPart |
  CircleDiagramPart;

export type DiagramPartMap = {
  readonly [key: string]: DiagramPart | null | undefined;
};

export type Diagram = {
  readonly width: number;
  readonly height: number;
  readonly parts: DiagramPartMap;
};

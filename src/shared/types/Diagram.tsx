export type PointDiagramPart = {
  readonly type: 'point';
  readonly x: number;
  readonly y: number;
  readonly labelDir: number; // see LabelSvgProps.dir
};

export type LineDiagramPart = {
  readonly type: 'line';
  readonly p1: string; // point reference
  readonly p2: string; // point reference
};

export type CircleDiagramPart = {
  readonly type: 'circle';
  readonly c: string; // center point reference
  readonly rp: string; // radius point reference
  readonly labelDir: number; // see LabelSvgProps.dir
};

export type DiagramPart =
  PointDiagramPart |
  LineDiagramPart |
  CircleDiagramPart;

export type DiagramPartMap = {
  readonly [key: string]: DiagramPart;
};

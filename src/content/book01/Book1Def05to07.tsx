import {
  Diagram,
  LabelDir,
} from '../../diagram';
import {
  definitionTitle,
} from '../../link';
import {
  italic,
  Paragraph,
} from '../../paragraph';
import {
  StepList,
} from '../../step';
import {
  StepsAndDiagram,
} from '../../stepsAndDiagram';

const width = 400;
const height = 400;
const centerX = width * 0.5;
const centerY = height * 0.5;

const figureWidth = width * 0.4;
const figureHeight = width * 0.3;
const slantX = width * 0.1;

const halfFigureWidth = figureWidth * 0.5;
const halfSlantX = slantX * 0.5;

const cpXOffset = figureWidth * 0.3;
const cpYOffset = figureHeight * 0.3;

const aX = centerX - halfFigureWidth + halfSlantX;
const aY = height * 0.1;
const bX = centerX + halfFigureWidth + halfSlantX;
const bY = aY;
const abcp1X = aX + cpXOffset;
const abcp1Y = aY - cpYOffset;
const abcp2X = bX - cpXOffset;
const abcp2Y = bY + cpYOffset;

const cX = bX - slantX;
const cY = bY + figureHeight;
const dX = aX - slantX;
const dY = cY;
const cdcp1X = cX - cpXOffset;
const cdcp1Y = cY + cpYOffset;
const cdcp2X = dX + cpXOffset;
const cdcp2Y = dY - cpYOffset;

const eX = aX;
const eY = centerY + aY;
const fX = bX;
const fY = centerY + bY;
const gX = cX;
const gY = centerY + cY;
const hX = dX;
const hY = centerY + dY;

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['ABCD']: { type: 'figure', boundary: [ 'AB', 'BC', 'CD', 'AD' ] },
    ['EFGH']: { type: 'figure', boundary: [ 'EF', 'FG', 'GH', 'EH' ] },
    ['AB']: { type: 'curve', p1: 'A', cp1: 'abcp1', cp2: 'abcp2', p2: 'B' },
    ['BC']: { type: 'line', p1: 'B', p2: 'C' },
    ['CD']: { type: 'curve', p1: 'C', cp1: 'cdcp1', cp2: 'cdcp2', p2: 'D' },
    ['AD']: { type: 'line', p1: 'A', p2: 'D' },
    ['EF']: { type: 'line', p1: 'E', p2: 'F' },
    ['FG']: { type: 'line', p1: 'F', p2: 'G' },
    ['GH']: { type: 'line', p1: 'G', p2: 'H' },
    ['EH']: { type: 'line', p1: 'E', p2: 'H' },
    ['A']: { type: 'point', x: aX, y: aY },
    ['B']: { type: 'point', x: bX, y: bY },
    ['C']: { type: 'point', x: cX, y: cY },
    ['D']: { type: 'point', x: dX, y: dY },
    ['abcp1']: { type: 'point', x: abcp1X, y: abcp1Y },
    ['abcp2']: { type: 'point', x: abcp2X, y: abcp2Y },
    ['cdcp1']: { type: 'point', x: cdcp1X, y: cdcp1Y },
    ['cdcp2']: { type: 'point', x: cdcp2X, y: cdcp2Y },
    ['E']: { type: 'point', x: eX, y: eY },
    ['F']: { type: 'point', x: fX, y: fY },
    ['G']: { type: 'point', x: gX, y: gY },
    ['H']: { type: 'point', x: hX, y: hY },
  },
};

const steps: StepList = [
  {
    name: '5',
    text: [
      ['A ', italic('surface'), ' is that which has length and breadth only.'],
    ],
    highlight: [ 'ABCD' ],
  },
  {
    name: '6',
    text: [
      ['The edges of a surface are lines.'],
    ],
    highlight: [ 'AB', 'BC', 'CD', 'AD' ],
  },
  {
    name: '7',
    text: [
      ['A ', italic('plane surface'), ' is a surface which lies evenly with the straight lines on itself.'],
    ],
    highlight: [ 'EFGH' ],
  },
];

const name = '5-7';
const title = definitionTitle(name);
const summary: Paragraph = [
  ['Surfaces'],
];

const definitionGroup: StepsAndDiagram = {
  name,
  title,
  summary,
  diagram,
  steps,
};

export default definitionGroup;

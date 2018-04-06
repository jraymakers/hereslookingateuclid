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

const aX = width * 0.15;
const aY = height * 0.1;
const bX = aX + width * 0.2;
const bY = aY;
const cX = bX;
const cY = bY + width * 0.2;
const dX = aX;
const dY = cY;

const eX = width * 0.6;
const eY = aY;
const fX = eX + width * 0.3;
const fY = eY;
const gX = fX;
const gY = cY;
const hX = eX;
const hY = gY;

const jX = width * 0.075 + width * 0.2 / Math.sqrt(3);
const jY = height * 0.4;
const kX = jX + width * 0.4 / Math.sqrt(3);
const kY = jY;
const lX = kX - width * 0.2 / Math.sqrt(3);
const lY = kY + width * 0.2;
const mX = lX - width * 0.4 / Math.sqrt(3);
const mY = lY;

const nX = width * 0.475 + width * 0.2 / Math.sqrt(3);
const nY = height * 0.4;
const oX = nX + width * 0.6 / Math.sqrt(3);
const oY = nY;
const pX = oX - width * 0.2 / Math.sqrt(3);
const pY = oY + width * 0.2;
const qX = pX - width * 0.6 / Math.sqrt(3);
const qY = pY;

const rX = width * 0.3;
const rY = height * 0.7;
const sX = rX + width * 0.4;
const sY = rY + width * 0.1;
const tX = sX - width * 0.1;
const tY = sY + width * 0.15;
const uX = tX - width * 0.25;
const uY = tY;

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['ABCD']: { type: 'figure', boundary: [ 'AB', 'BC', 'CD', 'AD' ] },
    ['EFGH']: { type: 'figure', boundary: [ 'EF', 'FG', 'GH', 'EH' ] },
    ['JKLM']: { type: 'figure', boundary: [ 'JK', 'KL', 'LM', 'JM' ] },
    ['NOPQ']: { type: 'figure', boundary: [ 'NO', 'OP', 'PQ', 'NQ' ] },
    ['RSTU']: { type: 'figure', boundary: [ 'RS', 'ST', 'TU', 'RU' ] },

    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['BC']: { type: 'line', p1: 'B', p2: 'C' },
    ['CD']: { type: 'line', p1: 'C', p2: 'D' },
    ['AD']: { type: 'line', p1: 'A', p2: 'D' },

    ['EF']: { type: 'line', p1: 'E', p2: 'F' },
    ['FG']: { type: 'line', p1: 'F', p2: 'G' },
    ['GH']: { type: 'line', p1: 'G', p2: 'H' },
    ['EH']: { type: 'line', p1: 'E', p2: 'H' },

    ['JK']: { type: 'line', p1: 'J', p2: 'K' },
    ['KL']: { type: 'line', p1: 'K', p2: 'L' },
    ['LM']: { type: 'line', p1: 'L', p2: 'M' },
    ['JM']: { type: 'line', p1: 'J', p2: 'M' },

    ['NO']: { type: 'line', p1: 'N', p2: 'O' },
    ['OP']: { type: 'line', p1: 'O', p2: 'P' },
    ['PQ']: { type: 'line', p1: 'P', p2: 'Q' },
    ['NQ']: { type: 'line', p1: 'N', p2: 'Q' },

    ['RS']: { type: 'line', p1: 'R', p2: 'S' },
    ['ST']: { type: 'line', p1: 'S', p2: 'T' },
    ['TU']: { type: 'line', p1: 'T', p2: 'U' },
    ['RU']: { type: 'line', p1: 'R', p2: 'U' },

    ['A']: { type: 'point', x: aX, y: aY },
    ['B']: { type: 'point', x: bX, y: bY },
    ['C']: { type: 'point', x: cX, y: cY },
    ['D']: { type: 'point', x: dX, y: dY },

    ['E']: { type: 'point', x: eX, y: eY },
    ['F']: { type: 'point', x: fX, y: fY },
    ['G']: { type: 'point', x: gX, y: gY },
    ['H']: { type: 'point', x: hX, y: hY },

    ['J']: { type: 'point', x: jX, y: jY },
    ['K']: { type: 'point', x: kX, y: kY },
    ['L']: { type: 'point', x: lX, y: lY },
    ['M']: { type: 'point', x: mX, y: mY },

    ['N']: { type: 'point', x: nX, y: nY },
    ['O']: { type: 'point', x: oX, y: oY },
    ['P']: { type: 'point', x: pX, y: pY },
    ['Q']: { type: 'point', x: qX, y: qY },

    ['R']: { type: 'point', x: rX, y: rY },
    ['S']: { type: 'point', x: sX, y: sY },
    ['T']: { type: 'point', x: tX, y: tY },
    ['U']: { type: 'point', x: uX, y: uY },

  },
};

const steps: StepList = [
  {
    name: '22a',
    text: [
      ['Of quadrilateral figures, a ',
       italic('square'), ' is that which is both equilateral and right-angled;'],
    ],
    show: [ 'AB', 'BC', 'CD', 'AD' ],
    highlight: [ 'ABCD' ],
  },
  {
    name: '22b',
    text: [
      ['an ', italic('oblong'), ' that which is right-angled but not equilateral;'],
    ],
    show: [ 'EF', 'FG', 'GH', 'EH' ],
    highlight: [ 'EFGH' ],
  },
  {
    name: '22c',
    text: [
      ['a ', italic('rhombus'), ' that which is equilateral but not right-angled;'],
    ],
    show: [ 'JK', 'KL', 'LM', 'JM' ],
    highlight: [ 'JKLM' ],
  },
  {
    name: '22d',
    text: [
      ['and a ', italic('rhomboid'), ' that which has its opposite sides and angles equal to one another ',
       'but is neither equilateral nor right-angled.'],
    ],
    show: [ 'NO', 'OP', 'PQ', 'NQ' ],
    highlight: [ 'NOPQ' ],
  },
  {
    name: '22e',
    text: [
      ['And let quadrilaterals other than these be called ', italic('trapezia'), '.'],
    ],
    show: [ 'RS', 'ST', 'TU', 'RU' ],
    highlight: [ 'RSTU' ],
  },
];

const name = '22';
const title = definitionTitle(name);
const summary: Paragraph = [
  ['Quadrilateral Figures'],
];

const definitionGroup: StepsAndDiagram = {
  name,
  title,
  summary,
  diagram,
  steps,
};

export default definitionGroup;

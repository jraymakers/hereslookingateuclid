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

const aX = width * 0.25;
const aY = height * 0.1;
const bX = width * 0.1;
const bY = height * 0.25;
const cX = width * 0.4;
const cY = bY;

const abcp1X = aX - width * 0.2;
const abcp1Y = aY + width * 0.1;
const abcp2X = bX + width * 0.2;
const abcp2Y = bY - width * 0.1;

const bccp1X = bX + width * 0.15;
const bccp1Y = bY + width * 0.1;
const bccp2X = cX - width * 0.15;
const bccp2Y = cY - width * 0.1;

const dX = width * 0.75;
const dY = height * 0.1;
const eX = width * 0.6;
const eY = height * 0.25;
const fX = width * 0.9;
const fY = eY;

const gX = width * 0.25;
const gY = height * 0.6;
const hX = width * 0.75;
const hY = gY;
const jX = width * 0.5;
const jY = height * 0.4;
const kX = jX;
const kY = gY;

const lX = width * 0.1;
const lY = height * 0.75;
const mX = width * 0.2;
const mY = height * 0.9;
const nX = width * 0.4;
const nY = mY;

const oX = width * 0.8;
const oY = height * 0.75;
const pX = width * 0.7;
const pY = height * 0.9;
const qX = width * 0.9;
const qY = mY;

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['AB']: { type: 'curve', p1: 'A', cp1: 'abcp1', cp2: 'abcp2', p2: 'B' },
    ['BC']: { type: 'curve', p1: 'B', cp1: 'bccp1', cp2: 'bccp2', p2: 'C' },
    ['DE']: { type: 'line', p1: 'D', p2: 'E' },
    ['EF']: { type: 'line', p1: 'E', p2: 'F' },
    ['GH']: { type: 'line', p1: 'G', p2: 'H' },
    ['JK']: { type: 'line', p1: 'J', p2: 'K' },
    ['LM']: { type: 'line', p1: 'L', p2: 'M' },
    ['MN']: { type: 'line', p1: 'M', p2: 'N' },
    ['OP']: { type: 'line', p1: 'O', p2: 'P' },
    ['PQ']: { type: 'line', p1: 'P', p2: 'Q' },
    ['A']: { type: 'point', x: aX, y: aY },
    ['B']: { type: 'point', x: bX, y: bY },
    ['C']: { type: 'point', x: cX, y: cY },
    ['abcp1']: { type: 'point', x: abcp1X, y: abcp1Y },
    ['abcp2']: { type: 'point', x: abcp2X, y: abcp2Y },
    ['bccp1']: { type: 'point', x: bccp1X, y: bccp1Y },
    ['bccp2']: { type: 'point', x: bccp2X, y: bccp2Y },
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
  },
};

const steps: StepList = [
  {
    name: '8',
    text: [
      ['A ', italic('plane angle'), ' is the inclination to one another of two lines in a plane ',
       'which meet one another and do not lie in a straight line.'],
    ],
    highlight: [ 'AB', 'BC' ],
  },
  {
    name: '9',
    text: [
      ['And when the lines containing the angle are straight, the angle is called ',
       italic('rectilinear'), '.'],
    ],
    highlight: [ 'DE', 'EF' ],
  },
  {
    name: '10',
    text: [
      ['When a straight line standing on a straight line makes the adjacent angles equal to one another, ',
       'each of the equal angles is ',
       italic('right'), ' and the straight line standing on the other is called a ',
       italic('perpendicular'), ' to that on which it stands.'],
    ],
    highlight: [ 'GH', 'JK' ],
  },
  {
    name: '11',
    text: [
      ['An ', italic('obtuse angle'), ' is an angle greater than a right angle.'],
    ],
    highlight: [ 'LM', 'MN' ],
  },
  {
    name: '12',
    text: [
      ['An ', italic('acute angle'), ' is an angle less than a right angle.'],
    ],
    highlight: [ 'OP', 'PQ' ],
  },
];

const name = '8-12';
const title = definitionTitle(name);
const summary: Paragraph = [
  ['Angles'],
];

const definitionGroup: StepsAndDiagram = {
  name,
  title,
  summary,
  diagram,
  steps,
};

export default definitionGroup;

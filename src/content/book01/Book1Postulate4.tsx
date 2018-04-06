import {
  Diagram,
  LabelDir,
} from '../../diagram';
import {
  postulateTitle,
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

const aX = width * 0.4;
const aY = height * 0.15;
const bX = aX;
const bY = aY + height * 0.2;
const cX = aX + width * 0.3;
const cY = bY;

const dX = width * 0.6;
const dY = height * 0.55;
const eX = dX;
const eY = dY + height * 0.3;
const fX = dX - width * 0.4;
const fY = eY;

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['BC']: { type: 'line', p1: 'B', p2: 'C' },

    ['DE']: { type: 'line', p1: 'D', p2: 'E' },
    ['EF']: { type: 'line', p1: 'E', p2: 'F' },

    ['A']: { type: 'point', x: aX, y: aY, labelX: -12 },
    ['B']: { type: 'point', x: bX, y: bY, labelX: -12 },
    ['C']: { type: 'point', x: cX, y: cY, labelX: 12 },

    ['D']: { type: 'point', x: dX, y: dY, labelX: 12 },
    ['E']: { type: 'point', x: eX, y: eY, labelX: 12 },
    ['F']: { type: 'point', x: fX, y: fY, labelX: -12 },
  },
};

const steps: StepList = [
  {
    name: '4a',
    text: [
      ['Let ABC and DEF be right angles.'],
    ],
    show: [ 'A', 'B', 'C', 'D', 'E', 'F' ],
    highlight: [ 'AB', 'BC', 'DE', 'EF' ],
  },
  {
    name: '4b',
    text: [
      ['Then the angle ABC equals the angle DEF.'],
    ],
    highlight: [ 'AB', 'BC', 'DE', 'EF' ],
  },
];

const name = '4';
const title = postulateTitle(name);
const summary: Paragraph = [
  ['All right angles equal one another.'],
];

const postulate: StepsAndDiagram = {
  name,
  title,
  summary,
  diagram,
  steps,
};

export default postulate;

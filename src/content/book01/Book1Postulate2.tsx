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

const aX = width * 0.3;
const aY = height * 0.5;
const bX = width * 0.5;
const bY = aY;
const cX = width * 0.8;
const cY = aY;

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['BC']: { type: 'line', p1: 'B', p2: 'C' },

    ['A']: { type: 'point', x: aX, y: aY, labelY: -12 },
    ['B']: { type: 'point', x: bX, y: bY, labelY: -12 },
    ['C']: { type: 'point', x: cX, y: cY, labelY: -12 },
  },
};

const steps: StepList = [
  {
    name: '2a',
    text: [
      ['Let AB be the given straight line.'],
    ],
    show: [ 'A', 'B' ],
    highlight: [ 'AB' ],
  },
  {
    name: '2b',
    text: [
      ['Then AB can be ', italic('extended'), ' from A to B by choosing a point C',
       ' and constructing the straight line BC such that B is on the straight line AC.'],
    ],
    highlight: [ 'C', 'BC' ],
  },
];

const name = '2';
const title = postulateTitle(name);
const summary: Paragraph = [
  ['Extend a finite straight line continuously in a straight line.'],
];

const postulate: StepsAndDiagram = {
  name,
  title,
  summary,
  diagram,
  steps,
};

export default postulate;

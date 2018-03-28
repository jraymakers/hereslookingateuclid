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
const aX = width * 0.5;
const aY = height * 0.24;
const bX = width * 0.25;
const bY = height * 0.5;
const cX = width * 0.75;
const cY = height * 0.5;
const dX = width * 0.35;
const dY = height * 0.75;
const eX = width * 0.65;
const eY = height * 0.75;
const cp1X = width * 0.4;
const cp1Y = height * 0.4;
const cp2X = width * 0.6;
const cp2Y = height * 0.6;

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['BC']: { type: 'curve', p1: 'B', cp1: 'cp1', cp2: 'cp2', p2: 'C' },
    ['DE']: { type: 'line', p1: 'D', p2: 'E' },
    ['A']: { type: 'point', x: aX, y: aY, labelY: -12 },
    ['B']: { type: 'point', x: bX, y: bY, labelX: -12 },
    ['C']: { type: 'point', x: cX, y: cY, labelX:  12 },
    ['D']: { type: 'point', x: dX, y: dY, labelX: -12 },
    ['E']: { type: 'point', x: eX, y: eY, labelX:  12 },
    ['cp1']: { type: 'point', x: cp1X, y: cp1Y },
    ['cp2']: { type: 'point', x: cp2X, y: cp2Y },
  },
};

const steps: StepList = [
  {
    name: '1',
    text: [
      ['A ', italic('point'), ' is that which has no part.'],
    ],
    highlight: [ 'A' ],
  },
  {
    name: '2',
    text: [
      ['A ', italic('line'), ' is breadthless length.'],
    ],
    highlight: [ 'BC' ],
  },
  {
    name: '3',
    text: [
      ['The ends of a line are points.'],
    ],
    highlight: [ 'B', 'C' ],
  },
  {
    name: '4',
    text: [
      ['A ', italic('straight line'), ' is a line which lies evenly with the points on itself.'],
    ],
    highlight: [ 'D', 'E', 'DE' ],
  },
];

const name = '1-4';
const title = definitionTitle(name);
const summary: Paragraph = [
  ['Points and lines'],
];

const definitionGroup: StepsAndDiagram = {
  name,
  title,
  summary,
  diagram,
  steps,
};

export default definitionGroup;

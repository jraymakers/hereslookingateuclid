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
const aY = height * 0.1;
const bX = width * 0.8;
const bY = height * 0.7;
const cX = width * 0.2;
const cY = height * 0.8;

const abcp1X = aX + width * 0.2;
const abcp1Y = aY - width * 0.1;
const abcp2X = bX + width * 0.2;
const abcp2Y = bY - width * 0.2;

const bccp1X = bX - width * 0.2;
const bccp1Y = bY + width * 0.2;
const bccp2X = cX - width * 0.2;
const bccp2Y = cY + width * 0.2;

const accp1X = aX - width * 0.2;
const accp1Y = aY + width * 0.1;
const accp2X = cX + width * 0.2;
const accp2Y = cY - width * 0.2;

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['ABC']: { type: 'figure', boundary: [ 'AB', 'BC', 'AC' ] },
    ['AB']: { type: 'curve', p1: 'A', cp1: 'abcp1', cp2: 'abcp2', p2: 'B' },
    ['BC']: { type: 'curve', p1: 'B', cp1: 'bccp1', cp2: 'bccp2', p2: 'C' },
    ['AC']: { type: 'curve', p1: 'A', cp1: 'accp1', cp2: 'accp2', p2: 'C' },
    ['A']: { type: 'point', x: aX, y: aY },
    ['B']: { type: 'point', x: bX, y: bY },
    ['C']: { type: 'point', x: cX, y: cY },
    ['abcp1']: { type: 'point', x: abcp1X, y: abcp1Y },
    ['abcp2']: { type: 'point', x: abcp2X, y: abcp2Y },
    ['bccp1']: { type: 'point', x: bccp1X, y: bccp1Y },
    ['bccp2']: { type: 'point', x: bccp2X, y: bccp2Y },
    ['accp1']: { type: 'point', x: accp1X, y: accp1Y },
    ['accp2']: { type: 'point', x: accp2X, y: accp2Y },
  },
};

const steps: StepList = [
  {
    name: '13',
    text: [
      ['A ', italic('boundary'), ' is that which is an extremity of anything.'],
    ],
    highlight: [ 'AB', 'BC', 'AC' ],
  },
  {
    name: '14',
    text: [
      ['A ', italic('figure'), ' is that which is contained by any boundary or boundaries.'],
    ],
    highlight: [ 'ABC' ],
  },
];

const name = '13-14';
const title = definitionTitle(name);
const summary: Paragraph = [
  ['Figures'],
];

const definitionGroup: StepsAndDiagram = {
  name,
  title,
  summary,
  diagram,
  steps,
};

export default definitionGroup;

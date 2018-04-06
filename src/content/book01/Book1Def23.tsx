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

const aX = 0;
const aY = height * 0.4;
const bX = width;
const bY = height * 0.3;
const cX = aX;
const cY = aY + height * 0.3;
const dX = bX;
const dY = bY + height * 0.3;

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['CD']: { type: 'line', p1: 'C', p2: 'D' },

    ['A']: { type: 'point', x: aX, y: aY },
    ['B']: { type: 'point', x: bX, y: bY },
    ['C']: { type: 'point', x: cX, y: cY },
    ['D']: { type: 'point', x: dX, y: dY },
  },
};

const steps: StepList = [
  {
    name: '23',
    text: [
      [italic('Parallel'), ' straight lines are straight lines which, ',
       'being in the same plane and being produced indefinitely in both directions, ',
       'do not meet one another in either direction.'],
    ],
    highlight: [ 'AB', 'CD' ],
  },
];

const name = '23';
const title = definitionTitle(name);
const summary: Paragraph = [
  ['Parallel Lines'],
];

const definitionGroup: StepsAndDiagram = {
  name,
  title,
  summary,
  diagram,
  steps,
};

export default definitionGroup;

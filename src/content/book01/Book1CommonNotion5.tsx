import {
  Diagram,
  LabelDir,
} from '../../diagram';
import {
  commonNotionTitle,
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

import { Greek } from '../Greek';

const width = 400;
const height = 400;

const aX = width * 0.4;
const aY = width * 0.5;
const bX = width * 0.6;
const bY = width * 0.5;
const cX = aX - width * 0.2 * Math.cos(Math.PI / 4);
const cY = aY + width * 0.2 * Math.sin(Math.PI / 4);
const dX = bX + width * 0.2 * Math.cos(Math.PI / 6);
const dY = bY + width * 0.2 * Math.sin(Math.PI / 6);

const diagram: Diagram = {
  width,
  height,
  parts: {
    [Greek.alpha]: { type: 'circle', p1: 'A', p2: 'B' },
    [Greek.beta]: { type: 'circle', p1: 'B', p2: 'A' },

    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['AC']: { type: 'line', p1: 'A', p2: 'C' },
    ['BC']: { type: 'line', p1: 'B', p2: 'D' },

    ['A']: { type: 'point', x: aX, y: aY, labelX: -10, labelY: -10 },
    ['B']: { type: 'point', x: bX, y: bY, labelX:  10, labelY: -10 },
    ['C']: { type: 'point', x: cX, y: cY, labelX: -10, labelY:  10 },
    ['D']: { type: 'point', x: dX, y: dY, labelX:  10, labelY:  10 },
  },
};

const steps: StepList = [
  {
    name: 'a',
    text: [
      ['Example:'],
    ],
    highlight: [ ],
  },
];

const name = '5';
const title = commonNotionTitle(name);
const summary: Paragraph = [
  ['The whole is greater than the part.'],
];

const postulate: StepsAndDiagram = {
  name,
  title,
  summary,
  diagram,
  steps,
};

export default postulate;

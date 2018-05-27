import {
  Diagram,
  LabelDir,
} from '../../diagram';
import {
  commonNotionRefLink,
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
    [Greek.alpha]: { type: 'circle', p1: 'A', p2: 'B', labelDir: LabelDir.W },
    [Greek.beta]: { type: 'circle', p1: 'B', p2: 'A', labelDir: LabelDir.E },

    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['AC']: { type: 'line', p1: 'A', p2: 'C' },
    ['BD']: { type: 'line', p1: 'B', p2: 'D' },

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
      [`Example: Let AB and AC be radii of circle ${Greek.alpha}. So AB equals AC.`],
    ],
    highlight: [ 'A', 'B', 'C', 'AB', 'AC', Greek.alpha ],
  },
  {
    name: 'b',
    text: [
      [`And let AB and BD be radii of circle ${Greek.beta}. So AB equals BD.`],
    ],
    highlight: [ 'A', 'B', 'D', 'AB', 'BD', Greek.beta ],
  },
  {
    name: 'c',
    text: [
      [`Since both AC and BD equal AB, then AC equals BD.`],
    ],
    link: commonNotionRefLink('I', '1'),
    highlight: [ 'AC', 'BD' ],
  },
];

const name = '1';
const title = commonNotionTitle(name);
const summary: Paragraph = [
  ['Things which equal the same thing also equal one another.'],
];

const postulate: StepsAndDiagram = {
  name,
  title,
  summary,
  diagram,
  steps,
};

export default postulate;

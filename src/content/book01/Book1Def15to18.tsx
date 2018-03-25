import {
  Diagram,
  LabelDir,
} from '../../diagram';
import {
  defGroupTitle,
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

const r = width * 0.3;
const aX = width * 0.5;
const aY = height * 0.5;
const bX = aX - r;
const bY = aY;
const cX = aX + r;
const cY = aY;

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['circle']: { type: 'figure', boundary: [ 'BC', 'CB' ] },
    ['semicircle']: { type: 'figure', boundary: [ 'BC' ] },
    ['BC']: { type: 'arc', p1: 'B', p2: 'C', center: 'A' },
    ['CB']: { type: 'arc', p1: 'C', p2: 'B', center: 'A' },
    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['AC']: { type: 'line', p1: 'A', p2: 'C' },
    ['A']: { type: 'point', x: aX, y: aY, labelY: 15 },
    ['B']: { type: 'point', x: bX, y: bY },
    ['C']: { type: 'point', x: cX, y: cY },
  },
};

const steps: StepList = [
  {
    name: '15',
    text: [
      ['A ', italic('circle'), ' is a plane figure contained by one line such that all the straight lines ',
       'falling upon it from one point among those lying within the figure equal one another.'],
    ],
    highlight: [ 'circle', 'BC', 'CB' ],
  },
  {
    name: '16',
    text: [
      ['And the point is called the ', italic('center'), ' of the circle.'],
    ],
    highlight: [ 'A' ],
  },
  {
    name: '17',
    text: [
      ['A ', italic('diameter'), ' of the circle is any straight line drawn through the center ',
       'and terminated in both directions by the circumference of the circle, ',
       'and such a straight line also bisects the circle.'],
    ],
    highlight: [ 'AB', 'AC' ],
  },
  {
    name: '18',
    text: [
      ['A ', italic('semicircle'), ' is the figure contained by the diameter ',
       'and the circumference cut off by it.'],
      ['And the center of the semicircle is of the same as that of the circle.'],
    ],
    highlight: [ 'semicircle' ],
  },
];

const name = '15-18';
const title = defGroupTitle(name, steps.length);
const summary: Paragraph = [
  ['Circles'],
];

const definitionGroup: StepsAndDiagram = {
  name,
  title,
  summary,
  diagram,
  steps,
};

export default definitionGroup;

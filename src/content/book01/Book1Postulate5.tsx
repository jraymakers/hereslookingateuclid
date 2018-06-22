import {
  Diagram,
  LabelDir,
} from '../../diagram';
import {
  postulateTitle,
} from '../../link';
import {
  stepsAndDiagramPageData,
} from '../../page';
import {
  Paragraph,
  ParagraphList,
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
const aY = height * 0.4;
const bX = aX + width * 0.2;
const bY = aY;
const cX = bX + width * 0.2;
const cY = aY;

const dX = width * 0.5;
const dY = height * 0.6;
const eX = dX + width * 0.2;
const eY = dY + height * 0.1;
const fX = eX + width * 0.2;
const fY = eY + height * 0.1;

const gX = width * 0.1;
const gY = height * 0.4;

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['BC']: { type: 'line', p1: 'B', p2: 'C' },

    ['DE']: { type: 'line', p1: 'D', p2: 'E' },
    ['EF']: { type: 'line', p1: 'E', p2: 'F' },

    ['BE']: { type: 'line', p1: 'B', p2: 'E' },

    ['AG']: { type: 'line', p1: 'A', p2: 'G' },
    ['DG']: { type: 'line', p1: 'D', p2: 'G' },

    ['∠ABE']: { type: 'angle', p1: 'A', v: 'B', p2: 'E', r: 20, ccw: true },
    ['∠BED']: { type: 'angle', p1: 'B', v: 'E', p2: 'D', r: 20, ccw: true },

    ['A']: { type: 'point', x: aX, y: aY, labelY: -12 },
    ['B']: { type: 'point', x: bX, y: bY, labelY: -12 },
    ['C']: { type: 'point', x: cX, y: cY, labelY: -12 },

    ['D']: { type: 'point', x: dX, y: dY, labelY: 12 },
    ['E']: { type: 'point', x: eX, y: eY, labelY: 12 },
    ['F']: { type: 'point', x: fX, y: fY, labelY: 12 },

    ['G']: { type: 'point', x: gX, y: gY, labelX: -12 },
  },
};

const steps: StepList = [
  {
    name: '5',
    text: [
      ['If a straight line falling on two straight lines makes the interior angles on the same side ',
       'less than two right angles, the two straight lines, if extended indefinitely, ',
       'meet on that side on which are the angles less than two right angles.'],
    ],
  },
  {
    name: 'a',
    text: [
      ['In other words: Given two straight lines AC and DF,'],
    ],
    show: [ 'A', 'C', 'D', 'F' ],
    highlight: [ 'AB', 'BC', 'DE', 'EF' ],
  },
  {
    name: 'b',
    text: [
      ['a point B between A and C,'],
    ],
    highlight: [ 'B' ],
  },
  {
    name: 'c',
    text: [
      ['a point E between D and F,'],
    ],
    highlight: [ 'E' ],
  },
  {
    name: 'd',
    text: [
      ['and the straight line BE'],
    ],
    highlight: [ 'BE' ],
  },
  {
    name: 'e',
    text: [
      ['such that the two angles ∠ABE and ∠BED total less than two right angles,'],
    ],
    highlight: [ 'AB', 'BE', 'DE', '∠ABE', '∠BED' ],
  },
  {
    name: 'f',
    text: [
      ['then, if AC and DF are extended in the directions of A and D, they meet at a point G.'],
    ],
    hide: [ '∠ABE', '∠BED' ],
    highlight: [ 'G', 'AG', 'DG' ],
  },
];

const name = '5';
const title = postulateTitle(name);
const summary: Paragraph = [
  ['The Parallel Postulate'],
];

const stepsAndDiagram: StepsAndDiagram = {
  title,
  summary,
  diagram,
  steps,
};

const pageData = stepsAndDiagramPageData(name, title, stepsAndDiagram);

export default pageData;

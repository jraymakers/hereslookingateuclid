import {
  Diagram,
  LabelDir,
} from '../../diagram';
import {
  commonNotionRefLink,
  definitionRefLink,
  postulateRefLink,
  propositionRefLink,
  propositionTitle,
} from '../../link';
import {
  stepsAndDiagramPageData,
} from '../../page';
import {
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
const bX = width * 0.2;
const bY = height * 0.9;
const cX = width * 0.8;
const cY = bY;
const dX = bX + 0.6 * (aX - bX);
const dY = bY + 0.6 * (aY - bY);

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['AC']: { type: 'line', p1: 'A', p2: 'C' },
    ['BC']: { type: 'line', p1: 'B', p2: 'C' },
    ['BD']: { type: 'line', p1: 'B', p2: 'D' },
    ['CD']: { type: 'line', p1: 'C', p2: 'D' },

    ['∠ABC']: { type: 'angle', p1: 'A', v: 'B', p2: 'C', r: 35, ccw: false },
    ['∠ACB']: { type: 'angle', p1: 'A', v: 'C', p2: 'B', r: 35, ccw: true },

    ['A']: { type: 'point', x: aX, y: aY, labelY: -12 },
    ['B']: { type: 'point', x: bX, y: bY, labelX: -12 },
    ['C']: { type: 'point', x: cX, y: cY, labelX:  12 },
    ['D']: { type: 'point', x: dX, y: dY, labelX: -12 },
  },
};

const steps: StepList = [
  {
    name: '1',
    text: [
      ['Let ABC be a triangle with ∠ABC equal ∠ACB.'],
    ],
    show: [ 'A', 'B', 'C', 'AB', 'AC', 'BC' ],
    highlight: [ '∠ABC', '∠ACB' ],
  },
  {
    name: '2',
    text: [
      ['It is required to show that AB equals AC.'],
    ],
    highlight: [ 'AB', 'AC' ],
  },
  {
    name: '3',
    text: [
      ['Assume the opposite, that AB does not equal AC.'],
      ['Then one must be greater.'],
      ['Let AB be greater.'],
    ],
    hide: [ '∠ABC', '∠ACB' ],
    highlight: [ 'AB' ],
  },
  {
    name: '4',
    text: [
      ['Pick a point D on AB such that BD equals AC.'],
    ],
    link: propositionRefLink('I', '3'),
    highlight: [ 'D', 'BD', 'AC' ],
  },
  {
    name: '5',
    text: [
      ['Construct CD.'],
    ],
    link: postulateRefLink('I', '1'),
    highlight: [ 'CD' ],
  },
  {
    name: '6',
    text: [
      ['Consider triangles DBC and ACB.'],
      ['Because BD equals AC, BC is common, and ∠DBC (or ∠ABC) equals ∠ACB, the triangles are equal.'],
    ],
    link: propositionRefLink('I', '4'),
    highlight: [ 'AC', 'BC', 'BD', '∠ABC', '∠ACB' ],
  },
  {
    name: '7',
    text: [
      ['But the triangle DBC is part of ACB, so it cannot be equal to it.'],
    ],
    link: commonNotionRefLink('I', '5'),
    hide: [ '∠ABC', '∠ACB' ],
    highlight: [ 'BC', 'BD', 'CD' ],
  },
  {
    name: '8',
    text: [
      ['Thus the assumption that AB does not equal AC must be wrong.'],
      ['So AB equals AC, as required.'],
    ],
    hide: [ 'BD' ],
    highlight: [ 'AB', 'AC' ],
  },
];

const name = '6';
const title = propositionTitle(name);
const summary: Paragraph = [
  [
    'If in a triangle two angles are equal, ',
    'then the sides opposite the equal angles are also equal.',
  ],
];

const stepsAndDiagram: StepsAndDiagram = {
  title,
  summary,
  diagram,
  steps,
};

const pageData = stepsAndDiagramPageData(name, title, stepsAndDiagram);

export default pageData;

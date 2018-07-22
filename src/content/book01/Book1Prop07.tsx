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

const aX = width * 0.2;
const aY = height * 0.8;
const bX = width * 0.8;
const bY = aY;
const cX = width * 0.4;
const cY = height * 0.2;
const dX = width * 0.65;
const dY = height * 0.3;

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['AC']: { type: 'line', p1: 'A', p2: 'C' },
    ['AD']: { type: 'line', p1: 'A', p2: 'D' },
    ['BC']: { type: 'line', p1: 'B', p2: 'C' },
    ['BD']: { type: 'line', p1: 'B', p2: 'D' },
    ['CD']: { type: 'line', p1: 'C', p2: 'D' },

    ['∠ACD']: { type: 'angle', p1: 'A', v: 'C', p2: 'D', r: 20, ccw: true },
    ['∠ADC']: { type: 'angle', p1: 'A', v: 'D', p2: 'C', r: 20, ccw: false },
    ['∠BCD']: { type: 'angle', p1: 'B', v: 'C', p2: 'D', r: 35, ccw: true },
    ['∠BDC']: { type: 'angle', p1: 'B', v: 'D', p2: 'C', r: 35, ccw: false },

    ['A']: { type: 'point', x: aX, y: aY, labelX: -12 },
    ['B']: { type: 'point', x: bX, y: bY, labelX:  12 },
    ['C']: { type: 'point', x: cX, y: cY, labelY: -12 },
    ['D']: { type: 'point', x: dX, y: dY, labelY: -12 },
  },
};

const steps: StepList = [
  {
    name: '1',
    text: [
      ['Let AB be a straight line.'],
    ],
    highlight: [ 'A', 'B', 'AB' ],
  },
  {
    name: '2',
    text: [
      ['Let C and D be two different points on the same side of AB.'],
    ],
    highlight: [ 'C', 'D' ],
  },
  {
    name: '3',
    text: [
      ['It is required to show that either AC does not equal AD or BC does not equal BD.'],
    ],
    highlight: [ 'AC', 'AD', 'BC', 'BD' ],
  },
  {
    name: '4',
    text: [
      ['Assume the opposite, that AC equals AD and BC equals BD.'],
    ],
    highlight: [ 'AC', 'AD', 'BC', 'BD' ],
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
      ['Since AC equals AD, ∠ACD equals ∠ADC.'],
    ],
    link: propositionRefLink('I', '5'),
    highlight: [ 'AC', 'AD', '∠ACD', '∠ADC' ],
  },
  {
    name: '7',
    text: [
      ['Since ∠ACD is greater than its part, ∠BCD, ∠ADC is also greater than ∠BCD.'],
    ],
    link: commonNotionRefLink('I', '5'),
    highlight: [ '∠ACD', '∠ADC', '∠BCD' ],
  },
  {
    name: '8',
    text: [
      ['And since ∠BDC is also greater than its part, ∠ADC, ∠BDC is greater than ∠BCD.'],
    ],
    link: commonNotionRefLink('I', '5'),
    hide: [ '∠ACD' ],
    highlight: [ '∠ADC', '∠BCD', '∠BDC' ],
  },
  {
    name: '9',
    text: [
      ['But, since BC equals BD, ∠BCD equals ∠BDC.'],
    ],
    link: propositionRefLink('I', '5'),
    hide: [ '∠ADC' ],
    highlight: [ 'BC', 'BD', '∠BCD', '∠BDC' ],
  },
  {
    name: '10',
    text: [
      [
        '∠BDC cannot be both greater than and equal to ∠BCD, ',
        'so our assumption that AC equals AD and BC equals BD must be wrong.',
      ],
    ],
    highlight: [ '∠BCD', '∠BDC' ],
  },
  {
    name: '11',
    text: [
      [
        'So either AC does not equal AD or BC does not equal BD, as required.',
      ],
    ],
    hide: [ '∠BCD', '∠BDC' ],
    highlight: [ 'AC', 'AD', 'BC', 'BD' ],
  },
];

const name = '7';
const title = propositionTitle(name);
const summary: Paragraph = [
  [
    'There cannot be constructed from the ends of a straight line two different pairs of lines ',
    'meeting in two different points on the same side ',
    'such that the respective lines from the same ends are both equal.',
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

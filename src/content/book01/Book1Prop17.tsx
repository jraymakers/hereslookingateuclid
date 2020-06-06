import { Diagram } from '../../diagram';
import { postulateRefLink, propositionRefLink, propositionTitle } from '../../link';
import { stepsAndDiagramPageData } from '../../page';
import { Paragraph } from '../../paragraph';
import { highlight } from '../../paragraph/utils/RunUtils';
import { StepList } from '../../step';
import { StepsAndDiagram } from '../../stepsAndDiagram';

const width = 400;
const height = 400;

const aX = width * 0.4;
const aY = height * 0.2;
const bX = width * 0.2;
const bY = height * 0.7;
const cX = width * 0.6;
const cY = bY;
const dX = width * 0.8;
const dY = bY;

const diagram: Diagram = {
  width,
  height,
  parts: {

    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['AC']: { type: 'line', p1: 'A', p2: 'C' },
    ['BC']: { type: 'line', p1: 'B', p2: 'C' },
    ['CD']: { type: 'line', p1: 'C', p2: 'D' },

    ['∠ABC']: { type: 'angle', p1: 'A', v: 'B', p2: 'C', r: 35, ccw: false },
    ['∠ACB']: { type: 'angle', p1: 'A', v: 'C', p2: 'B', r: 35, ccw: true },
    ['∠ACD']: { type: 'angle', p1: 'A', v: 'C', p2: 'D', r: 35, ccw: false },

    ['A']: { type: 'point', x: aX, y: aY, labelY: -12 },
    ['B']: { type: 'point', x: bX, y: bY, labelX: -12 },
    ['C']: { type: 'point', x: cX, y: cY, labelX: -6, labelY: 12 },
    ['D']: { type: 'point', x: dX, y: dY, labelX:  12 },
  },
};

const steps: StepList = [
  {
    name: '1',
    text: [
      ['Let ', highlight('ABC'), ' be any triangle.'],
    ],
    highlight: [ 'A', 'B', 'C', 'AB', 'AC', 'BC' ],
  },
  {
    name: '2',
    text: [
      ['Extend BC to create ', highlight('CD'), '.'],
    ],
    link: postulateRefLink('I', '2'),
    highlight: [ 'D', 'CD' ],
  },
  {
    name: '3',
    text: [
      ['It is required to show that the sum of the angles ',
       highlight('∠ABC'), ' and ', highlight('∠ACB'),
       ' is less than two right angles.'],
    ],
    highlight: [ '∠ABC', '∠ACB' ],
  },
  {
    name: '4',
    text: [
      ['The exterior angle ', highlight('∠ACD'),
       ' is greater than the opposite interior angle ∠ABC.'],
    ],
    link: propositionRefLink('I', '16'),
    hide: [ '∠ACB' ],
    highlight: [ '∠ACD' ],
  },
  {
    name: '5',
    text: [
      ['Add ', highlight('∠ACB'), ' to each.',
       ' Then the sum of ∠ACD and ', highlight('∠ACB'),
       ' is greater than the sum of ∠ABC and ', highlight('∠ACB'), '.'],
    ],
    highlight: [ '∠ACB' ],
  },
  {
    name: '6',
    text: [
      ['Since AC stands on BD, the sum of ',
       highlight('∠ACD'),' and ', highlight('∠ACB'), ' equals two right angles.'],
    ],
    link: propositionRefLink('I', '13'),
    hide: [ '∠ABC' ],
    highlight: [ '∠ACB', '∠ACD' ],
  },
  {
    name: '7',
    text: [
      ['So, the sum of ', highlight('∠ABC'), ' and ', highlight('∠ACB'),
       ' is less than two right angles, as required.'],
    ],
    hide: [ '∠ACD' ],
    highlight: [ '∠ABC', '∠ACB' ],
  },
];

const name = '17';
const title = propositionTitle(name);
const summary: Paragraph = [
  ['The sum of any two angles in a triangle is less than two right angles.'],
];

const stepsAndDiagram: StepsAndDiagram = {
  title,
  summary,
  diagram,
  steps,
};

const pageData = stepsAndDiagramPageData(name, title, stepsAndDiagram);

export default pageData;

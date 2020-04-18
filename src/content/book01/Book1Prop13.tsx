import { Diagram } from '../../diagram';
import {
  commonNotionRefLink,
  definitionRefLink,
  propositionRefLink,
  propositionTitle,
} from '../../link';
import { stepsAndDiagramPageData } from '../../page';
import { Paragraph } from '../../paragraph';
import { StepList } from '../../step';
import { StepsAndDiagram } from '../../stepsAndDiagram';

const width = 400;
const height = 400;

const aX = width * 0.3;
const aY = height * 0.35;
const aaX = width * 0.5;
const aaY = height * 0.3;
const bX = width * 0.5;
const bY = height * 0.7;
const cX = width * 0.2;
const cY = bY;
const dX = width * 0.8;
const dY = bY;
const eX = bX;
const eY = height * 0.3;

const diagram: Diagram = {
  width,
  height,
  parts: {

    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['AB ']: { type: 'line', p1: 'A ', p2: 'B' },
    ['BC']: { type: 'line', p1: 'B', p2: 'C' },
    ['BD']: { type: 'line', p1: 'B', p2: 'D' },
    ['BE']: { type: 'line', p1: 'B', p2: 'E' },

    ['∠ABC']: { type: 'angle', p1: 'A', v: 'B', p2: 'C', r: 40, ccw: true },
    ['∠ABD']: { type: 'angle', p1: 'A', v: 'B', p2: 'D', r: 45, ccw: false },
    ['∠ABE']: { type: 'angle', p1: 'A', v: 'B', p2: 'E', r: 35, ccw: false },
    ['∟ABC']: { type: 'rightangle', p1: 'A ', v: 'B', p2: 'C', r: 25 },
    ['∟ABD']: { type: 'rightangle', p1: 'A ', v: 'B', p2: 'D', r: 25 },
    ['∠EBC']: { type: 'angle', p1: 'E', v: 'B', p2: 'C', r: 25, ccw: true },
    ['∠EBD']: { type: 'angle', p1: 'E', v: 'B', p2: 'D', r: 30, ccw: false },
    ['∟EBC']: { type: 'rightangle', p1: 'E', v: 'B', p2: 'C', r: 25 },
    ['∟EBD']: { type: 'rightangle', p1: 'E', v: 'B', p2: 'D', r: 25 },

    ['A']: { type: 'point', x: aX, y: aY, labelY: -12 },
    ['A ']: { type: 'point', x: aaX, y: aaY, labelY: -12 },
    ['B']: { type: 'point', x: bX, y: bY, labelY:  12 },
    ['C']: { type: 'point', x: cX, y: cY, labelY:  12 },
    ['D']: { type: 'point', x: dX, y: dY, labelY:  12 },
    ['E']: { type: 'point', x: eX, y: eY, labelY: -12 },
  },
};

const steps: StepList = [
  {
    name: '1',
    text: [
      ['Let AB be a straight line standing on another straight line CD, ',
       'making the angles ∠ABC and ∠ABD.'],
    ],
    highlight: [ 'A', 'B', 'C', 'D', 'AB', 'BC', 'BD', '∠ABC', '∠ABD' ],
  },
  {
    name: '2',
    text: [
      ['It is required to show that either ∠ABC and ∠ABD are right angles, ',
       'or that their sum equals two right angles.'],
    ],
    highlight: [ '∠ABC', '∠ABD' ],
  },
  {
    name: '3',
    text: [
      ['If ∠ABC and ∠ABD are equal, then they are two right angles.'],
    ],
    link: definitionRefLink('I', '8-12', '10'),
    hide: [ 'A', 'AB', '∠ABC', '∠ABD' ],
    show: [ 'A ', 'AB ' ],
    highlight: [ '∟ABC', '∟ABD' ],
  },
  {
    name: '4',
    text: [
      ['If not, then construct BE perpendicular to CD. ',
       'Then ∠EBC and ∠EBD are right angles.'],
    ],
    link: propositionRefLink('I', '11'),
    hide: [ 'A ', 'AB ', '∟ABC', '∟ABD'  ],
    show: [ 'A', 'AB' ],
    highlight: [ 'E', 'BE', '∟EBC', '∟EBD' ],
  },
  {
    name: '5',
    text: [
      ['Since ∠EBC equals the sum of ∠ABC and ∠ABE, ',
       'then the sum of ∠EBC and ∠EBD equals the sum of ∠ABC, ∠ABE, and ∠EBD.'],
    ],
    link: commonNotionRefLink('I', '2'),
    hide: [ '∟EBC', '∟EBD' ],
    highlight: [ '∠ABC', '∠ABE', '∠EBC', '∠EBD' ],
  },
  {
    name: '6',
    text: [
      ['Likewise, since ∠ABD equals the sum of ∠ABE and ∠EBD, ',
       'then the sum of ∠ABC and ∠ABD equals the sum of ∠ABC, ∠ABE, and ∠EBD.'],
    ],
    link: commonNotionRefLink('I', '2'),
    hide: [ '∠EBC' ],
    highlight: [ '∠ABC', '∠ABD', '∠ABE', '∠EBD' ],
  },
  {
    name: '7',
    text: [
      ['So, since the sum of ∠ABC and ∠ABD and the sum of ∠EBC and ∠EBD both equal ',
       'the sum of ∠ABC, ∠ABE, and ∠EBD, the sums must be equal to each other.'],
    ],
    link: commonNotionRefLink('I', '1'),
    highlight: [ '∠ABC', '∠ABD', '∠ABE', '∠EBC', '∠EBD' ],
  },
  {
    name: '8',
    text: [
      ['And, since ∠EBC and ∠EBD are two right angles, ',
       'the sum of ∠ABC and ∠ABD equals two right angles, as required.'],
    ],
    hide: [ '∠ABE', '∠EBC', '∠EBD' ],
    highlight: [ '∠ABC', '∠ABD', '∟EBC', '∟EBD' ],
  },
];

const name = '13';
const title = propositionTitle(name);
const summary: Paragraph = [
  ['If a straight line stands on another straight line, then it either makes two right angles ',
   'or two angles whose sum equals two right angles.'],
];

const stepsAndDiagram: StepsAndDiagram = {
  title,
  summary,
  diagram,
  steps,
};

const pageData = stepsAndDiagramPageData(name, title, stepsAndDiagram);

export default pageData;

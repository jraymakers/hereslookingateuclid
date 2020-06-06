import { Diagram } from '../../diagram';
import {
  commonNotionRefLink,
  postulateRefLink,
  propositionRefLink,
  propositionTitle,
} from '../../link';
import { stepsAndDiagramPageData } from '../../page';
import { Paragraph } from '../../paragraph';
import { highlight } from '../../paragraph/utils/RunUtils';
import { StepList } from '../../step';
import { StepsAndDiagram } from '../../stepsAndDiagram';

const width = 400;
const height = 400;

const aX = width * 0.3;
const aY = height * 0.3;
const bX = width * 0.4;
const bY = height * 0.6;
const cX = width * 0.2;
const cY = bY;
const dX = width * 0.8;
const dY = bY;
const eX = width * 0.7;
const eY = height * 0.4;

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['BC']: { type: 'line', p1: 'B', p2: 'C' },
    ['BD']: { type: 'line', p1: 'B', p2: 'D' },
    ['BE']: { type: 'line', p1: 'B', p2: 'E' },

    ['∠ABC']: { type: 'angle', p1: 'A', v: 'B', p2: 'C', r: 35, ccw: true },
    ['∠ABD']: { type: 'angle', p1: 'A', v: 'B', p2: 'D', r: 40, ccw: false },
    ['∠ABE']: { type: 'angle', p1: 'A', v: 'B', p2: 'E', r: 30, ccw: false },

    ['A']: { type: 'point', x: aX, y: aY, labelY: -12 },
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
      ['Let ', highlight('AB'), ' be the given straight line, and let ', highlight('BC'),
       ' and ', highlight('BD'), ' lie on different sides of it, ',
       'making angles ', highlight('∠ABC'), ' and ', highlight('∠ABD'), ' that sum to two right angles.'],
    ],
    highlight: [ 'A', 'B', 'C', 'D', 'AB', 'BC', 'BD', '∠ABC', '∠ABD' ],
  },
  {
    name: '2',
    text: [
      ['It is required to show that ', highlight('BC'), ' and ', highlight('BD'),
       ' lie on the same straight line.'],
    ],
    hide: [ '∠ABC', '∠ABD' ],
    highlight: [ 'BC', 'BD' ],
  },
  {
    name: '3',
    text: [
      ['Assume the opposite, that BC and BD do not lie on the same straight line. ',
       'Then extend BC in a straight line to create ', highlight('BE'), '.'],
    ],
    link: postulateRefLink('I', '2'),
    highlight: [ 'E', 'BE' ],
  },
  {
    name: '4',
    text: [
      ['Since the straight line AB stands on the (assumed) straight line CBE, ',
       'the sum of the angles ', highlight('∠ABC'), ' and ', highlight('∠ABE'), ' equals two right angles.'],
    ],
    link: propositionRefLink('I', '13'),
    highlight: [ '∠ABC', '∠ABE' ],
  },
  {
    name: '5',
    text: [
      ['Since ∠ABC and ', highlight('∠ABD'), ' also sum to two right angles, ',
       'the sum of ∠ABC and ', highlight('∠ABD'), ' equals the sum of ∠ABC and ∠ABE.'],
    ],
    links: [ postulateRefLink('I', '4'), commonNotionRefLink('I', '1') ],
    highlight: [ '∠ABD' ],
  },
  {
    name: '6',
    text: [
      ['Subtract ∠ABC from each. Then the remaining angle ', highlight('∠ABD'),
       ' equals the remaining angle ', highlight('∠ABE'), '.'],
    ],
    link: commonNotionRefLink('I', '3'),
    hide: [ '∠ABC' ],
    highlight: [ '∠ABD', '∠ABE' ],
  },
  {
    name: '7',
    text: [
      ['But, according to our assumption, ', highlight('BD'), ' and ', highlight('BE'),
       ' do not lie on the same straight line. ',
       'So, either ∠ABD or ∠ABE is greater than the other, thus they cannot be equal.'],
    ],
    link: commonNotionRefLink('I', '5'),
    highlight: [ 'BD', 'BE' ],
  },
  {
    name: '8',
    text: [
      ['So the assumption must be wrong, thus ', highlight('BC'), ' and ', highlight('BD'),
       ' must lie on the same straight line, as required.'],
    ],
    hide: [ '∠ABD', '∠ABE' ], 
    highlight: [ 'BC', 'BD' ],
  },
];

const name = '14';
const title = propositionTitle(name);
const summary: Paragraph = [
  ['If two straight lines that extend from a single point on a given straight line ',
   'and that lie on different sides of that line ',
   'make adjacent angles that sum to two right angles, ',
   'then the two straight lines lie on the same straight line.'],
];

const stepsAndDiagram: StepsAndDiagram = {
  title,
  summary,
  diagram,
  steps,
};

const pageData = stepsAndDiagramPageData(name, title, stepsAndDiagram);

export default pageData;

import { Diagram } from '../../diagram';
import {
  commonNotionRefLink,
  definitionRefLink,
  postulateRefLink,
  propositionRefLink,
  propositionTitle,
} from '../../link';
import { stepsAndDiagramPageData } from '../../page';
import { Paragraph } from '../../paragraph';
import { StepList } from '../../step';
import { StepsAndDiagram } from '../../stepsAndDiagram';
import { highlight } from '../../paragraph/utils/RunUtils';

const width = 400;
const height = 400;

const aX = width * 0.5;
const aY = height * 0.1;
const bX = width * 0.35;
const bY = height * 0.5;
const cX = width * 0.65;
const cY = bY;
const dX = width * 0.2;
const dY = height * 0.9;
const eX = width * 0.8;
const eY = dY;
const fX = width * 0.29;
const fY = height * 0.66;
const gX = width * 0.71;
const gY = fY;

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['AC']: { type: 'line', p1: 'A', p2: 'C' },
    ['BC']: { type: 'line', p1: 'B', p2: 'C' },
    ['BD']: { type: 'line', p1: 'B', p2: 'D' },
    ['BF']: { type: 'line', p1: 'B', p2: 'F' },
    ['BG']: { type: 'line', p1: 'B', p2: 'G' },
    ['CE']: { type: 'line', p1: 'C', p2: 'E' },
    ['CF']: { type: 'line', p1: 'C', p2: 'F' },
    ['CG']: { type: 'line', p1: 'C', p2: 'G' },

    ['∠ABC']: { type: 'angle', p1: 'A', v: 'B', p2: 'C', r: 35, ccw: false },
    ['∠ABG']: { type: 'angle', p1: 'A', v: 'B', p2: 'G', r: 15, ccw: false },
    ['∠ACB']: { type: 'angle', p1: 'A', v: 'C', p2: 'B', r: 35, ccw: true },
    ['∠ACF']: { type: 'angle', p1: 'A', v: 'C', p2: 'F', r: 15, ccw: true },
    ['∠AFC']: { type: 'angle', p1: 'A', v: 'F', p2: 'C', r: 20, ccw: false },
    ['∠AGB']: { type: 'angle', p1: 'A', v: 'G', p2: 'B', r: 20, ccw: true },
    ['∠BAC']: { type: 'angle', p1: 'B', v: 'A', p2: 'C', r: 20, ccw: true },
    ['∠BCE']: { type: 'angle', p1: 'B', v: 'C', p2: 'E', r: 15, ccw: true },
    ['∠BCF']: { type: 'angle', p1: 'B', v: 'C', p2: 'F', r: 25, ccw: true },
    ['∠BFC']: { type: 'angle', p1: 'B', v: 'F', p2: 'C', r: 20, ccw: false },
    ['∠CBD']: { type: 'angle', p1: 'C', v: 'B', p2: 'D', r: 15, ccw: false },
    ['∠CBG']: { type: 'angle', p1: 'C', v: 'B', p2: 'G', r: 25, ccw: false },
    ['∠CGB']: { type: 'angle', p1: 'C', v: 'G', p2: 'B', r: 20, ccw: true },

    ['A']: { type: 'point', x: aX, y: aY, labelY: -12 },
    ['B']: { type: 'point', x: bX, y: bY, labelX: -12 },
    ['C']: { type: 'point', x: cX, y: cY, labelX:  12 },
    ['D']: { type: 'point', x: dX, y: dY, labelX: -12 },
    ['E']: { type: 'point', x: eX, y: eY, labelX:  12 },
    ['F']: { type: 'point', x: fX, y: fY, labelX: -12 },
    ['G']: { type: 'point', x: gX, y: gY, labelX:  12 },
  },
};

const steps: StepList = [
  {
    name: '1',
    text: [
      ['Let ABC be an isoceles triangle with ', highlight('AB'), ' equal ', highlight('AC'), '.'],
    ],
    link: definitionRefLink('I', '20-21', '20b'),
    show: [ 'A', 'B', 'C', 'BC' ],
    highlight: [ 'AB', 'AC' ],
  },
  {
    name: '2',
    text: [
      ['Extend AB to create ', highlight('BD'), ', and extend AC to create ', highlight('CE'), '.'],
    ],
    link: postulateRefLink('I', '2'),
    highlight: [ 'D', 'E', 'BD', 'CE' ],
  },
  {
    name: '3',
    text: [
      ['It is required to show that ', highlight('∠ABC'), ' equals ', highlight('∠ACB'),
       ', and ', highlight('∠CBD'), ' equals ', highlight('∠BCE'), '.'],
    ],
    highlight: [ '∠ABC', '∠ACB', '∠BCE', '∠CBD' ],
  },
  {
    name: '4',
    text: [
      ['Pick a point ', highlight('F'), ' on BD, and another point ', highlight('G'),
       ' on CE, such at ', highlight('AF'), ' equals ', highlight('AG'), '.'],
    ],
    link: propositionRefLink('I', '3'),
    hide: [ '∠ABC', '∠ACB', '∠BCE', '∠CBD' ],
    highlight: [ 'F', 'G', 'AB', 'BF', 'AC', 'CG' ],
  },
  {
    name: '5',
    text: [
      ['Construct ', highlight('BG'), ' and ', highlight('CF'), '.'],
    ],
    link: postulateRefLink('I', '1'),
    highlight: [ 'BG', 'CF' ],
  },
  {
    name: '6',
    text: [
      ['Consider the triangles ABG and ACF.'],
      [highlight('AB'), ' equals ', highlight('AC'), ', ',
       highlight('AG'), ' equals ', highlight('AF'), ', and the angles at ', highlight('A'), ' are common.'],
      ['So, the triangles are equal, as are their bases ', highlight('BG'), ' and ', highlight('CF'),
       ', and the remaining angles, so ', highlight('∠ACF'), ' equals ', highlight('∠ABG'),
       ', and ', highlight('∠AFC'), ' equals ', highlight('∠AGB'), '.'],
    ],
    link: propositionRefLink('I', '4'),
    highlight: [ 'AB', 'AC', 'BF', 'BG', 'CF', 'CG', '∠ABG', '∠ACF', '∠AFC', '∠AGB', '∠BAC' ],
  },
  {
    name: '7',
    text: [
      ['Since AF equals AG, and their parts AB and AC are equal, ',
       'then the remainders, ', highlight('BF'), ' and ', highlight('CG'), ', are equal.'],
    ],
    link: commonNotionRefLink('I', '3'),
    hide: [ '∠ABG', '∠ACF', '∠AFC', '∠AGB', '∠BAC' ],
    highlight: [ 'BF', 'CG' ],
  },
  {
    name: '8',
    text: [
      ['Consider the triangles BFC and CGB.'],
      [highlight('BF'), ' equals ', highlight('CG'), ', ', highlight('CF'), ' equals ', highlight('BG'),
       ', and the angles ', highlight('∠BFC'), ' and ', highlight('∠CGB'), ' are equal.'],
      ['So, the triangles are equal, as are their remaining angles, ',
        'so ', highlight('∠BCF'), ' equals ', highlight('∠CBG'),
        ', and ', highlight('∠CBF'), ' (also called ∠CBD) equals ',
         highlight('∠BCG'), ' (also called ∠BCE), as required.'],
    ],
    link: propositionRefLink('I', '4'),
    highlight: [ 'BC', 'BF', 'BG', 'CF', 'CG', '∠BCE', '∠BCF', '∠BFC', '∠CBD', '∠CBG', '∠CGB' ],
  },
  {
    name: '9',
    text: [
      ['Since the angles ', highlight('∠ABG'), ' and ', highlight('∠ACF'), ' are equal, ',
       'as are their parts ', highlight('∠CBG'), ' and ', highlight('∠BCF'), ', ',
       'then the remaining angles ', highlight('∠ABC'), ' and ', highlight('∠ACB'), ' are equal, as required.'],
    ],
    link: commonNotionRefLink('I', '3'),
    hide: [ '∠BCE', '∠BFC', '∠CBD', '∠CGB' ],
    highlight: [ '∠ABC', '∠ABG', '∠ACB', '∠ACF', '∠BCF', '∠CBG' ],
  },
];

const name = '5';
const title = propositionTitle(name);
const summary: Paragraph = [
  [
    'In isoceles triangles the angles at the base are equal, ',
    'and, if the equal sides are extended, ',
    'then the angles under the base are equal.',
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

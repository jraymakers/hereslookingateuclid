import { Diagram } from '../../diagram';
import {
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

const cd = width * 0.2;

const aX = width * 0.2;
const aY = height * 0.7;
const bX = width * 0.8;
const bY = aY;
const cX = width * 0.5;
const cY = aY;
const dX = cX - cd;
const dY = aY;
const eX = cX + cd;
const eY = aY;
const fX = cX;
const fY = cY - (eX - dX) * Math.sqrt(3) / 2;

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['AC']: { type: 'line', p1: 'A', p2: 'C' },
    ['BC']: { type: 'line', p1: 'B', p2: 'C' },
    ['CD']: { type: 'line', p1: 'C', p2: 'D' },
    ['CE']: { type: 'line', p1: 'C', p2: 'E' },
    ['CF']: { type: 'line', p1: 'C', p2: 'F' },
    ['DE']: { type: 'line', p1: 'D', p2: 'E' },
    ['DF']: { type: 'line', p1: 'D', p2: 'F' },
    ['EF']: { type: 'line', p1: 'E', p2: 'F' },

    ['∠DCF']: { type: 'angle', p1: 'D', v: 'C', p2: 'F', r: 15, ccw: false },
    ['∠ECF']: { type: 'angle', p1: 'E', v: 'C', p2: 'F', r: 15, ccw: true },
    ['∟DCF']: { type: 'rightangle', p1: 'D', v: 'C', p2: 'F', r: 15 },
    ['∟ECF']: { type: 'rightangle', p1: 'E', v: 'C', p2: 'F', r: 15 },

    ['A']: { type: 'point', x: aX, y: aY, labelY:  12 },
    ['B']: { type: 'point', x: bX, y: bY, labelY:  12 },
    ['C']: { type: 'point', x: cX, y: cY, labelY:  12 },
    ['D']: { type: 'point', x: dX, y: dY, labelY:  12 },
    ['E']: { type: 'point', x: eX, y: eY, labelY:  12 },
    ['F']: { type: 'point', x: fX, y: fY, labelY: -12 },
  },
};

const steps: StepList = [
  {
    name: '1',
    text: [
      ['Let ', highlight('AB'), ' be the given straight line, and ',
       highlight('C'), ' the given point on it.'],
    ],
    highlight: [ 'A', 'B', 'C', 'AB' ],
  },
  {
    name: '2',
    text: [
      ['It is required to construct a straight line perpendicular to AB from C.'],
    ],
    highlight: [ 'CF', '∟DCF', '∟ECF' ],
  },
  {
    name: '3',
    text: [
      ['Pick a point ', highlight('D'), ' on AC and a point ', highlight('E'),
       ' on BC such that ', highlight('CD'), ' equals ', highlight('CE'), '.'],
    ],
    link: propositionRefLink('I', '3'),
    hide: [ 'F',  'CF', '∟DCF', '∟ECF' ],
    highlight: [ 'D', 'E', 'CD', 'CE' ],
  },
  {
    name: '4',
    text: [
      ['Construct an equilateral triangle ', highlight('DEF'), ' on DE.'],
    ],
    link: propositionRefLink('I', '1'),
    highlight: [ 'F', 'DE', 'DF', 'EF' ],
  },
  {
    name: '5',
    text: [
      ['Construct ', highlight('CF'), '.'],
    ],
    link: postulateRefLink('I', '1'),
    highlight: [ 'CF' ],
  },
  {
    name: '6',
    text: [
      ['Since DEF is equilateral, ', highlight('DF'), ' equal ', highlight('EF'), '.'],
    ],
    link: definitionRefLink('I', '20-21', '20a'),
    highlight: [ 'DF', 'EF' ],
  },
  {
    name: '7',
    text: [
      ['Since the triangles CDF and CEF have ', highlight('CD'), ' equal ', highlight('CE'),
       ', ', highlight('CF'), ' common, and ', highlight('DF'), ' equal ', highlight('EF'),
       ', then ', highlight('∠DCF'), ' equals ', highlight('∠ECF'), '.'],
    ],
    link: propositionRefLink('I', '8'),
    hide: [ 'DE' ],
    highlight: [ 'CD', 'CE', 'CF', 'DF', 'EF', '∠DCF', '∠ECF' ],
  },
  {
    name: '8',
    text: [
      ['Since the straight line CF standing on the straight line AB makes equal angles ',
       highlight('∠DCF'), ' and ', highlight('∠ECF'), ', both ',
       highlight('∠DCF'), ' and ', highlight('∠ECF'), ' are right angles, and CF is perpendicular to AB.'],
    ],
    link: definitionRefLink('I', '8-12', '10'),
    hide: [ '∠DCF', '∠ECF' ],
    highlight: [ '∟DCF', '∟ECF' ],
  },
  {
    name: '9',
    text: [
      ['So ', highlight('CF'), ' is a straight line perpendicular to AB from C, as required.'],
    ],
    show: [ '∟DCF', '∟ECF' ],
    highlight: [ 'CF' ],
  },
];

const name = '11';
const title = propositionTitle(name);
const summary: Paragraph = [
  ['Construct a straight line perpendicular to a given straight line from a given point on it.'],
];

const stepsAndDiagram: StepsAndDiagram = {
  title,
  summary,
  diagram,
  steps,
};

const pageData = stepsAndDiagramPageData(name, title, stepsAndDiagram);

export default pageData;

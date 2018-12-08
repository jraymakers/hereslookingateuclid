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

    ['∠DCF']: { type: 'angle', p1: 'D', v: 'C', p2: 'F', r: 25, ccw: false },
    ['∠ECF']: { type: 'angle', p1: 'E', v: 'C', p2: 'F', r: 25, ccw: true },

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
      ['Let AB be the given straight line, and C the given point on it.'],
    ],
    highlight: [ 'A', 'B', 'C', 'AB' ],
  },
  {
    name: '2',
    text: [
      ['It is required to construct a straight line perpendicular to AB from C.'],
    ],
    highlight: [ 'F',  'CF', '∠DCF', '∠ECF' ],
  },
  {
    name: '3',
    text: [
      ['Pick a point D on AC and a point E on BC such that CD equals CE.'],
    ],
    link: propositionRefLink('I', '3'),
    hide: [ 'F',  'CF', '∠DCF', '∠ECF' ],
    highlight: [ 'D', 'E', 'CD', 'CE' ],
  },
  {
    name: '4',
    text: [
      ['Construct an equilateral triangle DEF on DE.'],
    ],
    link: propositionRefLink('I', '1'),
    highlight: [ 'F', 'DE', 'DF', 'EF' ],
  },
  {
    name: '5',
    text: [
      ['Construct CF.'],
    ],
    link: postulateRefLink('I', '1'),
    highlight: [ 'CF' ],
  },
  {
    name: '6',
    text: [
      ['Since DEF is equilateral, DF equal EF.'],
    ],
    link: definitionRefLink('I', '20-21', '20a'),
    highlight: [ 'DF', 'EF' ],
  },
  {
    name: '7',
    text: [
      ['Since the triangles CDF and CEF have CD equal CE, CF common, and DF equal EF, ',
       'then ∠DCF equals ∠ECF.'],
    ],
    link: postulateRefLink('I', '8'),
    hide: [ 'DE' ],
    highlight: [ 'CD', 'CE', 'CF', 'DF', 'EF', '∠DCF', '∠ECF' ],
  },
  {
    name: '8',
    text: [
      ['Since the straight line CF standing on the straight line AB makes equal angles ∠DCF and ∠ECF, ',
       'both ∠DCF and ∠ECF are right angles, and CF is perpendicular to AB.'],
    ],
    link: definitionRefLink('I', '8-12', '10'),
    highlight: [ '∠DCF', '∠ECF' ],
  },
  {
    name: '9',
    text: [
      ['So CF is a straight line perpendicular to AB from C, as required.'],
    ],
    hide: [ '∠DCF', '∠ECF' ],
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

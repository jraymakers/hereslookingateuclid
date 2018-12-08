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

const aX = width * 0.5;
const aY = height * 0.2;
const bX = width * 0.2;
const bY = height * 0.8;
const cX = width * 0.8;
const cY = bY;
const dX = aX + (bX - aX) * 0.6;
const dY = aY + (bY - aY) * 0.6;
const eX = aX + (cX - aX) * 0.6;
const eY = dY;
const fX = aX;
const fY = dY + (eX - dX) * Math.sqrt(3) / 2;

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['AC']: { type: 'line', p1: 'A', p2: 'C' },
    ['AD']: { type: 'line', p1: 'A', p2: 'D' },
    ['AE']: { type: 'line', p1: 'A', p2: 'E' },
    ['AF']: { type: 'line', p1: 'A', p2: 'F' },
    ['BD']: { type: 'line', p1: 'B', p2: 'D' },
    ['CE']: { type: 'line', p1: 'C', p2: 'E' },
    ['DE']: { type: 'line', p1: 'D', p2: 'E' },
    ['DF']: { type: 'line', p1: 'D', p2: 'F' },
    ['EF']: { type: 'line', p1: 'E', p2: 'F' },

    ['∠BAC']: { type: 'angle', p1: 'B', v: 'A', p2: 'C', r: 25, ccw: true },
    ['∠BAF']: { type: 'angle', p1: 'B', v: 'A', p2: 'F', r: 35, ccw: true },
    ['∠CAF']: { type: 'angle', p1: 'C', v: 'A', p2: 'F', r: 35, ccw: false },
    ['∠DAF']: { type: 'angle', p1: 'D', v: 'A', p2: 'F', r: 35, ccw: true },
    ['∠EAF']: { type: 'angle', p1: 'E', v: 'A', p2: 'F', r: 35, ccw: false },

    ['A']: { type: 'point', x: aX, y: aY, labelY: -12 },
    ['B']: { type: 'point', x: bX, y: bY, labelX: -12 },
    ['C']: { type: 'point', x: cX, y: cY, labelX:  12 },
    ['D']: { type: 'point', x: dX, y: dY, labelX: -12 },
    ['E']: { type: 'point', x: eX, y: eY, labelX:  12 },
    ['F']: { type: 'point', x: fX, y: fY, labelX:  12 },
  },
};

const steps: StepList = [
  {
    name: '1',
    text: [
      ['Let ∠BAC be the given rectilinear angle.'],
    ],
    highlight: [ 'A', 'B', 'C', 'AB', 'AC', '∠BAC' ],
  },
  {
    name: '2',
    text: [
      ['It is required to bisect it, that is, ',
       'construct a line AF such that ∠BAF equals ∠CAF.'],
    ],
    hide: [ '∠BAC' ],
    highlight: [ 'F', 'AF', '∠BAF', '∠CAF' ],
  },
  {
    name: '3',
    text: [
      ['Let D be a point on AB.'],
    ],
    hide: [ 'F', 'AF', '∠BAF', '∠CAF' ],
    highlight: [ 'D' ],
  },
  {
    name: '4',
    text: [
      ['Cut off AE from AC equal to AD.'],
    ],
    link: propositionRefLink('I', '3'),
    hide: [ 'AB', 'AC' ],
    show: [ 'BD', 'CE' ],
    highlight: [ 'E', 'AD', 'AE' ],
  },
  {
    name: '5',
    text: [
      ['Construct DE.'],
    ],
    link: postulateRefLink('I', '1'),
    highlight: [ 'DE' ],
  },
  {
    name: '6',
    text: [
      ['Construct equilateral triangle DEF on DE.'],
    ],
    link: propositionRefLink('I', '1'),
    highlight: [ 'F', 'DF', 'EF' ],
  },
  {
    name: '7',
    text: [
      ['Construct AF.'],
    ],
    link: postulateRefLink('I', '1'),
    highlight: [ 'AF' ],
  },
  {
    name: '8',
    text: [
      ['To show that AF bisects ∠BAC, it is required to show that ∠DAF equals ∠EAF.'],
    ],
    link: propositionRefLink('I', '1'),
    highlight: [ '∠DAF', '∠EAF' ],
  },
  {
    name: '9',
    text: [
      ['Since triangle DEF is equilateral, DF equals EF.'],
    ],
    link: definitionRefLink('I', '20-21', '20a'),
    hide: [ '∠DAF', '∠EAF' ],
    highlight: [ 'DF', 'EF' ],
  },
  {
    name: '10',
    text: [
      ['Since triangles ADF and AEF have AD equal AE, AF common, and DF equal EF, ',
       'then ∠DAF equals ∠EAF, as required.'],
    ],
    link: propositionRefLink('I', '8'),
    highlight: [ 'AD', 'AE', 'AF', 'DF', 'EF', '∠DAF', '∠EAF' ],
  },
];

const name = '9';
const title = propositionTitle(name);
const summary: Paragraph = [
  ['Bisect a given rectilinear angle.'],
];

const stepsAndDiagram: StepsAndDiagram = {
  title,
  summary,
  diagram,
  steps,
};

const pageData = stepsAndDiagramPageData(name, title, stepsAndDiagram);

export default pageData;

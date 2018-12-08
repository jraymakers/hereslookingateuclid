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
const centerX = width / 2;
const centerY = height / 2;
const dX = centerX;
const dY = centerY;
const ab = 50;
const bc = 100;
const fg = 40;
const dg = ab + bc;
const daAngle = Math.PI * 11 / 24;
const dbAngle = Math.PI * 3 / 24;
const bcAngle = Math.PI * 10 / 24;
const aX = dX + ab * Math.cos(daAngle);
const aY = dY + ab * Math.sin(daAngle);
const bX = dX + ab * Math.cos(dbAngle);
const bY = dY + ab * Math.sin(dbAngle);
const cX = bX - bc * Math.cos(bcAngle);
const cY = bY - bc * Math.sin(bcAngle);
const gX = bX + bc * Math.cos(dbAngle);
const gY = bY + bc * Math.sin(dbAngle);
const hX = aX + bc * Math.cos(daAngle);
const hY = aY + bc * Math.sin(daAngle);
const fX = gX + fg * Math.cos(dbAngle);
const fY = gY + fg * Math.sin(dbAngle);
const eX = hX + fg * Math.cos(daAngle);
const eY = hY + fg * Math.sin(daAngle);

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['β']:  { type: 'circle', p1: 'B', p2: 'C', labelDir: LabelDir.W },
    ['δ']: { type: 'circle', p1: 'D', p2: 'G', labelDir: LabelDir.W },
    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['AD']: { type: 'line', p1: 'A', p2: 'D' },
    ['AH']: { type: 'line', p1: 'A', p2: 'H' },
    ['BC']: { type: 'line', p1: 'B', p2: 'C' },
    ['BD']: { type: 'line', p1: 'B', p2: 'D' },
    ['BG']: { type: 'line', p1: 'B', p2: 'G' },
    ['EH']: { type: 'line', p1: 'E', p2: 'H' },
    ['FG']: { type: 'line', p1: 'F', p2: 'G' },
    ['A']: { type: 'point', x: aX, y: aY, labelX: -10},
    ['B']: { type: 'point', x: bX, y: bY, labelX: 9, labelY: -9 },
    ['C']: { type: 'point', x: cX, y: cY, labelY: -12 },
    ['D']: { type: 'point', x: dX, y: dY, labelX: -8, labelY: -8 },
    ['E']: { type: 'point', x: eX, y: eY, labelX: -10 },
    ['F']: { type: 'point', x: fX, y: fY, labelY: -12 },
    ['G']: { type: 'point', x: gX, y: gY, labelX: -6, labelY: -13 },
    ['H']: { type: 'point', x: hX, y: hY, labelX: -10, labelY: -10 },
  },
};

const steps: StepList = [
  {
    name: '1',
    text: [
      ['Let A be the given point, and BC the given straight line.'],
    ],
    highlight: [ 'A', 'B', 'C', 'BC' ],
  },
  {
    name: '2',
    text: [
      ['It is required to construct a straight line equal to BC with one end at A.'],
    ],
    highlight: [ 'H', 'AH' ],
  },
  {
    name: '3',
    text: [
      ['Construct the straight line AB.'],
    ],
    link: postulateRefLink('I', '1'),
    hide: [ 'H', 'AH' ],
    highlight: [ 'AB' ],
  },
  {
    name: '4',
    text: [
      ['Construct an equilateral triangle ABD on AB.'],
      ['So AB, AD, and BD are all equal.'],
    ],
    link: propositionRefLink('I', '1'),
    highlight: [ 'D', 'AD', 'BD' ],
  },
  {
    name: '5',
    text: [
      ['Construct the straight lines AE and BF by extending DA and DB, respectively.'],
    ],
    link: postulateRefLink('I', '2'),
    highlight: [ 'E', 'F', 'AH', 'BG', 'EH', 'FG' ],
  },
  {
    name: '6',
    text: [
      [`Construct the circle β with center B and radius BC.`],
    ],
    link: postulateRefLink('I', '3'),
    highlight: [ 'β' ],
  },
  {
    name: '7',
    text: [
      [`Let G be the intersection of β and DF.`],
    ],
    highlight: [ 'G' ],
  },
  {
    name: '8',
    text: [
      [`Construct the circle δ with center D and radius DG.`],
    ],
    link: postulateRefLink('I', '3'),
    highlight: [ 'δ' ],
  },
  {
    name: '9',
    text: [
      [`Let H be the intersection of δ and DE.`],
    ],
    highlight: [ 'H' ],
  },
  {
    name: '10',
    text: [
      [`Since BC and BG are both radii of circle β, they are equal.`],
    ],
    link: definitionRefLink('I', '15-18', '15'),
    highlight: [ 'BC', 'BG' ],
  },
  {
    name: '11',
    text: [
      [`Since DG and DH are both radii of circle δ, they are equal.`],
    ],
    link: definitionRefLink('I', '15-18', '15'),
    highlight: [ 'AD', 'AH', 'BD', 'BG' ],
  },
  {
    name: '12',
    text: [
      ['Because AD equals BD, and AD and BD are parts of DH and DG respectively, ',
       'the remaining parts of each, AH and BG, are also equal.'],
    ],
    link: commonNotionRefLink('I', '3'),
    highlight: [ 'AH', 'BG' ],
  },
  {
    name: '13',
    text: [
      ['And since BG also equals BC, then AH equals BC and has one end at A, as required.'],
    ],
    link: commonNotionRefLink('I', '1'),
    highlight: [ 'AH', 'BC' ],
  },
];

const name = '2';
const title = propositionTitle(name);
const summary: Paragraph = [
  ['Construct a straight line equal to a given straight line with one end at a given point.'],
];

const stepsAndDiagram: StepsAndDiagram = {
  title,
  summary,
  diagram,
  steps,
};

const pageData = stepsAndDiagramPageData(name, title, stepsAndDiagram);

export default pageData;

import { Diagram, LabelDir } from '../../diagram';
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

const width = 400;
const height = 400;

const cd = width * 0.3;
const cdAngle = Math.PI / 6;
const cHeight = height * 0.2;
const ce = cd * Math.cos(Math.asin(cHeight / cd));

const aX = width * 0.1;
const aY = height * 0.7;
const bX = width * 0.9;
const bY = aY;
const cX = width * 0.5;
const cY = aY - cHeight;
const dX = cX + cd * Math.sin(cdAngle);
const dY = cY + cd * Math.cos(cdAngle);
const eX = cX - ce;
const eY = aY;
const fX = cX + ce;
const fY = aY;
const gX = cX;
const gY = aY;
const ab0X = 0;
const ab0Y = aY;
const ab1X = width;
const ab1Y = aY;

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['α']: { type: 'circle', p1: 'C', p2: 'D', labelDir: LabelDir.W },

    ['ab']: { type: 'line', p1: 'a', p2: 'b' },
    ['CD']: { type: 'line', p1: 'C', p2: 'D' },
    ['CE']: { type: 'line', p1: 'C', p2: 'E' },
    ['CF']: { type: 'line', p1: 'C', p2: 'F' },
    ['CG']: { type: 'line', p1: 'C', p2: 'G' },
    ['EG']: { type: 'line', p1: 'E', p2: 'G' },
    ['FG']: { type: 'line', p1: 'F', p2: 'G' },

    ['∠CGE']: { type: 'angle', p1: 'C', v: 'G', p2: 'E', r: 15, ccw: true },
    ['∠CGF']: { type: 'angle', p1: 'C', v: 'G', p2: 'F', r: 15, ccw: false },
    ['∟CGE']: { type: 'rightangle', p1: 'C', v: 'G', p2: 'E', r: 15 },
    ['∟CGF']: { type: 'rightangle', p1: 'C', v: 'G', p2: 'F', r: 15 },

    ['a']: { type: 'point', x: ab0X, y: ab0Y },
    ['b']: { type: 'point', x: ab1X, y: ab1Y },
    ['A']: { type: 'point', x: aX, y: aY, labelY:  12 },
    ['B']: { type: 'point', x: bX, y: bY, labelY:  12 },
    ['C']: { type: 'point', x: cX, y: cY, labelY: -12 },
    ['D']: { type: 'point', x: dX, y: dY, labelY:  12 },
    ['E']: { type: 'point', x: eX, y: eY, labelY:  12 },
    ['F']: { type: 'point', x: fX, y: fY, labelY:  12 },
    ['G']: { type: 'point', x: gX, y: gY, labelY:  12 },
  },
};

const steps: StepList = [
  {
    name: '1',
    text: [
      ['Let AB be the given infinite straight line, and C the given point not on it.'],
    ],
    highlight: [ 'A', 'B', 'C', 'ab' ],
  },
  {
    name: '2',
    text: [
      ['It is required to construct a straight line perpendicular to AB from C.'],
    ],
    highlight: [ 'CG', '∟CGE', '∟CGF' ],
  },
  {
    name: '3',
    text: [
      ['Pick a point D on the other side of AB from C.'],
    ],
    hide: [ 'CG', '∟CGE', '∟CGF' ],
    highlight: [ 'D' ],
  },
  {
    name: '4',
    text: [
      ['Construct circle α with center C and radius CD.'],
    ],
    link: postulateRefLink('I', '3'),
    highlight: [ 'α', 'CD' ],
  },
  {
    name: '5',
    text: [
      ['Let E and F be the intersection points of AB and α.'],
    ],
    hide: [ 'CD' ],
    highlight: [ 'E', 'F' ],
  },
  {
    name: '6',
    text: [
      ['Bisect EF at G. So EG equals FG.'],
    ],
    link: propositionRefLink('I', '10'),
    highlight: [ 'G', 'EG', 'FG' ],
  },
  {
    name: '7',
    text: [
      ['Construct CE, CF, and CG.'],
    ],
    link: postulateRefLink('I', '1'),
    highlight: [ 'CE', 'CF', 'CG' ],
  },
  {
    name: '8',
    text: [
      ['Since CE and CF are both radii of α, they are equal.'],
    ],
    link: definitionRefLink('I', '15-18', '15'),
    highlight: [ 'CE', 'CF' ],
  },
  {
    name: '9',
    text: [
      ['Since the triangles CEG and CFG have CE equal CF, CG common, and EG equal FG, ',
       'then ∠CGE equals ∠CGF.'],
    ],
    link: propositionRefLink('I', '8'),
    highlight: [ 'CE', 'CF', 'CG', 'EG', 'FG', '∠CGE', '∠CGF' ],
  },
  {
    name: '10',
    text: [
      ['Since the straight line CG standing on the straight line AB makes equal angles ∠CGE and ∠CGF, ',
       'both ∠CGE and ∠CGF are right angles, and CG is perpendicular to AB.'],
    ],
    link: definitionRefLink('I', '8-12', '10'),
    hide: [ '∠CGE', '∠CGF' ],
    highlight: [ '∟CGE', '∟CGF' ],
  },
  {
    name: '11',
    text: [
      ['So CG is a straight line perpendicular to AB from C, as required.'],
    ],
    hide: [ '∟CGE', '∟CGF' ],
    highlight: [ 'CG' ],
  },
];

const name = '12';
const title = propositionTitle(name);
const summary: Paragraph = [
  ['Construct a straight line perpendicular to a given infinite straight line from a given point not on it.'],
];

const stepsAndDiagram: StepsAndDiagram = {
  title,
  summary,
  diagram,
  steps,
};

const pageData = stepsAndDiagramPageData(name, title, stepsAndDiagram);

export default pageData;

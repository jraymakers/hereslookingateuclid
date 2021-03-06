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

const aX = width * 0.4;
const aY = height * 0.2;
const bX = width * 0.2;
const bY = height * 0.7;
const cX = width * 0.6;
const cY = bY;
const dX = width * 0.8;
const dY = bY;
const eX = (aX + cX) / 2;
const eY = (aY + cY) / 2;
const fX = bX + (eX - bX) * 2.2;
const fY = bY + (eY - bY) * 2.2;
const gX = bX + (eX - bX) * 2;
const gY = bY + (eY - bY) * 2;
const hX = aX + (cX - aX) * 1.3;
const hY = aY + (cY - aY) * 1.3;

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['AC']: { type: 'line', p1: 'A', p2: 'C' },
    ['AE']: { type: 'line', p1: 'A', p2: 'E' },
    ['BC']: { type: 'line', p1: 'B', p2: 'C' },
    ['BE']: { type: 'line', p1: 'B', p2: 'E' },
    ['CD']: { type: 'line', p1: 'C', p2: 'D' },
    ['CE']: { type: 'line', p1: 'C', p2: 'E' },
    ['CF']: { type: 'line', p1: 'C', p2: 'F' },
    ['CG']: { type: 'line', p1: 'C', p2: 'G' },
    ['CH']: { type: 'line', p1: 'C', p2: 'H' },
    ['EF']: { type: 'line', p1: 'E', p2: 'F' },
    ['EG']: { type: 'line', p1: 'E', p2: 'G' },

    ['∠ABC']: { type: 'angle', p1: 'A', v: 'B', p2: 'C', r: 35, ccw: false },
    ['∠ACD']: { type: 'angle', p1: 'A', v: 'C', p2: 'D', r: 35, ccw: false },
    ['∠AEB']: { type: 'angle', p1: 'A', v: 'E', p2: 'B', r: 25, ccw: true },
    ['∠BAC']: { type: 'angle', p1: 'B', v: 'A', p2: 'C', r: 35, ccw: true },
    ['∠BAE']: { type: 'angle', p1: 'B', v: 'A', p2: 'E', r: 35, ccw: true },
    ['∠BCH']: { type: 'angle', p1: 'B', v: 'C', p2: 'H', r: 35, ccw: true },
    ['∠CEG']: { type: 'angle', p1: 'C', v: 'E', p2: 'G', r: 25, ccw: true },
    ['∠ECD']: { type: 'angle', p1: 'E', v: 'C', p2: 'D', r: 35, ccw: false },
    ['∠ECG']: { type: 'angle', p1: 'E', v: 'C', p2: 'G', r: 25, ccw: false },

    ['A']: { type: 'point', x: aX, y: aY, labelY: -12 },
    ['B']: { type: 'point', x: bX, y: bY, labelX: -12 },
    ['C']: { type: 'point', x: cX, y: cY, labelX: -6, labelY: 12 },
    ['D']: { type: 'point', x: dX, y: dY, labelX:  12 },
    ['E']: { type: 'point', x: eX, y: eY, labelX: 3, labelY: -18 },
    ['F']: { type: 'point', x: fX, y: fY, labelY: -12 },
    ['G']: { type: 'point', x: gX, y: gY, labelX: -6, labelY: -12 },
    ['H']: { type: 'point', x: hX, y: hY, labelY:  12 },
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
      ['It is required to show that the exterior angle ', highlight('∠ACD'), ' is greater than ',
       'either of the two opposite interior angles, ', highlight('∠ABC'), ' or ', highlight('∠BAC'), '.'],
    ],
    highlight: [ '∠ABC', '∠ACD', '∠BAC' ],
  },
  {
    name: '4',
    text: [
      ['Bisect AC at ', highlight('E'), '.'],
    ],
    link: propositionRefLink('I', '10'),
    hide: [ '∠ABC', '∠ACD', '∠BAC' ],
    highlight: [ 'E' ],
  },
  {
    name: '5',
    text: [
      ['Construct ', highlight('BE'), '.'],
    ],
    link: postulateRefLink('I', '1'),
    highlight: [ 'BE' ],
  },
  {
    name: '6',
    text: [
      ['Extend BE to create ', highlight('EF'), '.'],
    ],
    link: postulateRefLink('I', '2'),
    highlight: [ 'F', 'EF' ],
  },
  {
    name: '7',
    text: [
      ['Pick ', highlight('G'), ' on EF such that ', highlight('EG'), ' equals ', highlight('BE'), '.'],
    ],
    link: propositionRefLink('I', '3'),
    highlight: [ 'G', 'BE', 'EG' ],
  },
  {
    name: '8',
    text: [
      ['Construct ', highlight('CG'), '.'],
    ],
    link: postulateRefLink('I', '1'),
    highlight: [ 'CG' ],
  },
  {
    name: '9',
    text: [
      ['Extend AC to create ', highlight('CH'), '.'],
    ],
    link: postulateRefLink('I', '2'),
    highlight: [ 'H', 'CH' ],
  },
  {
    name: '10',
    text: [
      ['Since AC and BG intersect at E, the opposite angles ',
       highlight('∠AEB'), ' and ', highlight('∠CEG'), ' are equal.'],
    ],
    link: propositionRefLink('I', '15'),
    highlight: [ '∠AEB', '∠CEG' ],
  },
  {
    name: '11',
    text: [
      ['Consider the triangles AEB and CEG. ', highlight('AE'), ' equals ', highlight('CE'),
       ', ', highlight('BE'), ' equals ', highlight('EG'), ', and ∠AEB equals ∠CEG. ',
       'So, the triangles are equal, thus ', highlight('∠BAE'), ' equals ', highlight('∠ECG'), '.'],
    ],
    link: propositionRefLink('I', '4'),
    highlight: [ 'AE', 'BE', 'CE', 'EG', '∠BAE', '∠ECG' ],
  },
  {
    name: '12',
    text: [
      ['Since ', highlight('∠ECD'), ' is greater than ∠ECG, ', highlight('∠ECD'),
       ' must also be greater than ∠BAE. ', 'Thus ', highlight('∠ACD'),
       ' (same as ', highlight('∠ECD'), ') is greater than ∠BAC (same as ∠BAE), as required.'],
    ],
    link: commonNotionRefLink('I', '5'),
    hide: [ '∠AEB', '∠CEG' ],
    highlight: [ '∠ECD' ],
  },
  {
    name: '13',
    text: [
      ['By bisecting BC and using a similar argument, we can show that ', highlight('∠BCH'),
       ' is greater than ', highlight('∠ABC'), '.'],
    ],
    hide: [ '∠BAE', '∠ECD', '∠ECG'  ],
    highlight: [ '∠ABC', '∠BCH' ],
  },
  {
    name: '14',
    text: [
      ['Since AH and BD intersect at C, the opposite angles ', highlight('∠ACD'), ' and ', highlight('∠BCH'),
       ' are equal. Thus ', highlight('∠ACD'), ' is also greater than ∠ABC, as required.'],
    ],
    link: commonNotionRefLink('I', '5'),
    highlight: [ '∠ACD', '∠BCH' ],
  },
];

const name = '16';
const title = propositionTitle(name);
const summary: Paragraph = [
  ['If one side of any triangle is extended, ',
   'then the exterior angle is greater than either of the two opposite interior angles.'],
];

const stepsAndDiagram: StepsAndDiagram = {
  title,
  summary,
  diagram,
  steps,
};

const pageData = stepsAndDiagramPageData(name, title, stepsAndDiagram);

export default pageData;

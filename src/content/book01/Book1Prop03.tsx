import {
  Diagram,
  LabelDir,
} from '../../diagram';
import {
  propositionNavLink,
  propositionTitle,
} from '../../link';
import {
  link,
  Paragraph,
} from '../../paragraph';
import {
  StepList,
} from '../../step';
import {
  StepsAndDiagram,
} from '../../stepsAndDiagram';

import { Greek } from '../Greek';

const width = 400;
const height = 400;
const lesser = width * 0.25;
const greater = width * 0.4;
const aX = width * 0.5;
const aY = width * 0.5;
const bX = aX + greater;
const bY = aY;
const cX = width * 0.5;
const cY = width * 0.85;
const dX = cX + lesser;
const dY = cY;
const eX = aX - Math.cos(Math.PI / 4) * lesser;
const eY = aY - Math.sin(Math.PI / 4) * lesser;
const fX = aX + lesser;
const fY = aY;

const diagram: Diagram = {
  width,
  height,
  parts: {
    [Greek.alpha]:  { type: 'circle', p1: 'A', p2: 'E', labelDir: LabelDir.W },
    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['CD']: { type: 'line', p1: 'C', p2: 'D' },
    ['AE']: { type: 'line', p1: 'A', p2: 'E' },
    ['AF']: { type: 'line', p1: 'A', p2: 'F' },
    ['A']: { type: 'point', x: aX, y: aY, labelY: 12 },
    ['B']: { type: 'point', x: bX, y: bY, labelY: 12 },
    ['C']: { type: 'point', x: cX, y: cY, labelY: 12 },
    ['D']: { type: 'point', x: dX, y: dY, labelY: 12 },
    ['E']: { type: 'point', x: eX, y: eY, labelX: -10, labelY: -10 },
    ['F']: { type: 'point', x: fX, y: fY, labelX: 10, labelY: 10 },
  },
};

const steps: StepList = [
  {
    name: '1',
    text: [
      ['Let AB and CD be the given straight lines, with AB greater.'],
    ],
    highlight: [ 'A', 'B', 'C', 'D', 'AB', 'CD' ],
  },
  {
    name: '2',
    text: [
      ['Construct the straight line AE equal to CD.'],
      ['(', link(propositionNavLink('I', '2')), ')'],
    ],
    highlight: [ 'E', 'AE' ],
  },
  {
    name: '3',
    text: [
      [`Construct the circle ${Greek.alpha} with center A and radius AE.`],
    ],
    highlight: [ Greek.alpha ],
  },
  {
    name: '4',
    text: [
      [`Let F be the intersection of ${Greek.alpha} and AB.`],
    ],
    highlight: [ 'F' ],
  },
  {
    name: '5',
    text: [
      [`Since AE and AF are both radii of circle ${Greek.alpha}, they are equal.`],
    ],
    highlight: [ 'AE', 'AF' ],
  },
  {
    name: '6',
    text: [
      ['So AF is part of AB and equal to CD, as desired.'],
    ],
    highlight: [ 'AF', 'CD' ],
  },
];

const name = '3';
const title = propositionTitle(name);
const summary: Paragraph = [
  ['Cut off from the greater of two unequal straight lines a straight line equal to the less.'],
];

const proposition: StepsAndDiagram = {
  name,
  title,
  summary,
  diagram,
  steps,
};

export default proposition;

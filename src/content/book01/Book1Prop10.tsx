import { Diagram } from '../../diagram';
import { definitionRefLink, propositionRefLink, propositionTitle } from '../../link';
import { stepsAndDiagramPageData } from '../../page';
import { Paragraph } from '../../paragraph';
import { StepList } from '../../step';
import { StepsAndDiagram } from '../../stepsAndDiagram';

const width = 400;
const height = 400;

const aX = width * 0.2;
const aY = height * 0.7;
const bX = width * 0.8;
const bY = aY;
const cX = width * 0.5;
const cY = aY - (bX - aX) * Math.sqrt(3) / 2;
const dX = cX;
const dY = height * 0.85;
const eX = cX;
const eY = aY;

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

    ['∠ACB']: { type: 'angle', p1: 'A', v: 'C', p2: 'B', r: 25, ccw: true },
    ['∠ACE']: { type: 'angle', p1: 'A', v: 'C', p2: 'E', r: 35, ccw: true },
    ['∠BCE']: { type: 'angle', p1: 'B', v: 'C', p2: 'E', r: 35, ccw: false },

    ['A']: { type: 'point', x: aX, y: aY, labelY:  12 },
    ['B']: { type: 'point', x: bX, y: bY, labelY:  12 },
    ['C']: { type: 'point', x: cX, y: cY, labelY: -12 },
    ['D']: { type: 'point', x: dX, y: dY, labelY:  12 },
    ['E']: { type: 'point', x: eX, y: eY, labelX: 8, labelY: 12 },
  },
};

const steps: StepList = [
  {
    name: '1',
    text: [
      ['Let AB be the given finite straight line.'],
    ],
    highlight: [ 'A', 'B', 'AB' ],
  },
  {
    name: '2',
    text: [
      ['It is required to bisect AB, that is, ',
       'find a point E on AB such that AE equals BE.'],
    ],
    hide: [ 'AB' ],
    highlight: [ 'E', 'AE', 'BE' ],
  },
  {
    name: '3',
    text: [
      ['Construct an equilateral triangle ABC on AB.'],
    ],
    link: propositionRefLink('I', '1'),
    hide: [ 'E', 'AE', 'BE' ],
    show: [ 'AB' ],
    highlight: [ 'C', 'AC', 'BC' ],
  },
  {
    name: '4',
    text: [
      ['Bisect ∠ACB with CD.'],
    ],
    link: propositionRefLink('I', '9'),
    highlight: [ 'C', 'D', 'CD', '∠ACB' ],
  },
  {
    name: '5',
    text: [
      ['Let E be the intersection of AB and CD.'],
    ],
    hide: [ '∠ACB' ],
    highlight: [ 'E', 'AB', 'CD' ],
  },
  {
    name: '6',
    text: [
      ['To show that E bisects AB, it is required to show that AE equals BE.'],
    ],
    hide: [ 'AB' ],
    highlight: [ 'AE', 'BE' ],
  },
  {
    name: '7',
    text: [
      ['Since triangle ABC is equilateral, AC equals BC.'],
    ],
    link: definitionRefLink('I', '20-21', '20a'),
    highlight: [ 'AC', 'BC' ],
  },
  {
    name: '8',
    text: [
      ['Since CE bisects ∠ACB, ∠ACE equals ∠BCE.'],
    ],
    highlight: [ '∠ACE', '∠BCE' ],
  },
  {
    name: '9',
    text: [
      ['Since triangles ACE and BCE have AC equal BC, CE common, ',
       'and ∠ACE equal ∠BCE, their third sides, AE and BE, must be equal, as required.'],
    ],
    link: propositionRefLink('I', '4'),
    highlight: [ 'AC', 'BC', 'AE', 'BE', 'CE', '∠ACE', '∠BCE' ],
  },
];

const name = '10';
const title = propositionTitle(name);
const summary: Paragraph = [
  ['Bisect a given finite straight line.'],
];

const stepsAndDiagram: StepsAndDiagram = {
  title,
  summary,
  diagram,
  steps,
};

const pageData = stepsAndDiagramPageData(name, title, stepsAndDiagram);

export default pageData;

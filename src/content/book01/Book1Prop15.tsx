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

const aX = width * 0.25;
const aY = height * 0.25;
const bX = width * 0.75;
const bY = height * 0.75;
const cX = width * 0.2;
const cY = height * 0.5;
const dX = width * 0.8;
const dY = cY;
const eX = width * 0.5;
const eY = cY;

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['AE']: { type: 'line', p1: 'A', p2: 'E' },
    ['BE']: { type: 'line', p1: 'B', p2: 'E' },
    ['CE']: { type: 'line', p1: 'C', p2: 'E' },
    ['DE']: { type: 'line', p1: 'D', p2: 'E' },

    ['∠AEC']: { type: 'angle', p1: 'A', v: 'E', p2: 'C', r: 40, ccw: true },
    ['∠AED']: { type: 'angle', p1: 'A', v: 'E', p2: 'D', r: 30, ccw: false },
    ['∠BEC']: { type: 'angle', p1: 'B', v: 'E', p2: 'C', r: 30, ccw: false },
    ['∠BED']: { type: 'angle', p1: 'B', v: 'E', p2: 'D', r: 40, ccw: true },

    ['A']: { type: 'point', x: aX, y: aY, labelY: -12 },
    ['B']: { type: 'point', x: bX, y: bY, labelY:  12 },
    ['C']: { type: 'point', x: cX, y: cY, labelY: -12 },
    ['D']: { type: 'point', x: dX, y: dY, labelY: -12 },
    ['E']: { type: 'point', x: eX, y: eY, labelX: 6, labelY: -12 },
  },
};

const steps: StepList = [
  {
    name: '1',
    text: [
      ['Let ', highlight('AB'), ' and ', highlight('CD'), ' intersect at ', highlight('E'), '.'],
    ],
    highlight: [ 'A', 'B', 'C', 'D', 'E', 'AE', 'BE', 'CE', 'DE' ],
  },
  {
    name: '2',
    text: [
      ['It is required to show that ', highlight('∠AEC'), ' equals ', highlight('∠BED'),
       ' and ', highlight('∠AED'), ' equals ', highlight('∠BEC'), '.'],
    ],
    highlight: [ '∠AEC', '∠AED', '∠BEC', '∠BED' ],
  },
  {
    name: '3',
    text: [
      ['Since AE stands on CD, the sum of ', highlight('∠AEC'), ' and ', highlight('∠AED'),
       ' equals two right angles.'],
    ],
    link: propositionRefLink('I', '13'),
    hide: [ '∠BEC', '∠BED' ],
    highlight: [ '∠AEC', '∠AED' ],
  },
  {
    name: '4',
    text: [
      ['Likewise, since DE stands on AB, the sum of ', highlight('∠AED'), ' and ', highlight('∠BED'),
       ' equals two right angles.'],
    ],
    link: propositionRefLink('I', '13'),
    hide: [ '∠AEC' ],
    highlight: [ '∠AED', '∠BED' ],
  },
  {
    name: '5',
    text: [
      ['Since both equal two right angles, the sum of ∠AEC and ', highlight('∠AED'),
       ' equals the sum of ', highlight('∠AED'), ' and ∠BED.'],
    ],
    links: [ postulateRefLink('I', '4'), commonNotionRefLink('I', '1') ],
    show: [ '∠AEC' ],
    highlight: [ '∠AED' ],
  },
  {
    name: '6',
    text: [
      ['Subtract ∠AED from each. Then the remaining angle ∠AEC equals the remaining angle ∠BED, as required.'],
    ],
    link: commonNotionRefLink('I', '3'),
    hide: [ '∠AED' ],
    highlight: [ '∠AEC', '∠BED' ],
  },
  {
    name: '7',
    text: [
      ['Similarly, it can be shown that ∠AED equals ∠BEC, as required.'],
    ],
    hide: [ '∠AEC', '∠BED' ],
    highlight: [ '∠AED', '∠BEC' ],
  },
];

const name = '15';
const title = propositionTitle(name);
const summary: Paragraph = [
  ['If two straight lines intersect, then each pair of opposite angles they make equal each other.'],
];

const stepsAndDiagram: StepsAndDiagram = {
  title,
  summary,
  diagram,
  steps,
};

const pageData = stepsAndDiagramPageData(name, title, stepsAndDiagram);

export default pageData;

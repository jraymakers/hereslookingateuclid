import { Diagram, LabelDir } from '../../diagram';
import { commonNotionRefLink, commonNotionTitle } from '../../link';
import { stepsAndDiagramPageData } from '../../page';
import { Paragraph } from '../../paragraph';
import { StepList } from '../../step';
import { StepsAndDiagram } from '../../stepsAndDiagram';
import { highlight } from '../../paragraph/utils/RunUtils';

const width = 400;
const height = 400;

const aX = width * 0.5;
const aY = height * 0.5;
const bX = aX - width * 0.25 * Math.cos(Math.PI / 4);
const bY = aY - width * 0.25 * Math.sin(Math.PI / 4);
const cX = aX + width * 0.25 * Math.cos(Math.PI / 6);
const cY = aY - width * 0.25 * Math.sin(Math.PI / 6);
const dX = aX + width * 0.4 * Math.cos(Math.PI / 4);
const dY = aY + width * 0.4 * Math.sin(Math.PI / 4);
const eX = aX - width * 0.4 * Math.cos(Math.PI / 6);
const eY = aY + width * 0.4 * Math.sin(Math.PI / 6);

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['α']: { type: 'circle', p1: 'A', p2: 'B', labelDir: LabelDir.E },
    ['β']: { type: 'circle', p1: 'A', p2: 'D', labelDir: LabelDir.E },

    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['AC']: { type: 'line', p1: 'A', p2: 'C' },
    ['AD']: { type: 'line', p1: 'A', p2: 'D' },
    ['AE']: { type: 'line', p1: 'A', p2: 'E' },

    ['A']: { type: 'point', x: aX, y: aY, labelY: -15 },
    ['B']: { type: 'point', x: bX, y: bY, labelX: -10, labelY: -5 },
    ['C']: { type: 'point', x: cX, y: cY, labelX:  10, labelY: -5 },
    ['D']: { type: 'point', x: dX, y: dY, labelX:  10, labelY:  5 },
    ['E']: { type: 'point', x: eX, y: eY, labelX: -10, labelY:  5 },
  },
};

const steps: StepList = [
  {
    name: 'a',
    text: [
      ['Example: Let ', highlight('α'), ' and ', highlight('β'), ' be two circles centered at ',
       highlight('A'), ', with ', highlight('α'), ' smaller.'],
    ],
    highlight: [ 'A', 'α', 'β' ],
  },
  {
    name: 'b',
    text: [
      ['Let ', highlight('AB'), ' and ', highlight('AC'), ' be radii of α.',
       ' So ', highlight('AB'), ' equals ', highlight('AC'), '.'],
    ],
    highlight: [ 'B', 'C', 'AB', 'AC' ],
  },
  {
    name: 'c',
    text: [
      ['Extend AB in the direction of A, so that it intersects β.'],
      ['Let ', highlight('D'), ' be the point of intersection.'],
    ],
    highlight: [ 'D', 'AD' ],
  },
  {
    name: 'd',
    text: [
      ['Similarly, extend AC in the direction of A, so that it intersects β.'],
      ['Let ', highlight('E'), ' be the point of intersection.'],
    ],
    highlight: [ 'E', 'AE' ],
  },
  {
    name: 'e',
    text: [
      ['Because ', highlight('AD'), ' and ', highlight('AE'), ' are both radii of β, they are equal.'],
    ],
    highlight: [ 'AD', 'AE' ],
  },
  {
    name: 'f',
    text: [
      ['Then, ', highlight('BD'), ', which is AB plus AD, and ',
       highlight('CE'), ', which is AC plus AE, are equal.'],
    ],
    link: commonNotionRefLink('I', '2'),
    highlight: [ 'AB', 'AC', 'AD', 'AE' ],
  },
];

const name = '2';
const title = commonNotionTitle(name);
const summary: Paragraph = [
  ['If equals are added to equals, then the wholes are equal.'],
];

const stepsAndDiagram: StepsAndDiagram = {
  title,
  summary,
  diagram,
  steps,
};

const pageData = stepsAndDiagramPageData(name, title, stepsAndDiagram);

export default pageData;

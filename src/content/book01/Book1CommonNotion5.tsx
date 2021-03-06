import { Diagram } from '../../diagram';
import { commonNotionRefLink, commonNotionTitle } from '../../link';
import { stepsAndDiagramPageData } from '../../page';
import { Paragraph } from '../../paragraph';
import { StepList } from '../../step';
import { StepsAndDiagram } from '../../stepsAndDiagram';
import { highlight } from '../../paragraph/utils/RunUtils';

const width = 400;
const height = 400;

const aX = width * 0.2;
const aY = width * 0.5;
const bX = width * 0.8;
const bY = aY;
const cX = width * 0.6;
const cY = aY;

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['AC']: { type: 'line', p1: 'A', p2: 'C' },

    ['A']: { type: 'point', x: aX, y: aY, labelY: -12 },
    ['B']: { type: 'point', x: bX, y: bY, labelY: -12 },
    ['C']: { type: 'point', x: cX, y: cY, labelY: -12 },
  },
};

const steps: StepList = [
  {
    name: 'a',
    text: [
      ['Example: Let ', highlight('AB'), ' be a straight line.'],
    ],
    highlight: [ 'A', 'B', 'AB' ],
  },
  {
    name: 'b',
    text: [
      ['Let ', highlight('C'), ' be between A and B.'],
    ],
    highlight: [ 'C' ],
  },
  {
    name: 'c',
    text: [
      ['Then ', highlight('AC'), ' is a part of AB, so AB is greater than ', highlight('AC'), '.'],
    ],
    link: commonNotionRefLink('I', '5'),
    highlight: [ 'AC' ],
  },
];

const name = '5';
const title = commonNotionTitle(name);
const summary: Paragraph = [
  ['The whole is greater than the part.'],
];

const stepsAndDiagram: StepsAndDiagram = {
  title,
  summary,
  diagram,
  steps,
};

const pageData = stepsAndDiagramPageData(name, title, stepsAndDiagram);

export default pageData;

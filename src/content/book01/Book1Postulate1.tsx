import { Diagram } from '../../diagram';
import { postulateTitle } from '../../link';
import { stepsAndDiagramPageData } from '../../page';
import { Paragraph } from '../../paragraph';
import { StepList } from '../../step';
import { StepsAndDiagram } from '../../stepsAndDiagram';
import { highlight } from '../../paragraph/utils/RunUtils';

const width = 400;
const height = 400;

const aX = width * 0.3;
const aY = height * 0.4;
const bX = width * 0.7;
const bY = height * 0.6;

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['AB']: { type: 'line', p1: 'A', p2: 'B' },

    ['A']: { type: 'point', x: aX, y: aY, labelY: -12 },
    ['B']: { type: 'point', x: bX, y: bY, labelY: 12 },
  },
};

const steps: StepList = [
  {
    name: '1a',
    text: [
      ['Let ', highlight('A'), ' and ', highlight('B'), ' be any two points.'],
    ],
    highlight: [ 'A', 'B' ],
  },
  {
    name: '1b',
    text: [
      ['Then there is a unique straight line ', highlight('AB'), ' with ends A and B.'],
    ],
    highlight: [ 'AB' ],
  },
];

const name = '1';
const title = postulateTitle(name);
const summary: Paragraph = [
  ['Draw a straight line from any point to any point.'],
];

const stepsAndDiagram: StepsAndDiagram = {
  title,
  summary,
  diagram,
  steps,
};

const pageData = stepsAndDiagramPageData(name, title, stepsAndDiagram);

export default pageData;

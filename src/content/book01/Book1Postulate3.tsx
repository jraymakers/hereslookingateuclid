import { Diagram, LabelDir } from '../../diagram';
import { postulateTitle } from '../../link';
import { stepsAndDiagramPageData } from '../../page';
import { italic, Paragraph } from '../../paragraph';
import { StepList } from '../../step';
import { StepsAndDiagram } from '../../stepsAndDiagram';
import { highlight } from '../../paragraph/utils/RunUtils';

const width = 400;
const height = 400;

const aX = width * 0.5;
const aY = height * 0.5;
const bX = width * 0.8;
const bY = aY;

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['α']: { type: 'circle', p1: 'A', p2: 'B', labelDir: LabelDir.W },

    ['AB']: { type: 'line', p1: 'A', p2: 'B' },

    ['A']: { type: 'point', x: aX, y: aY, labelX: -12 },
    ['B']: { type: 'point', x: bX, y: bY, labelX: 12 },
  },
};

const steps: StepList = [
  {
    name: '3a',
    text: [
      ['Let ', highlight('A'), ' and ', highlight('B'), ' be any two points.'],
    ],
    highlight: [ 'A', 'B' ],
  },
  {
    name: '3b',
    text: [
      ['Then there is a unique circle ', highlight('α'), ' with center A and ',
       italic('radius'), ' ', highlight('AB'), '.'],
    ],
    highlight: [ 'α', 'AB' ],
  },
];

const name = '3';
const title = postulateTitle(name);
const summary: Paragraph = [
  ['Describe a circle with any center and radius.'],
];

const stepsAndDiagram: StepsAndDiagram = {
  title,
  summary,
  diagram,
  steps,
};

const pageData = stepsAndDiagramPageData(name, title, stepsAndDiagram);

export default pageData;

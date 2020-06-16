import { Diagram, LabelDir } from '../../diagram';
import { commonNotionRefLink, commonNotionTitle } from '../../link';
import { stepsAndDiagramPageData } from '../../page';
import { Paragraph } from '../../paragraph';
import { StepList } from '../../step';
import { StepsAndDiagram } from '../../stepsAndDiagram';
import { highlight } from '../../paragraph/utils/RunUtils';

const width = 400;
const height = 400;

const aX = width * 0.4;
const aY = width * 0.5;
const bX = width * 0.6;
const bY = width * 0.5;
const cX = aX - width * 0.2 * Math.cos(Math.PI / 4);
const cY = aY + width * 0.2 * Math.sin(Math.PI / 4);
const dX = bX + width * 0.2 * Math.cos(Math.PI / 6);
const dY = bY + width * 0.2 * Math.sin(Math.PI / 6);

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['α']: { type: 'circle', p1: 'A', p2: 'B', labelDir: LabelDir.W },
    ['β']: { type: 'circle', p1: 'B', p2: 'A', labelDir: LabelDir.E },

    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['AC']: { type: 'line', p1: 'A', p2: 'C' },
    ['BD']: { type: 'line', p1: 'B', p2: 'D' },

    ['A']: { type: 'point', x: aX, y: aY, labelX: -10, labelY: -10 },
    ['B']: { type: 'point', x: bX, y: bY, labelX:  10, labelY: -10 },
    ['C']: { type: 'point', x: cX, y: cY, labelX: -10, labelY:  10 },
    ['D']: { type: 'point', x: dX, y: dY, labelX:  10, labelY:  10 },
  },
};

const steps: StepList = [
  {
    name: 'a',
    text: [
      ['Example: Let ', highlight('AB'), ' and ', highlight('AC'),
       ' be radii of circle ', highlight('α'), '. So ', highlight('AB'), ' equals ', highlight('AC'), '.'],
    ],
    highlight: [ 'A', 'B', 'C', 'AB', 'AC', 'α' ],
  },
  {
    name: 'b',
    text: [
      ['And let ', highlight('AB'), ' and ', highlight('BD'), ' be radii of circle ', highlight('β'),
       '. So ', highlight('AB'), ' equals ', highlight('BD'), '.'],
    ],
    highlight: [ 'A', 'B', 'D', 'AB', 'BD', 'β' ],
  },
  {
    name: 'c',
    text: [
      ['Since both ', highlight('AC'), ' and ', highlight('BD'), ' equal AB, then ',
       highlight('AC'), ' equals ', highlight('BD'), '.'],
    ],
    link: commonNotionRefLink('I', '1'),
    highlight: [ 'AC', 'BD' ],
  },
];

const name = '1';
const title = commonNotionTitle(name);
const summary: Paragraph = [
  ['Things which equal the same thing also equal one another.'],
];

const stepsAndDiagram: StepsAndDiagram = {
  title,
  summary,
  diagram,
  steps,
};

const pageData = stepsAndDiagramPageData(name, title, stepsAndDiagram);

export default pageData;

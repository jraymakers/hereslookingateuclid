import {
  Diagram,
  LabelDir,
} from '../../diagram';
import {
  definitionTitle,
} from '../../link';
import {
  leafPageData,
  stepsAndDiagramPageItem,
  textPageItem,
} from '../../page';
import {
  italic,
  Paragraph,
  ParagraphList,
} from '../../paragraph';
import {
  StepList,
} from '../../step';
import {
  StepsAndDiagram,
} from '../../stepsAndDiagram';

const width = 400;
const height = 400;

const aX = width * 0.3;
const aY = height * 0.1;
const bX = width * 0.4;
const bY = height * 0.4;
const cX = width * 0.1;
const cY = height * 0.4;

const dX = width * 0.65;
const dY = height * 0.1;
const eX = width * 0.85;
const eY = height * 0.15;
const fX = width * 0.9;
const fY = height * 0.4;
const gX = width * 0.6;
const gY = height * 0.4;

const hX = width * 0.55;
const hY = height * 0.55;
const jX = width * 0.8;
const jY = height * 0.75;
const kX = width * 0.7;
const kY = height * 0.9;
const lX = width * 0.3;
const lY = height * 0.9;
const mX = width * 0.2;
const mY = height * 0.7;

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['ABC']: { type: 'figure', boundary: [ 'AB', 'BC', 'AC' ] },
    ['DEFG']: { type: 'figure', boundary: [ 'DE', 'EF', 'FG', 'DG' ] },
    ['HJKLM']: { type: 'figure', boundary: [ 'HJ', 'JK', 'KL', 'LM', 'HM' ] },

    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['BC']: { type: 'line', p1: 'B', p2: 'C' },
    ['AC']: { type: 'line', p1: 'A', p2: 'C' },

    ['DE']: { type: 'line', p1: 'D', p2: 'E' },
    ['EF']: { type: 'line', p1: 'E', p2: 'F' },
    ['FG']: { type: 'line', p1: 'F', p2: 'G' },
    ['DG']: { type: 'line', p1: 'D', p2: 'G' },

    ['HJ']: { type: 'line', p1: 'H', p2: 'J' },
    ['JK']: { type: 'line', p1: 'J', p2: 'K' },
    ['KL']: { type: 'line', p1: 'K', p2: 'L' },
    ['LM']: { type: 'line', p1: 'L', p2: 'M' },
    ['HM']: { type: 'line', p1: 'H', p2: 'M' },

    ['A']: { type: 'point', x: aX, y: aY },
    ['B']: { type: 'point', x: bX, y: bY },
    ['C']: { type: 'point', x: cX, y: cY },

    ['D']: { type: 'point', x: dX, y: dY },
    ['E']: { type: 'point', x: eX, y: eY },
    ['F']: { type: 'point', x: fX, y: fY },
    ['G']: { type: 'point', x: gX, y: gY },

    ['H']: { type: 'point', x: hX, y: hY },
    ['J']: { type: 'point', x: jX, y: jY },
    ['K']: { type: 'point', x: kX, y: kY },
    ['L']: { type: 'point', x: lX, y: lY },
    ['M']: { type: 'point', x: mX, y: mY },
  },
};

const steps: StepList = [
  {
    name: '19a',
    text: [
      [italic('Rectilinear figures'), ' are those which are contained by straight lines, ',
       italic('trilateral'), ' figures being those contained by three, '],
    ],
    show: [ 'AB', 'BC', 'AC' ],
    highlight: [ 'ABC' ],
  },
  {
    name: '19b',
    text: [
      [italic('quadrilateral'), ' those contained by four, '],
    ],
    show: [ 'DE', 'EF', 'FG', 'DG' ],
    highlight: [ 'DEFG' ],
  },
  {
    name: '19c',
    text: [
      ['and ', italic('multilateral'), ' those contained by more than four straight lines.'],
    ],
    show: [ 'HJ', 'JK', 'KL', 'LM', 'HM' ],
    highlight: [ 'HJKLM' ],
  },
];

const name = '19';
const title = definitionTitle(name);
const summary: Paragraph = [
  ['Rectilinear Figures'],
];

const stepsAndDiagram: StepsAndDiagram = {
  title,
  summary,
  diagram,
  steps,
};

const pageData = leafPageData(name, title, [
  stepsAndDiagramPageItem(stepsAndDiagram),
]);

export default pageData;

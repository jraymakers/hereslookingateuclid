import {
  Diagram,
  LabelDir,
} from '../../diagram';
import {
  definitionTitle,
} from '../../link';
import {
  stepsAndDiagramPageData,
} from '../../page';
import {
  italic,
  Paragraph,
} from '../../paragraph';
import {
  StepList,
} from '../../step';
import {
  StepsAndDiagram,
} from '../../stepsAndDiagram';

const width = 400;
const height = 400;

const aX = width * 0.2;
const aY = height * 0.1;
const bX = aX - width * 0.2 / Math.sqrt(3);
const bY = aY + height * 0.2;
const cX = aX + width * 0.2 / Math.sqrt(3);
const cY = bY;

const dX = width * 0.5;
const dY = height * 0.1;
const eX = dX - width * 0.05;
const eY = dY + height * 0.2;
const fX = dX + width * 0.05;
const fY = eY;

const gX = width * 0.8;
const gY = height * 0.1;
const hX = gX - width * 0.1;
const hY = gY + height * 0.2;
const jX = gX + width * 0.05;
const jY = hY;

const kX = width * 0.38;
const kY = height * 0.4;
const lX = kX;
const lY = kY + height * 0.21;
const mX = kX + width * 0.28;
const mY = lY;

const nX = width * 0.1;
const nY = height * 0.7;
const oX = nX + width * 0.07;
const oY = nY + height * 0.21;
const pX = oX + width * 0.28;
const pY = oY;

const qX = width * 0.7;
const qY = height * 0.7;
const rX = qX - width * 0.07;
const rY = qY + height * 0.21;
const sX = rX + width * 0.28;
const sY = rY;

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['ABC']: { type: 'figure', boundary: [ 'AB', 'BC', 'AC' ] },
    ['DEF']: { type: 'figure', boundary: [ 'DE', 'EF', 'DF' ] },
    ['GHJ']: { type: 'figure', boundary: [ 'GH', 'HJ', 'GJ' ] },
    ['KLM']: { type: 'figure', boundary: [ 'KL', 'LM', 'KM' ] },
    ['NOP']: { type: 'figure', boundary: [ 'NO', 'OP', 'NP' ] },
    ['QRS']: { type: 'figure', boundary: [ 'QR', 'RS', 'QS' ] },

    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['BC']: { type: 'line', p1: 'B', p2: 'C' },
    ['AC']: { type: 'line', p1: 'A', p2: 'C' },

    ['DE']: { type: 'line', p1: 'D', p2: 'E' },
    ['EF']: { type: 'line', p1: 'E', p2: 'F' },
    ['DF']: { type: 'line', p1: 'D', p2: 'F' },

    ['GH']: { type: 'line', p1: 'G', p2: 'H' },
    ['HJ']: { type: 'line', p1: 'H', p2: 'J' },
    ['GJ']: { type: 'line', p1: 'G', p2: 'J' },

    ['KL']: { type: 'line', p1: 'K', p2: 'L' },
    ['LM']: { type: 'line', p1: 'L', p2: 'M' },
    ['KM']: { type: 'line', p1: 'K', p2: 'M' },

    ['NO']: { type: 'line', p1: 'N', p2: 'O' },
    ['OP']: { type: 'line', p1: 'O', p2: 'P' },
    ['NP']: { type: 'line', p1: 'N', p2: 'P' },

    ['QR']: { type: 'line', p1: 'Q', p2: 'R' },
    ['RS']: { type: 'line', p1: 'R', p2: 'S' },
    ['QS']: { type: 'line', p1: 'Q', p2: 'S' },

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

    ['N']: { type: 'point', x: nX, y: nY },
    ['O']: { type: 'point', x: oX, y: oY },
    ['P']: { type: 'point', x: pX, y: pY },

    ['Q']: { type: 'point', x: qX, y: qY },
    ['R']: { type: 'point', x: rX, y: rY },
    ['S']: { type: 'point', x: sX, y: sY },
  },
};

const steps: StepList = [
  {
    name: '20a',
    text: [
      ['Of trilateral figures, an ',
       italic('equilateral triangle'), ' is that which has its three sides equal, '],
    ],
    show: [ 'AB', 'BC', 'AC' ],
    highlight: [ 'ABC' ],
  },
  {
    name: '20b',
    text: [
      ['an ', italic('isosceles triangle'), ' that which has two of its sides alone equal, '],
    ],
    show: [ 'DE', 'EF', 'DF' ],
    highlight: [ 'DEF' ],
  },
  {
    name: '20c',
    text: [
      ['and a ', italic('scalene triangle'), ' that which has its three sides unequal.'],
    ],
    show: [ 'GH', 'HJ', 'GJ' ],
    highlight: [ 'GHJ' ],
  },
  {
    name: '21a',
    text: [
      ['Further, of trilateral figures, a ',
       italic('right-angled triangle'), ' is that which has a right angle, '],
    ],
    show: [ 'KL', 'LM', 'KM' ],
    highlight: [ 'KLM' ],
  },
  {
    name: '21b',
    text: [
      ['an ', italic('obtuse-angled triangle'), ' that which has an obtuse angle, '],
    ],
    show: [ 'NO', 'OP', 'NP' ],
    highlight: [ 'NOP' ],
  },
  {
    name: '21c',
    text: [
      ['and an ', italic('acute-angled triangle'), ' that which has its three angles acute.'],
    ],
    show: [ 'QR', 'RS', 'QS' ],
    highlight: [ 'QRS' ],
  },
];

const name = '20-21';
const title = definitionTitle(name);
const summary: Paragraph = [
  ['Triangles'],
];

const stepsAndDiagram: StepsAndDiagram = {
  title,
  summary,
  diagram,
  steps,
};

const pageData = stepsAndDiagramPageData(name, title, stepsAndDiagram);

export default pageData;

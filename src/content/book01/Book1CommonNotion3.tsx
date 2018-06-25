import {
  Diagram,
  LabelDir,
} from '../../diagram';
import {
  commonNotionRefLink,
  commonNotionTitle,
} from '../../link';
import {
  stepsAndDiagramPageData,
} from '../../page';
import {
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

const aX = width * 0.5;
const aY = height * 0.5;
const bX = aX - width * 0.4 * Math.cos(Math.PI / 6);
const bY = aY + width * 0.4 * Math.sin(Math.PI / 6);
const cX = aX + width * 0.4 * Math.cos(Math.PI / 4);
const cY = aY + width * 0.4 * Math.sin(Math.PI / 4);
const dX = aX - width * 0.25 * Math.cos(Math.PI / 6);
const dY = aY + width * 0.25 * Math.sin(Math.PI / 6);
const eX = aX + width * 0.25 * Math.cos(Math.PI / 4);
const eY = aY + width * 0.25 * Math.sin(Math.PI / 4);

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
    ['BD']: { type: 'line', p1: 'B', p2: 'D' },
    ['CE']: { type: 'line', p1: 'C', p2: 'E' },

    ['A']: { type: 'point', x: aX, y: aY, labelY: -15 },
    ['B']: { type: 'point', x: bX, y: bY, labelX: -10, labelY:  5 },
    ['C']: { type: 'point', x: cX, y: cY, labelX:  10, labelY:  5 },
    ['D']: { type: 'point', x: dX, y: dY, labelX:   5, labelY: -15 },
    ['E']: { type: 'point', x: eX, y: eY, labelX:  -5, labelY: -15 },
  },
};

const steps: StepList = [
  {
    name: 'a',
    text: [
      [`Example: Let α and β be two circles centered at A,`,
       ` with α larger.`],
    ],
    highlight: [ 'A', 'α', 'β' ],
  },
  {
    name: 'b',
    text: [
      [`Let AB and AC be radii of α. So AB equals AC.`],
    ],
    highlight: [ 'B', 'C', 'AB', 'AC' ],
  },
  {
    name: 'c',
    text: [
      [`Let D be the intersection of AB and β.`],
    ],
    highlight: [ 'D' ],
  },
  {
    name: 'd',
    text: [
      [`Let E be the intersection of AC and β.`],
    ],
    highlight: [ 'E' ],
  },
  {
    name: 'e',
    text: [
      [`Because AD and AE are both radii of β, they are equal.`],
    ],
    highlight: [ 'AD', 'AE' ],
  },
  {
    name: 'f',
    text: [
      [`Then, BD, which is AB minus AD, and CE, which is AC minus AE, are equal.`],
    ],
    link: commonNotionRefLink('I', '3'),
    highlight: [ 'BD', 'CE' ],
  },
];

const name = '3';
const title = commonNotionTitle(name);
const summary: Paragraph = [
  ['If equals are subtracted from equals, then the remainders are equal.'],
];

const stepsAndDiagram: StepsAndDiagram = {
  title,
  summary,
  diagram,
  steps,
};

const pageData = stepsAndDiagramPageData(name, title, stepsAndDiagram);

export default pageData;

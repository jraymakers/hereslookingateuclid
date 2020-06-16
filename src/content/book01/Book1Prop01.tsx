import { Diagram, LabelDir } from '../../diagram';
import {
  commonNotionRefLink,
  definitionRefLink,
  postulateRefLink,
  propositionTitle,
} from '../../link';
import { stepsAndDiagramPageData } from '../../page';
import { Paragraph } from '../../paragraph';
import { StepList } from '../../step';
import { StepsAndDiagram } from '../../stepsAndDiagram';
import { highlight } from '../../paragraph/utils/RunUtils';

const width = 400;
const height = 400;
const centerX = width / 2;
const centerY = height / 2;
const ab = 100;
const aX = centerX - ab / 2;
const aY = centerY;
const bX = centerX + ab / 2;
const bY = centerY;
const cX = centerX;
const cY = centerY - ab * Math.sqrt(3) / 2;

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['α']: { type: 'circle', p1: 'A', p2: 'B', labelDir: LabelDir.W },
    ['β']:  { type: 'circle', p1: 'B', p2: 'A', labelDir: LabelDir.E },
    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['AC']: { type: 'line', p1: 'A', p2: 'C' },
    ['BC']: { type: 'line', p1: 'B', p2: 'C' },
    ['A']: { type: 'point', x: aX, y: aY, labelX: -10 },
    ['B']: { type: 'point', x: bX, y: bY, labelX: 10 },
    ['C']: { type: 'point', x: cX, y: cY, labelY: -12 },
  },
};

const steps: StepList = [
  {
    name: '1',
    text: [
      ['Let ', highlight('AB'), ' be the given straight line.'],
    ],
    highlight: [ 'AB', 'A', 'B' ],
  },
  {
    name: '2',
    text: [
      ['It is required to construct an ', highlight('equilateral triangle on AB'), '.'],
    ],
    highlight: [ 'C', 'AC', 'BC' ],
  },
  {
    name: '3',
    text: [
      ['Construct a circle ', highlight('α'), ' with center A and radius AB.'],
    ],
    link: postulateRefLink('I', '3'),
    hide: [ 'C', 'AC', 'BC' ],
    highlight: [ 'α' ],
  },
  {
    name: '4',
    text: [
      ['Construct another circle ', highlight('β'), ' with center B and radius AB.'],
    ],
    link: postulateRefLink('I', '3'),
    highlight: [ 'β' ],
  },
  {
    name: '5',
    text: [
      ['Let ', highlight('C'), ' be either one of the two intersection points of α and β.'],
      // Note
    ],
    highlight: [ 'C' ],
  },
  {
    name: '6',
    text: [
      ['Construct the straight lines ', highlight('AC'), ' and ', highlight('BC'), '.'],
    ],
    link: postulateRefLink('I', '1'),
    highlight: [ 'AC', 'BC' ],
  },
  {
    name: '7',
    text: [
      ['Since ', highlight('AB'), ' and ', highlight('AC'), ' are both radii of circle α, they are equal.'],
    ],
    link: definitionRefLink('I', '15-18', '15'),
    highlight: [ 'AB', 'AC' ],
  },
  {
    name: '8',
    text: [
      ['Likewise, since ', highlight('AB'), ' and ', highlight('BC'),
       ' are both radii of circle β, they are equal.'],
    ],
    link: definitionRefLink('I', '15-18', '15'),
    highlight: [ 'AB', 'BC' ],
  },
  {
    name: '9',
    text: [
      ['Because AB equals ', highlight('AC'), ' and AB equals ', highlight('BC'),
       ', ', highlight('AC'), ' equals ', highlight('BC'), '.'],
    ],
    link: commonNotionRefLink('I', '1'),
    highlight: [ 'AC', 'BC' ],
  },
  {
    name: '10',
    text: [
      ['Thus ', highlight('AB'), ', ', highlight('AC'), ', and ', highlight('BC'),
       ' equal each other, so the triangle ', highlight('ABC'), ' is equilateral, as required.'],
    ],
    link: definitionRefLink('I', '20-21', '20a'),
    highlight: [ 'AB', 'AC', 'BC' ],
  },
];

const name = '1';
const title = propositionTitle(name);
const summary: Paragraph = [
  ['Construct an equilateral triangle on a given straight line.'],
];

const stepsAndDiagram: StepsAndDiagram = {
  title,
  summary,
  diagram,
  steps,
};

const pageData = stepsAndDiagramPageData(name, title, stepsAndDiagram);

export default pageData;

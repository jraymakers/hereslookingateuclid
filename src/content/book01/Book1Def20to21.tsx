import {
  Diagram,
  LabelDir,
} from '../../diagram';
import {
  definitionTitle,
} from '../../link';
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

const diagram: Diagram = {
  width,
  height,
  parts: {},
};

const steps: StepList = [
  {
    name: '20a',
    text: [
      ['Of trilateral figures, an ',
       italic('equilateral triangle'), ' is that which has its three sides equal, '],
    ],
    highlight: [],
  },
  {
    name: '20b',
    text: [
      ['an ', italic('isosceles triangle'), ' that which has two of its sides alone equal, '],
    ],
    highlight: [],
  },
  {
    name: '20c',
    text: [
      ['and a ', italic('scalene triangle'), ' that which has its three sides unequal.'],
    ],
    highlight: [],
  },
  {
    name: '21a',
    text: [
      ['Further, of trilateral figures, a ',
       italic('right-angled triangle'), ' is that which has a right angle, '],
    ],
    highlight: [],
  },
  {
    name: '21b',
    text: [
      ['an ', italic('obtuse-angled triangle'), ' that which has an obtuse angle, '],
    ],
    highlight: [],
  },
  {
    name: '21c',
    text: [
      ['and an ', italic('acute-angled triangle'), ' that which has its three angles acute.'],
    ],
    highlight: [],
  },
];

const name = '20-21';
const title = definitionTitle(name);
const summary: Paragraph = [
  ['Triangles'],
];

const definitionGroup: StepsAndDiagram = {
  name,
  title,
  summary,
  diagram,
  steps,
};

export default definitionGroup;

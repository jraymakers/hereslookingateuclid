import {
  Diagram,
  LabelDir,
} from '../../diagram';
import {
  defGroupTitle,
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
    name: '20',
    text: [
      ['Of trilateral figures, an ',
       italic('equilateral triangle'), ' is that which has its three sides equal, an ',
       italic('isosceles triangle'), ' that which has two of its sides alone equal, and a ',
       italic('scalene triangle'), ' that which has its three sides unequal.'],
    ],
    highlight: [],
  },
  {
    name: '21',
    text: [
      ['Further, of trilateral figures, a ',
       italic('right-angled triangle'), ' is that which has a right angle, an ',
       italic('obtuse-angled triangle'), ' that which has an obtuse angle, and an ',
       italic('acute-angled triangle'), ' that which has its three angles acute.'],
    ],
    highlight: [],
  },
];

const name = '20-21';
const title = defGroupTitle(name, steps.length);
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

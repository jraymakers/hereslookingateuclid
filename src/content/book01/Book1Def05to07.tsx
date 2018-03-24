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
    name: '5',
    text: [
      ['A ', italic('surface'), ' is that which has length and breadth only.'],
    ],
    highlight: [],
  },
  {
    name: '6',
    text: [
      ['The edges of a surface are lines.'],
    ],
    highlight: [],
  },
  {
    name: '7',
    text: [
      ['A ', italic('plane surface'), ' is a surface which lies evenly with the straight lines on itself.'],
    ],
    highlight: [],
  },
];

const name = '5-7';
const title = defGroupTitle(name, steps.length);
const summary: Paragraph = [
  ['Surfaces'],
];

const definitionGroup: StepsAndDiagram = {
  name,
  title,
  summary,
  diagram,
  steps,
};

export default definitionGroup;

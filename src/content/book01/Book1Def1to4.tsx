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
    name: '1',
    text: [
      ['A ', italic('point'), ' is that which has no part.'],
    ],
    highlight: [],
  },
  {
    name: '2',
    text: [
      ['A ', italic('line'), ' is breadthless length.'],
    ],
    highlight: [],
  },
  {
    name: '3',
    text: [
      ['The ends of a line are points.'],
    ],
    highlight: [],
  },
  {
    name: '4',
    text: [
      ['A ', italic('straight line'), ' is a line which lies evenly with the points on itself.'],
    ],
    highlight: [],
  },
];

const name = '1-4';
const title = defGroupTitle(name, steps.length);
const summary: Paragraph = [
  ['Points and lines'],
];

const definitionGroup: StepsAndDiagram = {
  name,
  title,
  summary,
  diagram,
  steps,
};

export default definitionGroup;

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
    name: '13',
    text: [
      ['A ', italic('boundary'), ' is that which is an extremity of anything.'],
    ],
    highlight: [],
  },
  {
    name: '14',
    text: [
      ['A ', italic('figure'), ' is that which is contained by any boundary or boundaries.'],
    ],
    highlight: [],
  },
];

const name = '13-14';
const title = defGroupTitle(name, steps.length);
const summary: Paragraph = [
  ['Figures'],
];

const definitionGroup: StepsAndDiagram = {
  name,
  title,
  summary,
  diagram,
  steps,
};

export default definitionGroup;

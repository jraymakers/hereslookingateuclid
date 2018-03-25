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
    name: '23',
    text: [
      [italic('Parallel'), ' straight lines are straight lines which, ',
       'being in the same plane and being produced indefinitely in both directions, ',
       'do not meet one another in either direction.'],
    ],
    highlight: [],
  },
];

const name = '23';
const title = defGroupTitle(name, steps.length);
const summary: Paragraph = [
  ['Parallel Lines'],
];

const definitionGroup: StepsAndDiagram = {
  name,
  title,
  summary,
  diagram,
  steps,
};

export default definitionGroup;

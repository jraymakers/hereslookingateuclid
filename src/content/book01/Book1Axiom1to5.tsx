import {
  Diagram,
  LabelDir,
} from '../../diagram';
import {
  axiomGroupTitle,
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
      ['Things which equal the same thing also equal one another.'],
    ],
    highlight: [],
  },
  {
    name: '2',
    text: [
      ['If equals are added to equals, then the wholes are equal.'],
    ],
    highlight: [],
  },
  {
    name: '3',
    text: [
      ['If equals are subtracted from equals, then the remainders are equal.'],
    ],
    highlight: [],
  },
  {
    name: '4',
    text: [
      ['Things which coincide with one another equal one another.'],
    ],
    highlight: [],
  },
  {
    name: '5',
    text: [
      ['The whole is greater than the part.'],
    ],
    highlight: [],
  },
];

const name = '1-5';
const title = axiomGroupTitle(name);
const summary: Paragraph = [
  ['also called Common Notions'],
];

const postulate: StepsAndDiagram = {
  name,
  title,
  summary,
  diagram,
  steps,
};

export default postulate;

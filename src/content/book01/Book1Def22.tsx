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
    name: '22a',
    text: [
      ['Of quadrilateral figures, a ',
       italic('square'), ' is that which is both equilateral and right-angled;'],
    ],
    highlight: [],
  },
  {
    name: '22b',
    text: [
      ['an ', italic('oblong'), ' that which is right-angled but not equilateral;'],
    ],
    highlight: [],
  },
  {
    name: '22c',
    text: [
      ['a ', italic('rhombus'), ' that which is equilateral but not right-angled;'],
    ],
    highlight: [],
  },
  {
    name: '22d',
    text: [
      ['and a ', italic('rhomboid'), ' that which has its opposite sides and angles equal to one another ',
       'but is neither equilateral nor right-angled.'],
    ],
    highlight: [],
  },
  {
    name: '22e',
    text: [
      ['And let quadrilaterals other than these be called ', italic('trapezia'), '.'],
    ],
    highlight: [],
  },
];

const name = '22';
const title = defGroupTitle(name, steps.length);
const summary: Paragraph = [
  ['Quadrilateral Figures'],
];

const definitionGroup: StepsAndDiagram = {
  name,
  title,
  summary,
  diagram,
  steps,
};

export default definitionGroup;

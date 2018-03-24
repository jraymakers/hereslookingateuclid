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
    name: '8',
    text: [
      ['A ', italic('plane angle'), ' is the inclination to one another of two lines in a plane ',
       'which meet one another and do not lie in a straight line.'],
    ],
    highlight: [],
  },
  {
    name: '9',
    text: [
      ['And when the lines containing the angle are straight, the angle is called ',
       italic('rectilinear'), '.'],
    ],
    highlight: [],
  },
  {
    name: '10',
    text: [
      ['When a straight line standing on a straight line makes the adjacent angles equal to one another, ',
       'each of the equal angles is ',
       italic('right'), ' and the straight line standing on the other is called a ',
       italic('perpendicular'), ' to that on which it stands.'],
    ],
    highlight: [],
  },
  {
    name: '11',
    text: [
      ['An ', italic('obtuse angle'), ' is an angle greater than a right angle.'],
    ],
    highlight: [],
  },
  {
    name: '12',
    text: [
      ['An ', italic('acute angle'), ' is an angle less than a right angle.'],
    ],
    highlight: [],
  },
];

const name = '8-12';
const title = defGroupTitle(name, steps.length);
const summary: Paragraph = [
  ['Angles'],
];

const definitionGroup: StepsAndDiagram = {
  name,
  title,
  summary,
  diagram,
  steps,
};

export default definitionGroup;

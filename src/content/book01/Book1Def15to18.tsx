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
    name: '15',
    text: [
      ['A ', italic('circle'), ' is a plane figure contained by one line such that all the straight lines ',
       'falling upon it from one point among those lying within the figure equal one another.'],
    ],
    highlight: [],
  },
  {
    name: '16',
    text: [
      ['And the point is called the ', italic('center'), ' of the circle.'],
    ],
    highlight: [],
  },
  {
    name: '17',
    text: [
      ['A ', italic('diameter'), ' of the circle is any straight line drawn through the center ',
       'and terminated in both directions by the circumference of the circle ',
       'and such a straight line also bisects the circle.'],
    ],
    highlight: [],
  },
  {
    name: '18',
    text: [
      ['A ', italic('semicircle'), ' is the figure contained by the diameter ',
       'and the circumference cut off by it.'],
      ['And the center of the semicircle is of the same as that of the circle.'],
    ],
    highlight: [],
  },
];

const name = '15-18';
const title = defGroupTitle(name, steps.length);
const summary: Paragraph = [
  ['Circles'],
];

const definitionGroup: StepsAndDiagram = {
  name,
  title,
  summary,
  diagram,
  steps,
};

export default definitionGroup;

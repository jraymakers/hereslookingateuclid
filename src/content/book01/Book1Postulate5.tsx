import {
  Diagram,
  LabelDir,
} from '../../diagram';
import {
  postulateTitle,
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
      ['If a straight line falling on two straight lines makes the interior angles on the same side ',
       'less than two right angles, the two straight lines, if extended indefinitely, ',
       'meet on that side on which are the angles less than two right angles.'],
    ],
    highlight: [],
  },
];

const name = '5';
const title = postulateTitle(name);
const summary: Paragraph = [
  ['The Parallel Postulate'],
];

const postulate: StepsAndDiagram = {
  name,
  title,
  summary,
  diagram,
  steps,
};

export default postulate;

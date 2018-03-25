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
    name: '19',
    text: [
      [italic('Rectilinear figures'), ' are those which are contained by straight lines, ',
       italic('trilateral'), ' figures being those contained by three, ',
       italic('quadrilateral'), ' those contained by four, ',
       'and ', italic('multilateral'), ' those contained by more than four straight lines.'],
    ],
    highlight: [],
  },
];

const name = '19';
const title = defGroupTitle(name, steps.length);
const summary: Paragraph = [
  ['Rectilinear Figures'],
];

const definitionGroup: StepsAndDiagram = {
  name,
  title,
  summary,
  diagram,
  steps,
};

export default definitionGroup;

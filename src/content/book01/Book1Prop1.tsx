import {
  Diagram,
  Greek,
  LabelDir,
} from '../../diagram';
import {
  PropositionPage,
} from '../../page';
import {
  StepList,
  Proposition,
} from '../../shared/types';

const propName = '1';
const summary = 'Construct an equilateral triangle on a given straight line.';

const width = 400;
const height = 400;
const centerX = width/2;
const centerY = height/2;
const ab = 100;
const aX = centerX - ab/2;
const aY = centerY;
const bX = centerX + ab/2;
const bY = centerY;
const alphaX = aX - ab;
const alphaY = aY;
const betaX = bX + ab;
const betaY = bY;
const cX = centerX;
const cY = centerY - ab * Math.sqrt(3)/2;

const diagram: Diagram = {
  width: width,
  height: height,
  parts: {
    ['A']: { type: 'point', x: aX, y: aY, labelX: -10 },
    ['B']: { type: 'point', x: bX, y: bY, labelX: 10 },
    ['C']: { type: 'point', x: cX, y: cY, labelY: -12 },
    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['AC']: { type: 'line', p1: 'A', p2: 'C' },
    ['BC']: { type: 'line', p1: 'B', p2: 'C' },
    [Greek.alpha]: { type: 'circle', p1: 'A', p2: 'B', labelDir: LabelDir.W },
    [Greek.beta]:  { type: 'circle', p1: 'B', p2: 'A', labelDir: LabelDir.E },
  }
};

const steps: StepList = [
  {
    text: 'Let AB be the given straight line.',
    highlight: [ 'AB', 'A', 'B' ]
  },
  {
    text: `Construct a circle ${Greek.alpha} with center A and radius AB.`,
    highlight: [ Greek.alpha ]
  },
  {
    text: `Construct another circle ${Greek.beta} with center B and radius AB.`,
    highlight: [ Greek.beta ]
  },
  {
    text: `Let C be either one of the two intersection points of ${Greek.alpha} and ${Greek.beta}.`,
    highlight: [ 'C' ]
  },
  {
    text: 'Construct the straight lines AC and BC.',
    highlight: [ 'AC', 'BC' ]
  },
  {
    text: `Since AB and AC are both radii of circle ${Greek.alpha}, they are equal.`,
    highlight: [ 'AB', 'AC' ]
  },
  {
    text: `Likewise, since AB and BC are both radii of circle ${Greek.beta}, they are equal.`,
    highlight: [ 'AB', 'BC' ]
  },
  {
    text: 'Because AB equals AC and AB equals BC, AC equals BC.',
    highlight: [ 'AC', 'BC' ]
  },
  {
    text: 'Thus AB, AC, and BC equal each other, so the triangle ABC is equilateral, as desired.',
    highlight: [ 'AB', 'AC', 'BC' ]
  }
];

const proposition: Proposition = {
  propName,
  summary,
  diagram,
  steps,
};

export default proposition;

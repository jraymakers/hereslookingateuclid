import { Diagram } from '../../diagram';
import { commonNotionRefLink, commonNotionTitle } from '../../link';
import { stepsAndDiagramPageData } from '../../page';
import { Paragraph } from '../../paragraph';
import { StepList } from '../../step';
import { StepsAndDiagram } from '../../stepsAndDiagram';
import { keyframes, namedClass } from '../../style';

const width = 400;
const height = 400;

const aX = width * 0.3;
const aY = height * 0.1;
const bX = aX - width * 0.2;
const bY = aY + height * 0.4;
const cX = aX + width * 0.1;
const cY = bY;

const dX = width * 0.8;
const dY = height * 0.5;
const eX = dX - width * 0.2;
const eY = dY + height * 0.4;
const fX = dX + width * 0.1;
const fY = eY;

const translatePosAnimation = keyframes({
  '0%': { transform: `translate(0, 0)` },
  '40%': { transform: `translate(${width * 0.25}px, ${width * 0.2}px)` },
  '60%': { transform: `translate(${width * 0.25}px, ${width * 0.2}px)` },
});

const translateNegAnimation = keyframes({
  '0%': { transform: `translate(0, 0)` },
  '40%': { transform: `translate(${-width * 0.25}px, ${-width * 0.2}px)` },
  '60%': { transform: `translate(${-width * 0.25}px, ${-width * 0.2}px)` },
});

const cssPrefix = 'Book1CommonNotion4';

const posClass = namedClass(cssPrefix, 'pos', {
  animationName: translatePosAnimation,
  animationDuration: '5s',
  animationIterationCount: 'infinite',
});

const negClass = namedClass(cssPrefix, 'neg', {
  animationName: translateNegAnimation,
  animationDuration: '5s',
  animationIterationCount: 'infinite',
});

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['AB']: { type: 'line', p1: 'A', p2: 'B', className: posClass },
    ['BC']: { type: 'line', p1: 'B', p2: 'C', className: posClass },
    ['AC']: { type: 'line', p1: 'A', p2: 'C', className: posClass },

    ['DE']: { type: 'line', p1: 'D', p2: 'E', className: negClass },
    ['EF']: { type: 'line', p1: 'E', p2: 'F', className: negClass },
    ['DF']: { type: 'line', p1: 'D', p2: 'F', className: negClass },

    ['A']: { type: 'point', x: aX, y: aY, labelX: -8, labelY: -12, className: posClass },
    ['B']: { type: 'point', x: bX, y: bY, labelX: -12, labelY: -8, className: posClass },
    ['C']: { type: 'point', x: cX, y: cY, labelX:  12, labelY: -8, className: posClass },

    ['D']: { type: 'point', x: dX, y: dY, labelX: 8, labelY: -12, className: negClass },
    ['E']: { type: 'point', x: eX, y: eY, labelX: -12, labelY: 8, className: negClass },
    ['F']: { type: 'point', x: fX, y: fY, labelX:  12, labelY: 8, className: negClass },
  },
};

const steps: StepList = [
  {
    name: 'a',
    text: [
      ['Example: Let ABC and DEF be triangles such that, ',
       'all at the same time, A may be made to coincide with D, ',
       'B with E, and C with F.'],
    ],
    highlight: [ 'A', 'B', 'C', 'D', 'E', 'F', 'AB', 'BC', 'AC', 'DE', 'EF', 'DF' ],
  },
  {
    name: 'b',
    text: [
      ['Then ABC and DEF are equal.'],
    ],
    link: commonNotionRefLink('I', '4'),
    highlight: [ 'A', 'B', 'C', 'D', 'E', 'F', 'AB', 'BC', 'AC', 'DE', 'EF', 'DF' ],
  },
];

const name = '4';
const title = commonNotionTitle(name);
const summary: Paragraph = [
  ['Things which coincide with one another equal one another.'],
];

const stepsAndDiagram: StepsAndDiagram = {
  title,
  summary,
  diagram,
  steps,
};

const pageData = stepsAndDiagramPageData(name, title, stepsAndDiagram);

export default pageData;

import {
  Diagram,
  LabelDir,
} from '../../diagram';
import {
  commonNotionRefLink,
  definitionRefLink,
  postulateRefLink,
  propositionRefLink,
  propositionTitle,
} from '../../link';
import {
  link,
  Paragraph,
} from '../../paragraph';
import {
  StepList,
} from '../../step';
import {
  StepsAndDiagram,
} from '../../stepsAndDiagram';
import {
  keyframes,
  namedClass,
} from '../../style';

import { Greek } from '../Greek';

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
  '100%': { transform: `translate(${width * 0.25}px, ${width * 0.2}px)` },
});

const translateNegAnimation = keyframes({
  '0%': { transform: `translate(0, 0)` },
  '100%': { transform: `translate(${-width * 0.25}px, ${-width * 0.2}px)` },
});

const posClass = namedClass('Book1CommonNotion4', 'pos', {
  animationName: translatePosAnimation,
  animationDuration: '2s',
  animationFillMode: 'both',
});

const negClass = namedClass('Book1CommonNotion4', 'neg', {
  animationName: translateNegAnimation,
  animationDuration: '2s',
  animationFillMode: 'both',
});

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['AB ']: { type: 'line', p1: 'A', p2: 'B', className: posClass },
    ['BC']: { type: 'line', p1: 'B', p2: 'C' },
    ['BC ']: { type: 'line', p1: 'B', p2: 'C', className: posClass },
    ['AC']: { type: 'line', p1: 'A', p2: 'C' },
    ['AC ']: { type: 'line', p1: 'A', p2: 'C', className: posClass },

    ['DE']: { type: 'line', p1: 'D', p2: 'E' },
    ['DE ']: { type: 'line', p1: 'D', p2: 'E', className: negClass },
    ['EF']: { type: 'line', p1: 'E', p2: 'F' },
    ['EF ']: { type: 'line', p1: 'E', p2: 'F', className: negClass },
    ['DF']: { type: 'line', p1: 'D', p2: 'F' },
    ['DF ']: { type: 'line', p1: 'D', p2: 'F', className: negClass },

    ['A']: { type: 'point', x: aX, y: aY, labelX: -8, labelY: -12 },
    ['A ']: { type: 'point', x: aX, y: aY, labelX: -8, labelY: -12, className: posClass },
    ['B']: { type: 'point', x: bX, y: bY, labelX: -12, labelY: -8 },
    ['B ']: { type: 'point', x: bX, y: bY, labelX: -12, labelY: -8, className: posClass },
    ['C']: { type: 'point', x: cX, y: cY, labelX:  12, labelY: -8 },
    ['C ']: { type: 'point', x: cX, y: cY, labelX:  12, labelY: -8, className: posClass },

    ['D']: { type: 'point', x: dX, y: dY, labelX: 8, labelY: -12 },
    ['D ']: { type: 'point', x: dX, y: dY, labelX: 8, labelY: -12, className: negClass },
    ['E']: { type: 'point', x: eX, y: eY, labelX: -12, labelY: 8 },
    ['E ']: { type: 'point', x: eX, y: eY, labelX: -12, labelY: 8, className: negClass },
    ['F']: { type: 'point', x: fX, y: fY, labelX:  12, labelY: 8 },
    ['F ']: { type: 'point', x: fX, y: fY, labelX:  12, labelY: 8, className: negClass },
  },
};

const steps: StepList = [
  {
    name: '1',
    text: [
      ['Let ABC and DEF be the given triangles, with AB equal to DE, AC equal to DF, ',
       'and angle BAC equal to angle EDF.'],
    ],
    show: [ 'A', 'B', 'C', 'D', 'E', 'F', 'BC', 'EF' ],
    highlight: [ 'AB', 'AC', 'DE', 'DF' ],
  },
  {
    name: '2',
    text: [
      ['If A and D are made to coincide, as are AB and DE, ',
       'then B will coincide with E, because AB equals DE.'],
    ],
    hide: [ 'A', 'B', 'C', 'D', 'E', 'F', 'AB', 'AC', 'BC', 'DE', 'DF', 'EF' ],
    show: [ 'C ', 'F ', 'AC ', 'BC ', 'DF ', 'EF ' ],
    highlight: [ 'A ', 'B ', 'D ', 'E ', 'AB ', 'DE ' ],
  },
  {
    name: '3',
    text: [
      ['Also, if AB and DE coincide, then AC will coincide with DF, ',
       'because angle BAC equals angle EDF.'],
    ],
    show: [ 'A ', 'B ', 'C ', 'D ', 'E ', 'F ', 'AB ', 'BC ', 'DE ', 'EF ' ],
    highlight: [ 'AC ', 'DF ' ],
  },
  {
    name: '4',
    text: [
      ['And C will coincide with F, because AC equals DF.'],
    ],
    show: [ 'A ', 'B ', 'D ', 'E ', 'AB ', 'BC ', 'DE ', 'EF ' ],
    highlight: [ 'C ', 'F ', 'AC ', 'DF ' ],
  },
  {
    name: '5',
    text: [
      ['Since B and E coincide, and C and F coincide, BC coincides wiith EF, ',
       'so BC equals EF.'],
      ['(', link(commonNotionRefLink('I', '4')), ')'],
    ],
    show: [ 'A ', 'D ', 'AB ', 'AC ', 'DE ', 'DF ' ],
    highlight: [ 'B ', 'C ', 'E ', 'F ', 'BC ', 'EF ' ],
  },
  {
    name: '6',
    text: [
      ['And the whole triangles ABC and DEF coincide, so they are equal.'],
      ['(', link(commonNotionRefLink('I', '4')), ')'],
    ],
    highlight: [ 'A ', 'B ', 'C ', 'D ', 'E ', 'F ', 'AB ', 'AC ', 'BC ', 'DE ', 'DF ', 'EF ' ],
  },
  {
    name: '7',
    text: [
      ['Also, the angles ABC and DEF coincide, and thus are equal.'],
      ['(', link(commonNotionRefLink('I', '4')), ')'],
    ],
    show: ['A ', 'B ', 'C ', 'D ', 'E ', 'F ', 'AC ', 'DF ' ],
    highlight: [ 'AB ', 'BC ', 'DE ', 'EF ' ],
  },
  {
    name: '8',
    text: [
      ['Likewise, the angles ACB and DFE coincide, and thus are equal.'],
      ['(', link(commonNotionRefLink('I', '4')), ')'],
    ],
    show: ['A ', 'B ', 'C ', 'D ', 'E ', 'F ', 'AB ', 'DE ' ],
    highlight: [ 'AC ', 'BC ', 'DF ', 'EF ' ],
  },
];

const name = '4';
const title = propositionTitle(name);
const summary: Paragraph = [
  [
    'If two triangles have two sides equal to two sides respectively, ',
    'and have the angles contained by the equal sides equal, ',
    'then their third sides are equal, the triangles are equal, ',
    'and the remaining angles equal the remaining angles respectively.',
  ],
];

const proposition: StepsAndDiagram = {
  name,
  title,
  summary,
  diagram,
  steps,
};

export default proposition;

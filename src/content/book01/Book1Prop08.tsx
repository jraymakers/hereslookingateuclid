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
  stepsAndDiagramPageData,
} from '../../page';
import {
  Paragraph,
  ParagraphList,
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

const width = 400;
const height = 400;

const aX = width * 0.2;
const aY = height * 0.2;
const bX = width * 0.1;
const bY = height * 0.8;
const cX = width * 0.45;
const cY = height * 0.6;
const dX = aX + width * 0.45;
const dY = aY;
const eX = bX + width * 0.45;
const eY = bY;
const fX = cX + width * 0.45;
const fY = cY;
const gX = width * 0.8;
const gY = height * 0.25;

const translatePosAnimation = keyframes({
  '0%': { transform: `translate(0, 0)` },
  '100%': { transform: `translate(${width * 0.225}px, 0)` },
});

const translateNegAnimation = keyframes({
  '0%': { transform: `translate(0, 0)` },
  '100%': { transform: `translate(${-width * 0.225}px, 0)` },
});

const cssPrefix = 'Book1Prop8';

const posClass = namedClass(cssPrefix, 'pos', {
  animationName: translatePosAnimation,
  animationDuration: '2s',
  animationFillMode: 'both',
});

const posDoneClass = namedClass(cssPrefix, 'posDone', {
  transform: `translate(${width * 0.225}px, 0)`,
});

const negClass = namedClass(cssPrefix, 'neg', {
  animationName: translateNegAnimation,
  animationDuration: '2s',
  animationFillMode: 'both',
});

const negDoneClass = namedClass(cssPrefix, 'negDone', {
  transform: `translate(${-width * 0.225}px, 0)`,
});

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['AB ']: { type: 'line', p1: 'A', p2: 'B', className: posClass },
    ['AB  ']: { type: 'line', p1: 'A', p2: 'B', className: posDoneClass },
    ['AC']: { type: 'line', p1: 'A', p2: 'C' },
    ['AC ']: { type: 'line', p1: 'A', p2: 'C', className: posClass },
    ['AC  ']: { type: 'line', p1: 'A', p2: 'C', className: posDoneClass },
    ['BC']: { type: 'line', p1: 'B', p2: 'C' },
    ['BC ']: { type: 'line', p1: 'B', p2: 'C', className: posClass },
    ['BC  ']: { type: 'line', p1: 'B', p2: 'C', className: posDoneClass },

    ['DE']: { type: 'line', p1: 'D', p2: 'E' },
    ['DE ']: { type: 'line', p1: 'D', p2: 'E', className: negClass },
    ['DE  ']: { type: 'line', p1: 'D', p2: 'E', className: negDoneClass },
    ['DE   ']: { type: 'line', p1: 'D   ', p2: 'E', className: negDoneClass },
    ['DF']: { type: 'line', p1: 'D', p2: 'F' },
    ['DF ']: { type: 'line', p1: 'D', p2: 'F', className: negClass },
    ['DF  ']: { type: 'line', p1: 'D', p2: 'F', className: negDoneClass },
    ['DF   ']: { type: 'line', p1: 'D   ', p2: 'F', className: negDoneClass },
    ['EF']: { type: 'line', p1: 'E', p2: 'F' },
    ['EF ']: { type: 'line', p1: 'E', p2: 'F', className: negClass },
    ['EF  ']: { type: 'line', p1: 'E', p2: 'F', className: negDoneClass },

    ['EG']: { type: 'line', p1: 'E', p2: 'G', className: negDoneClass },
    ['FG']: { type: 'line', p1: 'F', p2: 'G', className: negDoneClass },

    ['∠BAC']: { type: 'angle', p1: 'B', v: 'A', p2: 'C', r: 25, ccw: true },
    ['∠BAC  ']: { type: 'angle', p1: 'B', v: 'A', p2: 'C', r: 25, ccw: true, className: posDoneClass },
    ['∠EDF']: { type: 'angle', p1: 'E', v: 'D', p2: 'F', r: 25, ccw: true },
    ['∠EDF  ']: { type: 'angle', p1: 'E', v: 'D', p2: 'F', r: 25, ccw: true, className: negDoneClass },

    ['A']: { type: 'point', x: aX, y: aY, labelX: -8, labelY: -12 },
    ['A ']: { type: 'point', x: aX, y: aY, labelX: -8, labelY: -12, className: posClass },
    ['A  ']: { type: 'point', x: aX, y: aY, labelX: -8, labelY: -12, className: posDoneClass },
    ['B']: { type: 'point', x: bX, y: bY, labelX: -8, labelY:  12 },
    ['B ']: { type: 'point', x: bX, y: bY, labelX: -8, labelY:  12, className: posClass },
    ['B  ']: { type: 'point', x: bX, y: bY, labelX: -8, labelY:  12, className: posDoneClass },
    ['C']: { type: 'point', x: cX, y: cY, labelX:  12, labelY: -8 },
    ['C ']: { type: 'point', x: cX, y: cY, labelX:  12, labelY: -8, className: posClass },
    ['C  ']: { type: 'point', x: cX, y: cY, labelX:  12, labelY: -8, className: posDoneClass },
    ['D']: { type: 'point', x: dX, y: dY, labelX:  8, labelY: -12 },
    ['D ']: { type: 'point', x: dX, y: dY, labelX:  8, labelY: -12, className: negClass },
    ['D  ']: { type: 'point', x: dX, y: dY, labelX:  8, labelY: -12, className: negDoneClass },
    ['E']: { type: 'point', x: eX, y: eY, labelX:  8, labelY:  12 },
    ['E ']: { type: 'point', x: eX, y: eY, labelX:  8, labelY:  12, className: negClass },
    ['E  ']: { type: 'point', x: eX, y: eY, labelX:  8, labelY:  12, className: negDoneClass },
    ['F']: { type: 'point', x: fX, y: fY, labelX:  12, labelY:  8 },
    ['F ']: { type: 'point', x: fX, y: fY, labelX:  12, labelY:  8, className: negClass },
    ['F  ']: { type: 'point', x: fX, y: fY, labelX:  12, labelY:  8, className: negDoneClass },
    ['D   ']: { type: 'point', x: gX, y: gY, labelY: -12, className: negDoneClass },
  },
};

const steps: StepList = [
  {
    name: '1',
    text: [
      ['Let ABC and DEF be triangles with AB equal to DE, AC equal to DF, and BC equal to EF.'],
    ],
    highlight: [
      'A', 'B', 'C', 'D', 'E', 'F',
      'AB', 'AC', 'BC', 'DE', 'DF', 'EF',
    ],
  },
  {
    name: '2',
    text: [
      ['It is required to show that ∠BAC equals ∠EDF.'],
    ],
    highlight: [ '∠BAC', '∠EDF' ],
  },
  {
    name: '3',
    text: [
      [
        'If B and E are made to coincide, as are BC and EF, ',
        'then C will coincide with F, because BC equals EF.',
      ],
    ],
    hide: [
      'A', 'B', 'C', 'D', 'E', 'F',
      'AB', 'AC', 'BC', 'DE', 'DF', 'EF',
      '∠BAC', '∠EDF',
    ],
    show: [ 'A ', 'D ', 'AB ', 'AC ', 'DE ', 'DF ' ],
    highlight: [ 'B ', 'C ', 'E ', 'F ', 'BC ', 'EF ' ],
  },
  {
    name: '4',
    text: [
      ['It is desired to show that AB coincides with DE and AC coincides with DF.'],
    ],
    hide: [
      'A ', 'B ', 'C ', 'D ', 'E ', 'F ',
      'AB ', 'AC ', 'BC ', 'DE ', 'DF ', 'EF ',
    ],
    show: [ 'A  ', 'B  ', 'C  ', 'D  ', 'E  ', 'F  ', 'BC  ', 'EF  ' ],
    highlight: [ 'AB  ', 'AC  ', 'DE  ', 'DF  ' ],
  },
  {
    name: '5',
    text: [
      [
        'Assume the opposite: ',
        'that either AB does not coincide with DE or AC does not coincide with DF (or both), ',
        'so that A and D do not coincide.',
      ],
    ],
    hide: [ 'D  ' ],
    highlight: [ 'A  ', 'D   ', 'DE   ', 'DF   ' ],
  },
  {
    name: '6',
    text: [
      [
        'But then there will be two different pairs of lines (AB, AC and DE, DF) ',
        'from the ends of the same straight line meeting in two different points ',
        'on the same side of the line, such that the respective lines from the same end are equal.',
      ],
    ],
    highlight: [ 'AB  ', 'AC  ', 'DE   ', 'DF   ' ],
  },
  {
    name: '7',
    text: [
      [ 'This is not possible, so our assumption must be wrong.' ],
      [ 'Thus AB must coincide with DE and AC with DF.' ],
    ],
    link: propositionRefLink('I', '7'),
    hide: [ 'D   ', 'DE   ', 'DF   ' ],
    show: [ 'D  ' ],
    highlight: [ 'AB  ', 'AC  ', 'DE  ', 'DF  ' ],
  },
  {
    name: '8',
    text: [
      ['Thus, ∠BAC must coincide with ∠EDF, and equal it, as required.'],
    ],
    link: commonNotionRefLink('I', '4'),
    highlight: [ '∠BAC  ', '∠EDF  ' ],
  },
];

const name = '8';
const title = propositionTitle(name);
const summary: Paragraph = [
  [
    'If the three sides of one triangle equal the three sides of another triangle, ',
    'then any pair of angles of the two triangles contained by respectively equal sides are also equal.',
  ],
];

const stepsAndDiagram: StepsAndDiagram = {
  title,
  summary,
  diagram,
  steps,
};

const pageData = stepsAndDiagramPageData(name, title, stepsAndDiagram);

export default pageData;

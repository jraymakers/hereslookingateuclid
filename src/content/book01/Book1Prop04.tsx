import { Diagram } from '../../diagram';
import { commonNotionRefLink, propositionTitle } from '../../link';
import { stepsAndDiagramPageData } from '../../page';
import { Paragraph } from '../../paragraph';
import { StepList } from '../../step';
import { StepsAndDiagram } from '../../stepsAndDiagram';
import { cssClass, keyframes } from '../../style';
import { highlight } from '../../paragraph/utils/RunUtils';

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

const cssPrefix = 'Book1Prop4';

const posClass = cssClass(cssPrefix, 'pos', {
  animationName: translatePosAnimation,
  animationDuration: '2s',
  animationFillMode: 'both',
});

const posDoneClass = cssClass(cssPrefix, 'posDone', {
  transform: `translate(${width * 0.25}px, ${width * 0.2}px)`,
});

const negClass = cssClass(cssPrefix, 'neg', {
  animationName: translateNegAnimation,
  animationDuration: '2s',
  animationFillMode: 'both',
});

const negDoneClass = cssClass(cssPrefix, 'negDone', {
  transform: `translate(${-width * 0.25}px, ${-width * 0.2}px)`,
});

const diagram: Diagram = {
  width,
  height,
  parts: {
    ['AB']: { type: 'line', p1: 'A', p2: 'B' },
    ['AB ']: { type: 'line', p1: 'A', p2: 'B', className: posClass },
    ['AB  ']: { type: 'line', p1: 'A', p2: 'B', className: posDoneClass },
    ['BC']: { type: 'line', p1: 'B', p2: 'C' },
    ['BC ']: { type: 'line', p1: 'B', p2: 'C', className: posClass },
    ['BC  ']: { type: 'line', p1: 'B', p2: 'C', className: posDoneClass },
    ['AC']: { type: 'line', p1: 'A', p2: 'C' },
    ['AC ']: { type: 'line', p1: 'A', p2: 'C', className: posClass },
    ['AC  ']: { type: 'line', p1: 'A', p2: 'C', className: posDoneClass },

    ['DE']: { type: 'line', p1: 'D', p2: 'E' },
    ['DE ']: { type: 'line', p1: 'D', p2: 'E', className: negClass },
    ['DE  ']: { type: 'line', p1: 'D', p2: 'E', className: negDoneClass },
    ['EF']: { type: 'line', p1: 'E', p2: 'F' },
    ['EF ']: { type: 'line', p1: 'E', p2: 'F', className: negClass },
    ['EF  ']: { type: 'line', p1: 'E', p2: 'F', className: negDoneClass },
    ['DF']: { type: 'line', p1: 'D', p2: 'F' },
    ['DF ']: { type: 'line', p1: 'D', p2: 'F', className: negClass },
    ['DF  ']: { type: 'line', p1: 'D', p2: 'F', className: negDoneClass },

    ['∠ABC']: { type: 'angle', p1: 'A', v: 'B', p2: 'C', r: 25, ccw: false },
    ['∠ABC  ']: { type: 'angle', p1: 'A', v: 'B', p2: 'C', r: 25, ccw: false, className: posDoneClass },
    ['∠ACB']: { type: 'angle', p1: 'A', v: 'C', p2: 'B', r: 25, ccw: true },
    ['∠ACB  ']: { type: 'angle', p1: 'A', v: 'C', p2: 'B', r: 25, ccw: true, className: posDoneClass },
    ['∠BAC']: { type: 'angle', p1: 'B', v: 'A', p2: 'C', r: 25, ccw: true },
    ['∠BAC  ']: { type: 'angle', p1: 'B', v: 'A', p2: 'C', r: 25, ccw: true, className: posDoneClass },
    ['∠DEF']: { type: 'angle', p1: 'D', v: 'E', p2: 'F', r: 25, ccw: false },
    ['∠DEF  ']: { type: 'angle', p1: 'D', v: 'E', p2: 'F', r: 25, ccw: false, className: negDoneClass },
    ['∠DFE']: { type: 'angle', p1: 'D', v: 'F', p2: 'E', r: 25, ccw: true },
    ['∠DFE  ']: { type: 'angle', p1: 'D', v: 'F', p2: 'E', r: 25, ccw: true, className: negDoneClass },
    ['∠EDF']: { type: 'angle', p1: 'E', v: 'D', p2: 'F', r: 25, ccw: true },
    ['∠EDF  ']: { type: 'angle', p1: 'E', v: 'D', p2: 'F', r: 25, ccw: true, className: negDoneClass },

    ['A']: { type: 'point', x: aX, y: aY, labelX: -8, labelY: -12 },
    ['A ']: { type: 'point', x: aX, y: aY, labelX: -8, labelY: -12, className: posClass },
    ['A  ']: { type: 'point', x: aX, y: aY, labelX: -8, labelY: -12, className: posDoneClass },
    ['B']: { type: 'point', x: bX, y: bY, labelX: -12, labelY: -8 },
    ['B ']: { type: 'point', x: bX, y: bY, labelX: -12, labelY: -8, className: posClass },
    ['B  ']: { type: 'point', x: bX, y: bY, labelX: -12, labelY: -8, className: posDoneClass },
    ['C']: { type: 'point', x: cX, y: cY, labelX:  12, labelY: -8 },
    ['C ']: { type: 'point', x: cX, y: cY, labelX:  12, labelY: -8, className: posClass },
    ['C  ']: { type: 'point', x: cX, y: cY, labelX:  12, labelY: -8, className: posDoneClass },

    ['D']: { type: 'point', x: dX, y: dY, labelX: 8, labelY: -12 },
    ['D ']: { type: 'point', x: dX, y: dY, labelX: 8, labelY: -12, className: negClass },
    ['D  ']: { type: 'point', x: dX, y: dY, labelX: 8, labelY: -12, className: negDoneClass },
    ['E']: { type: 'point', x: eX, y: eY, labelX: -12, labelY: 8 },
    ['E ']: { type: 'point', x: eX, y: eY, labelX: -12, labelY: 8, className: negClass },
    ['E  ']: { type: 'point', x: eX, y: eY, labelX: -12, labelY: 8, className: negDoneClass },
    ['F']: { type: 'point', x: fX, y: fY, labelX:  12, labelY: 8 },
    ['F ']: { type: 'point', x: fX, y: fY, labelX:  12, labelY: 8, className: negClass },
    ['F  ']: { type: 'point', x: fX, y: fY, labelX:  12, labelY: 8, className: negDoneClass },
  },
};

const steps: StepList = [
  {
    name: '1',
    text: [
      ['Let ABC and DEF be the given triangles, with ', highlight('AB'), ' equal to ', highlight('DE'),
       ', ', highlight('AC'), ' equal to ', highlight('DF'), ', ',
       'and angle ', highlight('∠BAC'), ' equal to angle ', highlight('∠EDF'), '.'],
    ],
    show: [ 'A', 'B', 'C', 'D', 'E', 'F', 'BC', 'EF' ],
    highlight: [ 'AB', 'AC', 'DE', 'DF', '∠BAC', '∠EDF' ],
  },
  {
    name: '2',
    text: [
      ['It is required to show that ', highlight('BC'), ' equals ', highlight('EF'), ', ',
       'that the triangles ABC and DEF are equal, ',
       'and that ', highlight('∠ABC'), ' equals ', highlight('∠DEF'), ' and ',
        highlight('∠ACB'), ' equals ', highlight('∠DFE'), '.',
      ],
    ],
    highlight: [ 'BC', 'EF', '∠ABC', '∠ACB', '∠DEF', '∠DFE' ],
  },
  {
    name: '3',
    text: [
      ['If ', highlight('A'), ' and ', highlight('D'), ' are made to coincide, as are ',
       highlight('AB'), ' and ', highlight('DE'), ', ',
       'then ', highlight('B'), ' will coincide with ', highlight('E'),
        ', because ', highlight('AB'), ' equals ', highlight('DE'), '.'],
    ],
    hide: [
      'A', 'B', 'C', 'D', 'E', 'F',
      'AB', 'AC', 'BC', 'DE', 'DF', 'EF',
      '∠ABC', '∠ACB', '∠BAC', '∠DEF', '∠DFE', '∠EDF',
    ],
    show: [ 'C ', 'F ', 'AC ', 'BC ', 'DF ', 'EF ' ],
    highlight: [ 'A ', 'B ', 'D ', 'E ', 'AB ', 'DE ' ],
  },
  {
    name: '4',
    text: [
      ['Also, if ', highlight('AB'), ' and ', highlight('DE'), ' coincide, then ',
       highlight('AC'), ' will coincide with ', highlight('DF'), ', ',
       'because angle ', highlight('∠BAC'), ' equals angle ', highlight('∠EDF'), '.'],
    ],
    hide: [ 'A ', 'B ', 'C ', 'D ', 'E ', 'F ', 'AB ', 'AC ', 'BC ', 'DE ', 'DF ', 'EF ' ],
    show: [ 'A  ', 'B  ', 'C  ', 'D  ', 'E  ', 'F  ', 'BC  ', 'EF  ' ],
    highlight: [ 'AB  ', 'AC  ', 'DE  ', 'DF  ', '∠BAC  ', '∠EDF  ' ],
  },
  {
    name: '5',
    text: [
      ['And ', highlight('C'), ' will coincide with ', highlight('F'),
       ', because ', highlight('AC'), ' equals ', highlight('DF'), '.'],
    ],
    hide: [ '∠BAC  ', '∠EDF  ' ],
    show: [ 'A  ', 'B  ', 'D  ', 'E  ', 'AB  ', 'BC  ', 'DE  ', 'EF  ' ],
    highlight: [ 'C  ', 'F  ', 'AC  ', 'DF  ' ],
  },
  {
    name: '6',
    text: [
      ['Since ', highlight('B'), ' and ', highlight('E'), ' coincide, and ',
       highlight('C'), ' and ', highlight('F'), ' coincide, ',
       highlight('BC'), ' coincides with ', highlight('EF'), ', ',
       'so ', highlight('BC'), ' equals ', highlight('EF'), ', as required.'],
    ],
    link: commonNotionRefLink('I', '4'),
    show: [ 'A  ', 'D  ', 'AB  ', 'AC  ', 'DE  ', 'DF  ' ],
    highlight: [ 'B  ', 'C  ', 'E  ', 'F  ', 'BC  ', 'EF  ' ],
  },
  {
    name: '7',
    text: [
      ['And the whole triangles ', highlight('ABC'), ' and ', highlight('DEF'),
      ' coincide, so they are equal, as required.'],
    ],
    link: commonNotionRefLink('I', '4'),
    highlight: [ 'A  ', 'B  ', 'C  ', 'D  ', 'E  ', 'F  ', 'AB  ', 'AC  ', 'BC  ', 'DE  ', 'DF  ', 'EF  ' ],
  },
  {
    name: '8',
    text: [
      ['Also, the angles ', highlight('∠ABC'), ' and ', highlight('∠DEF'),
       ' coincide, and thus are equal, as required.'],
    ],
    link: commonNotionRefLink('I', '4'),
    show: ['A  ', 'B  ', 'C  ', 'D  ', 'E  ', 'F  ', 'AB  ', 'AC  ', 'BC  ', 'DE  ', 'DF  ', 'EF  ' ],
    highlight: [ '∠ABC  ', '∠DEF  ' ],
  },
  {
    name: '9',
    text: [
      ['Likewise, the angles ', highlight('∠ACB'), ' and ', highlight('∠DFE'),
       ' coincide, and thus are equal, as required.'],
    ],
    link: commonNotionRefLink('I', '4'),
    hide: [ '∠ABC  ', '∠DEF  ' ],
    show: ['A  ', 'B  ', 'C  ', 'D  ', 'E  ', 'F  ', 'AB  ', 'AC  ', 'BC  ', 'DE  ', 'DF  ', 'EF  ' ],
    highlight: [ '∠ACB  ', '∠DFE  ' ],
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

const stepsAndDiagram: StepsAndDiagram = {
  title,
  summary,
  diagram,
  steps,
};

const pageData = stepsAndDiagramPageData(name, title, stepsAndDiagram);

export default pageData;

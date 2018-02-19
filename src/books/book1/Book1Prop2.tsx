import * as React from 'react';
import { registerPage } from '../../shared/PageRegistry';
import { LabelDir } from '../../shared/constants/LabelDir';
import { DiagramPartMap } from '../../shared/types/Diagram';
import { beta, delta } from '../../shared/constants/GreekLetters';
import { PropositionStep } from '../../shared/types/PropositionStep';
import { Proposition } from '../../shared/components/Proposition';

const title = 'Book 1, Proposition 2 (I.ii)';
const summary = 'Construct a straight line equal to a given straight line with one end at a given point.';

const width = 400;
const height = 400;
const centerX = width/2;
const centerY = height/2;
const dX = centerX;
const dY = centerY;
const ab = 50;
const bc = 100;
const fg = 40;
const dg = ab + bc;
const daAngle = Math.PI*11/24;
const dbAngle = Math.PI*3/24;
const bcAngle = Math.PI*10/24;
const aX = dX + ab * Math.cos(daAngle);
const aY = dY + ab * Math.sin(daAngle);
const bX = dX + ab * Math.cos(dbAngle);
const bY = dY + ab * Math.sin(dbAngle);
const cX = bX - bc * Math.cos(bcAngle);
const cY = bY - bc * Math.sin(bcAngle);
const gX = bX + bc * Math.cos(dbAngle);
const gY = bY + bc * Math.sin(dbAngle);
const hX = aX + bc * Math.cos(daAngle);
const hY = aY + bc * Math.sin(daAngle);
const fX = gX + fg * Math.cos(dbAngle);
const fY = gY + fg * Math.sin(dbAngle);
const eX = hX + fg * Math.cos(daAngle);
const eY = hY + fg * Math.sin(daAngle);

const diagramParts: DiagramPartMap = {
  ['A']: { type: 'point', x: aX, y: aY, labelX: -10},
  ['B']: { type: 'point', x: bX, y: bY, labelX: 9, labelY: -9 },
  ['C']: { type: 'point', x: cX, y: cY, labelY: -12 },
  ['D']: { type: 'point', x: dX, y: dY, labelX: -8, labelY: -8 },
  ['E']: { type: 'point', x: eX, y: eY, labelX: -10 },
  ['F']: { type: 'point', x: fX, y: fY, labelY: -12 },
  ['G']: { type: 'point', x: gX, y: gY, labelX: -6, labelY: -13 },
  ['H']: { type: 'point', x: hX, y: hY, labelX: -10, labelY: -10 },
  ['AB']: { type: 'line', p1: 'A', p2: 'B' },
  ['AD']: { type: 'line', p1: 'A', p2: 'D' },
  ['AH']: { type: 'line', p1: 'A', p2: 'H' },
  ['BC']: { type: 'line', p1: 'B', p2: 'C' },
  ['BD']: { type: 'line', p1: 'B', p2: 'D' },
  ['BG']: { type: 'line', p1: 'B', p2: 'G' },
  ['EH']: { type: 'line', p1: 'E', p2: 'H' },
  ['FG']: { type: 'line', p1: 'F', p2: 'G' },
  [beta]:  { type: 'circle', p1: 'B', p2: 'C', labelDir: LabelDir.W },
  [delta]: { type: 'circle', p1: 'D', p2: 'G', labelDir: LabelDir.W },
};

const steps: PropositionStep[] = [
  {
    text: 'Let A be the given point, and BC the given straight line.',
    highlight: [ 'A', 'B', 'C', 'BC' ]
  },
  {
    text: 'Construct the straight line AB.',
    highlight: [ 'AB' ]
  },
  {
    text: 'Construct an equilateral triangle ABD on AB. So AB, AD, and BD are all equal. (I.i)',
    highlight: [ 'D', 'AD', 'BD' ]
  },
  {
    text: 'Construct the straight lines AE and BF by extending DA and DB, respectively.',
    highlight: [ 'E', 'F', 'AH', 'BG', 'EH', 'FG' ]
  },
  {
    text: `Construct the circle ${beta} with center B and radius BC.`,
    highlight: [ beta ]
  },
  {
    text: `Let G be the intersection of ${beta} and DF.`,
    highlight: [ 'G' ]
  },
  {
    text: `Construct the circle ${delta} with center D and radius DG.`,
    highlight: [ delta ]
  },
  {
    text: `Let H be the intersection of ${delta} and DE.`,
    highlight: [ 'H' ]
  },
  {
    text: `Since BC and BG are both radii of circle ${beta}, they are equal.`,
    highlight: [ 'BC', 'BG' ]
  },
  {
    text: `Since DG and DH are both radii of circle ${delta}, they are equal.`,
    highlight: [ 'AD', 'AH', 'BD', 'BG' ]
  },
  {
    text: 'Because AD equals BD, and AD and BD are parts of DH and DG respectively,'
      + ' the remaining parts of each, AH and BG, are also equal.',
    highlight: [ 'AH', 'BG' ]
  },
  {
    text: 'And since BG also equals BC, then AH equals BC, as desired.',
    highlight: [ 'AH', 'BC' ]
  }
];

registerPage(1, 2, ({ stepNum, goToStep }) =>
  <Proposition
    title={title}
    summary={summary}
    width={width}
    height={height}
    diagramParts={diagramParts}
    steps={steps}
    stepNum={stepNum}
    goToStep={goToStep}
  />
);

import * as React from 'react';
import { Proposition } from '../../shared/components/Proposition';
import { LabelDir } from '../../shared/constants/LabelDir';
import { DiagramPartMap } from '../../shared/types/Diagram';
import { PropositionStep } from '../../shared/types/PropositionStep';
import { alpha, beta } from '../../shared/constants/GreekLetters';

const title = 'Book 1, Proposition 1 (I.i)';
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

const diagramParts: DiagramPartMap = {
  ['A']: { type: 'point', x: aX, y: aY, labelDir: LabelDir.W },
  ['B']: { type: 'point', x: bX, y: bY, labelDir: LabelDir.E },
  ['C']: { type: 'point', x: cX, y: cY, labelDir: LabelDir.N },
  ['AB']: { type: 'line', p1: 'A', p2: 'B' },
  ['AC']: { type: 'line', p1: 'A', p2: 'C' },
  ['BC']: { type: 'line', p1: 'B', p2: 'C' },
  [alpha]: { type: 'circle', c: 'A', rp: 'B', labelDir: LabelDir.W },
  [beta]:  { type: 'circle', c: 'B', rp: 'A', labelDir: LabelDir.E },
};

const steps: PropositionStep[] = [
  {
    text: 'Let AB be the given straight line.',
    highlight: [ 'AB', 'A', 'B' ]
  },
  {
    text: `Construct a circle ${alpha} with center A and radius AB.`,
    highlight: [ alpha ]
  },
  {
    text: `Construct another circle ${beta} with center B and radius AB.`,
    highlight: [ beta ]
  },
  {
    text: `Let C be either one of the two intersection points of ${alpha} and ${beta}.`,
    highlight: [ 'C' ]
  },
  {
    text: 'Construct the straight lines AC and BC.',
    highlight: [ 'AC', 'BC' ]
  },
  {
    text: `Since AB and AC are both radii of circle ${alpha}, they are equal.`,
    highlight: [ 'AB', 'AC' ]
  },
  {
    text: `Likewise, since AB and BC are both radii of circle ${beta}, they are equal.`,
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

export class Book1Prop1 extends React.PureComponent<{}> {

  public render(): JSX.Element {
    return <Proposition
      title={title}
      summary={summary}
      width={width}
      height={height}
      diagramParts={diagramParts}
      steps={steps}
    />;
  }

}

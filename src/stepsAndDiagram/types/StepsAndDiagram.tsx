import { Diagram } from '../../diagram';
import { Paragraph } from '../../paragraph';
import { StepList } from '../../step';

export type StepsAndDiagram = {
  readonly name: string;
  readonly title: string;
  readonly summary: Paragraph;
  readonly diagram: Diagram;
  readonly steps: StepList;
}

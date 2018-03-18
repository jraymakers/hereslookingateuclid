import { Diagram } from '../../diagram';
import { Paragraph } from '../../paragraph';
import { StepList } from '../../step';

export type Proposition = {
  readonly propName: string;
  readonly summary: Paragraph;
  readonly diagram: Diagram;
  readonly steps: StepList;
};

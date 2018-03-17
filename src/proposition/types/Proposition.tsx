import { Diagram } from '../../diagram';
import { StepList } from '../../step';

export type Proposition = {
  readonly propName: string;
  readonly summary: string;
  readonly diagram: Diagram;
  readonly steps: StepList;
};

import { Diagram } from './Diagram';

export type Step = {
  readonly text: string;
  readonly highlight: ReadonlyArray<string>;
};

export type StepList = ReadonlyArray<Step>;

export type Proposition = {
  readonly propName: string;
  readonly summary: string;
  readonly diagram: Diagram;
  readonly steps: StepList;
};

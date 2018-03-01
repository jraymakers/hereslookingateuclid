import { Diagram } from './Diagram';

export type Step = {
  readonly text: string;
  readonly highlight: ReadonlyArray<string>;
};

export type Steps = ReadonlyArray<Step>;

export type Proposition = {
  readonly title: string;
  readonly summary: string;
  readonly diagram: Diagram;
  readonly steps: Steps;
};

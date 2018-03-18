import {
  Paragraph,
} from '../../paragraph';

export type Step = {
  readonly name: string;
  readonly text: Paragraph;
  readonly highlight: ReadonlyArray<string>;
};

export type StepList = ReadonlyArray<Step>;

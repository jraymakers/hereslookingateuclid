import { Diagram } from '../../diagram';
import { Paragraph } from '../../paragraph';
import { StepList } from '../../step';

export type DefinitionGroup = {
  readonly defGroupName: string;
  readonly summary: Paragraph;
  readonly diagram: Diagram;
  readonly steps: StepList;
}
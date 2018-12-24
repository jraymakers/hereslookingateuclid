import {
  LinkInfo,
} from '../../link';
import {
  Paragraph,
} from '../../paragraph';

export type Step = {
  readonly name: string;
  readonly text: Paragraph;
  readonly link?: LinkInfo | null | undefined;
  readonly links?: ReadonlyArray<LinkInfo> | null | undefined;
  readonly show?: ReadonlyArray<string>;
  readonly hide?: ReadonlyArray<string>;
  readonly highlight?: ReadonlyArray<string>;
};

export type StepList = ReadonlyArray<Step>;

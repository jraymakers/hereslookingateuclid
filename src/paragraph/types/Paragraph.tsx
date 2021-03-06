import { LinkInfo } from '../../link';

export type AnchorRun = {
  readonly type: 'anchor';
  readonly linkInfo: LinkInfo;
};

export type LinkRun = {
  readonly type: 'link';
  readonly linkInfo: LinkInfo;
};

export type StyledRun = {
  readonly type: 'styled';
  readonly text: string;
  readonly className: string;
};

export type Run = AnchorRun | LinkRun | StyledRun | string;

export type Sentence = ReadonlyArray<Run>;

export type Paragraph = ReadonlyArray<Sentence>;

export type ParagraphList = ReadonlyArray<Paragraph>;

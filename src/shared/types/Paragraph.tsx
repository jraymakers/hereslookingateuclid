export type StyledRun = {
  readonly text: string;
  readonly className: string;
}

export type Run = StyledRun | string;

export type Sentence = ReadonlyArray<Run>;

export type Paragraph = ReadonlyArray<Sentence>;

export type ParagraphList = ReadonlyArray<Paragraph>;

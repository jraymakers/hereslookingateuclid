import { Paragraph } from '../../paragraph';

export type LinkInfo = {
  readonly text: string;
  readonly url: string;
};

export type LinkInfoList = ReadonlyArray<LinkInfo>;

export type SubtitledLinkInfo = LinkInfo & {
  readonly subtitle?: Paragraph;
};

export type SubtitledLinkInfoList = ReadonlyArray<SubtitledLinkInfo>;

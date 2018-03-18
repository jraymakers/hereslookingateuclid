export type LinkInfo = {
  readonly text: string;
  readonly url: string;
};

export type LinkInfoList = ReadonlyArray<LinkInfo>;

export type SubtitledLinkInfo = LinkInfo & {
  readonly subtitle?: string | null | undefined;
};

export type SubtitledLinkInfoList = ReadonlyArray<SubtitledLinkInfo>;

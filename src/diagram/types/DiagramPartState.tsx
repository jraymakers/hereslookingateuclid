export type DiagramPartState = 'hidden' | 'visible' | 'highlighted';

export type DiagramPartStateMap = {
  [key: string]: DiagramPartState | null | undefined;
};

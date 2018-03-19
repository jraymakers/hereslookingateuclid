const eighthCircle = Math.PI / 4;

const LabelDirInternal = {
  E:  0,
  SE: 1 * eighthCircle,
  S:  2 * eighthCircle,
  SW: 3 * eighthCircle,
  W:  4 * eighthCircle,
  NW: 5 * eighthCircle,
  N:  6 * eighthCircle,
  NE: 7 * eighthCircle,
};

export const LabelDir: Readonly<typeof LabelDirInternal> = LabelDirInternal;

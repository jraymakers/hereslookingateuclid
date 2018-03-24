import { StepList } from '../types/Step';

export function findStepIndex(stepList: StepList, stepName: string): number {
  for (let index = 0; index < stepList.length; index++) {
    const step = stepList[index];
    if (step.name === stepName) {
      return index;
    }
  }
  return -1;
}

import { DiagramPartStateMap } from '../../diagram';
import { StepList } from '../../step';

export function getDiagramPartStates(steps: StepList, currentStepIndex: number): DiagramPartStateMap {
  const stateMap: DiagramPartStateMap = {};
  if (currentStepIndex >= 0) {
    let stepIndex = 0;
    while (stepIndex < currentStepIndex) {
      const step = steps[stepIndex];
      if (step.show) {
        for (const key of step.show) {
          stateMap[key] = 'visible';
        }
      }
      if (step.highlight) {
        for (const key of step.highlight) {
          stateMap[key] = 'visible';
        }
      }
      if (step.hide) {
        for (const key of step.hide) {
          stateMap[key] = 'hidden';
        }
      }
      stepIndex++;
    }
    const currentStep = steps[stepIndex];
    if (currentStep.show) {
      for (const key of currentStep.show) {
        stateMap[key] = 'visible';
      }
    }
    if (currentStep.highlight) {
      for (const key of currentStep.highlight) {
        stateMap[key] = 'highlighted';
      }
    }
    if (currentStep.hide) {
      for (const key of currentStep.hide) {
        stateMap[key] = 'hidden';
      }
    }
  }
  return stateMap;
}

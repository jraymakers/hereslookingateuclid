import { DiagramPartStateMap } from '../../diagram';
import { StepList } from '../../step';

export function getDiagramPartStates(steps: StepList, currentStepIndex: number): DiagramPartStateMap {
  const stateMap: DiagramPartStateMap = {};
  if (currentStepIndex >= 0) {
    let stepIndex = 0;
    while (stepIndex < currentStepIndex) {
      const step = steps[stepIndex];
      for (const key of step.highlight) {
        stateMap[key] = 'visible';
      }
      stepIndex++;
    }
    const currentStep = steps[stepIndex];
    for (const key of currentStep.highlight) {
      stateMap[key] = 'highlighted';
    }
  }
  return stateMap;
}

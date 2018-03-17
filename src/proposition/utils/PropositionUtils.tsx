import { DiagramPartStateMap } from '../../diagram';
import { StepList } from '../../step';

export function getDiagramPartStates(steps: StepList, stepNum: number): DiagramPartStateMap {
  const stateMap: DiagramPartStateMap = {};
  if (stepNum >= 1) {
    let stepIndex = 0;
    while (stepIndex < stepNum - 1) {
      const step = steps[stepIndex];
      for (const key of step.highlight) {
        stateMap[key] = 'visible';
      }
      stepIndex++;
    }
    const step = steps[stepIndex];
    for (const key of step.highlight) {
      stateMap[key] = 'highlighted';
    }
  }
  return stateMap;
}

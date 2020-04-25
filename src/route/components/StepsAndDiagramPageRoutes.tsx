import * as React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';

import { lastStep } from '../../link';
import { StepsAndDiagramPage, stepsAndDiagramPageUrl, StepsAndDiagramPageView } from '../../page';
import { findStepIndex } from '../../step';

const stepNameRoutePropKey = 'stepName';
type RoutePropKeys = typeof stepNameRoutePropKey;
type StepRouteProps = { [key in RoutePropKeys]: string; };

function renderStep(page: StepsAndDiagramPage, stepIndex: number) {
  return (
    <StepsAndDiagramPageView
      page={page}
      currentStepIndex={stepIndex}
    />
  );
}

function renderRedirectToStep(page: StepsAndDiagramPage, stepName: string) {
  return <Redirect to={stepsAndDiagramPageUrl(page, stepName)} />;
}

function renderRedirectToFirstStep(page: StepsAndDiagramPage) {
  const steps = page.stepsAndDiagram.steps;
  return renderRedirectToStep(page, steps[0].name);
}

export const StepsAndDiagramPageRoutes: React.FC<{
  page: StepsAndDiagramPage;
}> = ({ page }) => {
  const renderStepRoute = React.useCallback(
    (props: RouteComponentProps<StepRouteProps>) => {
      const steps = page.stepsAndDiagram.steps;
      const stepName = props.match.params.stepName;
      if (stepName === lastStep) {
        return renderRedirectToStep(page, steps[steps.length - 1].name);
      }
      const stepIndex = findStepIndex(steps, stepName);
      if (0 <= stepIndex && stepIndex < steps.length) {
        return renderStep(page, stepIndex);
      } else {
        return renderRedirectToStep(page, steps[0].name);
      }
    },
    [page],
  );
  return (
    <Switch>
      <Route
        path={stepsAndDiagramPageUrl(page, `:${stepNameRoutePropKey}`)}
        render={renderStepRoute}
      />
      {renderRedirectToFirstStep(page)}
    </Switch>
  );
}
StepsAndDiagramPageRoutes.displayName = 'StepsAndDiagramPageRoutes';

import * as React from 'react';
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router';

import { lastStep } from '../../link';
import {
  StepsAndDiagramPage,
  stepsAndDiagramPageUrl,
  StepsAndDiagramPageView,
} from '../../page';
import { findStepIndex } from '../../step';

type StepsAndDiagramPageRoutesProps = {
  readonly page: StepsAndDiagramPage;
};

type StepRouteProps = RouteComponentProps<{
  readonly stepName: string;
}>;

export class StepsAndDiagramPageRoutes extends React.Component<StepsAndDiagramPageRoutesProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    return (
      <Switch>
        <Route
          path={`${stepsAndDiagramPageUrl(page, ':stepName')}`}
          render={this.renderStepRoute}
        />
        {this.renderRedirectToFirstStep()}
      </Switch>
    );
  }

  private renderRedirectToFirstStep(): JSX.Element {
    const steps = this.props.page.stepsAndDiagram.steps;
    return this.renderRedirectToStep(steps[0].name);
  }

  private renderRedirectToStep(stepName: string): JSX.Element {
    return <Redirect to={stepsAndDiagramPageUrl(this.props.page, stepName)} />;
  }

  private readonly renderStepRoute = (props: StepRouteProps): JSX.Element | null => {
    const page = this.props.page;
    const steps = page.stepsAndDiagram.steps;
    const stepName = props.match.params.stepName;

    if (stepName === lastStep) {
      return this.renderRedirectToStep(steps[steps.length - 1].name);
    }
    const stepIndex = findStepIndex(steps, stepName);
    if (0 <= stepIndex && stepIndex < steps.length) {
      return this.renderStep(stepIndex);
    } else {
      return this.renderRedirectToStep(steps[0].name);
    }
  }

  private renderStep(stepIndex: number): JSX.Element {
    return (
      <StepsAndDiagramPageView
        page={this.props.page}
        currentStepIndex={stepIndex}
      />
    );
  }

}

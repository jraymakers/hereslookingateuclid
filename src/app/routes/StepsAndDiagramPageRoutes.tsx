import * as React from 'react';
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router';

import {
  StepsAndDiagramPage,
  StepsAndDiagramPageView,
} from '../../page';

import {
  findStepIndex,
} from '../../step';

export type MakePageStepUrl = (bookName: string, pageName: string, stepName: string) => string;

type StepsAndDiagramPageRoutesProps = {
  readonly page: StepsAndDiagramPage;
  readonly makePageStepUrl: MakePageStepUrl;
};

type StepRouteProps = RouteComponentProps<{
  readonly stepName: string;
}>;

export class StepsAndDiagramPageRoutes extends React.Component<StepsAndDiagramPageRoutesProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    const bookName = page.bookName;
    const pageName = page.stepsAndDiagram.name;
    return (
      <Switch>
        <Route exact path={this.props.makePageStepUrl(bookName, pageName, ':stepName')}
          render={this.renderStepRoute} />
        <Redirect to={this.props.makePageStepUrl(bookName, pageName, page.stepsAndDiagram.steps[0].name)} />
      </Switch>
    );
  }

  private readonly renderStepRoute = (props: StepRouteProps): JSX.Element => {
    const stepName = props.match.params.stepName;
    const steps = this.props.page.stepsAndDiagram.steps;
    const stepIndex = findStepIndex(steps, stepName);
    if (0 <= stepIndex && stepIndex < steps.length) {
      return this.renderStep(stepIndex);
    } else {
      const page = this.props.page;
      const bookName = page.bookName;
      const pageName = page.stepsAndDiagram.name;
      return <Redirect to={this.props.makePageStepUrl(bookName, pageName, steps[0].name)} />;
    }
  }

  private readonly renderFirstStep = (): JSX.Element => {
    return this.renderStep(0);
  }

  private renderStep(stepIndex: number): JSX.Element {
    return (
      <StepsAndDiagramPageView
        page={this.props.page}
        currentStepIndex={stepIndex}
        makePageStepUrl={this.props.makePageStepUrl}
      />
    );
  }

}

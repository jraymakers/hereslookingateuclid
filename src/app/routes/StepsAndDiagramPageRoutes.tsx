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

type StepsAndDiagramPageRoutesProps = {
  readonly page: StepsAndDiagramPage;
  readonly makePageUrl: (bookName: string, pageName: string) => string;
  readonly makePageStepUrl: (bookName: string, pageName: string, stepName: string) => string;
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
        <Route exact path={this.props.makePageUrl(bookName, pageName)}
          render={this.renderNoStep} />
        <Redirect to={this.props.makePageUrl(bookName, pageName)} />
      </Switch>
    );
  }

  private readonly renderStepRoute = (props: StepRouteProps): JSX.Element => {
    const stepName = props.match.params.stepName;
    const stepIndex = parseInt(stepName, 10) - 1;
    const steps = this.props.page.stepsAndDiagram.steps;
    if (0 <= stepIndex && stepIndex < steps.length) {
      return this.renderStep(stepIndex);
    } else {
      const page = this.props.page;
      const bookName = page.bookName;
      const pageName = page.stepsAndDiagram.name;
      return <Redirect to={this.props.makePageUrl(bookName, pageName)} />
    }
  }

  private readonly renderNoStep = (): JSX.Element => {
    return this.renderStep(-1);
  }

  private renderStep(stepIndex: number): JSX.Element {
    return (
      <StepsAndDiagramPageView
        page={this.props.page}
        currentStepIndex={stepIndex}
        makePageStepUrl={this.props.makePageStepUrl}
        makePageUrl={this.props.makePageUrl}
      />
    );
  }

}

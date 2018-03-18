import * as React from 'react';
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router';

import {
  propStepUrl,
  propUrl,
} from '../../link';
import {
  PropositionPage,
  PropositionPageView,
} from '../../page';

type PropRoutesProps = {
  readonly page: PropositionPage;
};

type StepRouteProps = RouteComponentProps<{
  readonly stepName: string;
}>;

export class PropRoutes extends React.Component<PropRoutesProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    const bookName = page.bookName;
    const propName = page.proposition.propName;
    return (
      <Switch>
        <Route exact path={propStepUrl(bookName, propName, ':stepName')} render={this.renderStepRoute} />
        <Route exact path={propUrl(bookName, propName)} render={this.renderNoStep} />
        <Redirect to={propUrl(bookName, propName)} />
      </Switch>
    );
  }

  private readonly renderStepRoute = (props: StepRouteProps): JSX.Element => {
    const stepName = props.match.params.stepName;
    const stepIndex = parseInt(stepName, 10) - 1;
    const steps = this.props.page.proposition.steps;
    if (0 <= stepIndex && stepIndex < steps.length) {
      return this.renderStep(stepIndex);
    } else {
      const page = this.props.page;
      const bookName = page.bookName;
      const propName = page.proposition.propName;
      return <Redirect to={propUrl(bookName, propName)} />
    }
  }

  private readonly renderNoStep = (): JSX.Element => {
    return this.renderStep(-1);
  }

  private renderStep(stepIndex: number): JSX.Element {
    return <PropositionPageView page={this.props.page} currentStepIndex={stepIndex} />
  }

}

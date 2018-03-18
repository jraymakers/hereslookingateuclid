import * as React from 'react';
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router';

import {
  defGroupStepUrl,
  defGroupUrl,
} from '../../link';
import {
  DefinitionGroupPage,
  DefinitionGroupPageView,
} from '../../page';

type DefGroupRoutesProps = {
  readonly page: DefinitionGroupPage;
};

type StepRouteProps = RouteComponentProps<{
  readonly stepName: string;
}>;

export class DefGroupRoutes extends React.Component<DefGroupRoutesProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    const bookName = page.bookName;
    const defGroupName = page.definitionGroup.defGroupName;
    return (
      <Switch>
        <Route exact path={defGroupStepUrl(bookName, defGroupName, ':stepName')} render={this.renderStepRoute} />
        <Route exact path={defGroupUrl(bookName, defGroupName)} render={this.renderNoStep} />
        <Redirect to={defGroupUrl(bookName, defGroupName)} />
      </Switch>
    );
  }

  private readonly renderStepRoute = (props: StepRouteProps): JSX.Element => {
    const stepName = props.match.params.stepName;
    const stepIndex = parseInt(stepName, 10) - 1;
    const steps = this.props.page.definitionGroup.steps;
    if (0 <= stepIndex && stepIndex < steps.length) {
      return this.renderStep(stepIndex);
    } else {
      const page = this.props.page;
      const bookName = page.bookName;
      const defGroupName = page.definitionGroup.defGroupName;
      return <Redirect to={defGroupUrl(bookName, defGroupName)} />
    }
  }

  private readonly renderNoStep = (): JSX.Element => {
    return this.renderStep(-1);
  }

  private renderStep(stepIndex: number): JSX.Element {
    return <DefinitionGroupPageView page={this.props.page} currentStepIndex={stepIndex} />
  }

}

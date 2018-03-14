import * as React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';

import {
  propUrl,
  propStepUrl,
} from '../link';
import {
  PropositionPage,
  PropositionPageView
} from '../page';

type PropRoutesProps = {
  readonly page: PropositionPage;
};

type StepRouteProps = RouteComponentProps<{
  readonly stepStr: string;
}>;

export class PropRoutes extends React.Component<PropRoutesProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    const bookName = page.bookName;
    const propName = page.proposition.propName;
    return (
      <Switch>
        <Route exact path={propStepUrl(bookName, propName, ':stepStr')} render={this.renderStepRoute} />
        <Route exact path={propUrl(bookName, propName)} render={this.renderStepZero} />
        <Redirect to={propUrl(bookName, propName)} />
      </Switch>
    );
  }

  private readonly renderStepRoute = (props: StepRouteProps): JSX.Element => {
    const stepStr = props.match.params.stepStr;
    const stepNum = parseInt(stepStr, 10);
    const steps = this.props.page.proposition.steps;
    if (stepNum >= 1 && stepNum <= steps.length) {
      return this.renderStep(stepNum);
    } else {
      const page = this.props.page;
      const bookName = page.bookName;
      const propName = page.proposition.propName;
      return <Redirect to={propUrl(bookName, propName)} />
    }
  }

  private readonly renderStepZero = (): JSX.Element => {
    return this.renderStep(0);
  }

  private renderStep(stepNum: number): JSX.Element {
    return <PropositionPageView page={this.props.page} stepNum={stepNum} />
  }

}

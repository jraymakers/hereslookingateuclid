import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { stepsAndDiagramPageUrl } from '../../link';
import { StepsAndDiagram, StepsAndDiagramView } from '../../stepsAndDiagram';

import { StepsAndDiagramPage } from '../types';

import { PageView } from './PageView';

type StepsAndDiagramPageViewProps = RouteComponentProps<{}> & {
  readonly page: StepsAndDiagramPage;
  readonly currentStepIndex: number;
};

class StepsAndDiagramPageViewInternal extends React.PureComponent<StepsAndDiagramPageViewProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    const stepsAndDiagram = page.stepsAndDiagram;
    const currentStepIndex = this.props.currentStepIndex;
    return (
      <PageView page={page} navigate={this.navigate} onKeyDown={this.onKeyDown}>
        <StepsAndDiagramView
          title={stepsAndDiagram.title}
          summary={stepsAndDiagram.summary}
          steps={stepsAndDiagram.steps}
          diagram={stepsAndDiagram.diagram}
          currentStepIndex={currentStepIndex}
          makeStepUrl={this.makeStepUrl}
          prevUrl={this.makePrevUrl()}
          nextUrl={this.makeNextUrl()}
        />
      </PageView>
    );
  }

  public readonly makeStepUrl = (stepName: string) => {
    return stepsAndDiagramPageUrl(this.props.page, stepName);
  }

  public readonly makePrevUrl = () => {
    const currentStepIndex = this.props.currentStepIndex;
    if (currentStepIndex === 0) {
      return null;
    } else {
      const steps = this.props.page.stepsAndDiagram.steps;
      return stepsAndDiagramPageUrl(this.props.page, steps[currentStepIndex - 1].name);
    }
  }

  public readonly makeNextUrl = () => {
    const currentStepIndex = this.props.currentStepIndex;
    const steps = this.props.page.stepsAndDiagram.steps;
    if (currentStepIndex === steps.length - 1) {
      return null;
    } else {
      return stepsAndDiagramPageUrl(this.props.page, steps[currentStepIndex + 1].name);
    }
  }

  private readonly onKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp':
        this.goPrevStep();
        break;
      case 'ArrowDown':
        this.goNextStep();
        break;
    }
  }

  private goPrevStep() {
    const url = this.makePrevUrl();
    if (url) {
      this.navigate(url);
    }
  }

  private goNextStep() {
    const url = this.makeNextUrl();
    if (url) {
      this.navigate(url);
    }
  }

  private readonly navigate = (path: string) => {
    if (this.props.location.pathname !== path) {
      this.props.history.push(path);
    }
  }

}

export const StepsAndDiagramPageView = withRouter(StepsAndDiagramPageViewInternal);

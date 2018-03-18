import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { StepsAndDiagramPage } from '../../page';
import { StepsAndDiagramView } from '../../stepsAndDiagram';

import { PageView } from './PageView';
import { PageHeaderView } from './PageHeaderView';

type StepsAndDiagramPageViewProps = RouteComponentProps<{}> & {
  readonly page: StepsAndDiagramPage;
  readonly currentStepIndex: number;
  readonly makePageUrl: (bookName: string, pageName: string) => string;
  readonly makePageStepUrl: (bookName: string, pageName: string, stepName: string) => string;
};

class StepsAndDiagramPageViewInternal extends React.PureComponent<StepsAndDiagramPageViewProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    const stepsAndDiagram = page.stepsAndDiagram;
    const currentStepIndex = this.props.currentStepIndex;
    return (
      <PageView page={page} onKeyDown={this.onKeyDown}>
        <PageHeaderView header={page.header} />
        <StepsAndDiagramView
          title={stepsAndDiagram.title}
          summary={stepsAndDiagram.summary}
          steps={stepsAndDiagram.steps}
          diagram={stepsAndDiagram.diagram}
          currentStepIndex={currentStepIndex}
          goToStep={this.goToStep}
        />
      </PageView>
    );
  }

  private readonly onKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        this.goPrev();
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        this.goNext();
        break;
    }
  }

  private readonly goPrev = () => {
    const currentStepIndex = this.props.currentStepIndex;
    this.goToStep(Math.max(currentStepIndex - 1, -1));
  };

  private readonly goNext = () => {
    const currentStepIndex = this.props.currentStepIndex;
    this.goToStep(Math.min(currentStepIndex + 1, this.props.page.stepsAndDiagram.steps.length - 1));
  };

  private readonly goToStep = (newStepIndex: number) => {
    const page = this.props.page;
    if (newStepIndex >= 0) {
      const newStep = page.stepsAndDiagram.steps[newStepIndex];
      this.navigate(this.props.makePageStepUrl(page.bookName, page.stepsAndDiagram.name, newStep.name));
    } else {
      this.navigate(this.props.makePageUrl(page.bookName, page.stepsAndDiagram.name));
    }
  }

  private navigate(pathname: string) {
    if (this.props.location.pathname !== pathname) {
      this.props.history.push(pathname);
    }
  }

}

export const StepsAndDiagramPageView = withRouter(StepsAndDiagramPageViewInternal);

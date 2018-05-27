import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { bookTitle } from '../../link';
import { StepsAndDiagramPage } from '../../page';
import { StepsAndDiagramView } from '../../stepsAndDiagram';

import { PageHeaderView } from './PageHeaderView';
import { PageView } from './PageView';

type StepsAndDiagramPageViewProps = RouteComponentProps<{}> & {
  readonly page: StepsAndDiagramPage;
  readonly currentStepIndex: number;
  readonly makePageUrl: (bookName: string, pageName: string, stepName: string) => string;
};

class StepsAndDiagramPageViewInternal extends React.PureComponent<StepsAndDiagramPageViewProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    const stepsAndDiagram = page.stepsAndDiagram;
    const currentStepIndex = this.props.currentStepIndex;
    return (
      <PageView page={page} onKeyDown={this.onKeyDown}>
        {/* <PageHeaderView header={page.bookName ? bookTitle(page.bookName) : null} /> */}
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
    if (currentStepIndex === 0) {
      const page = this.props.page;
      if (page.prev) {
        this.navigate(page.prev.url);
      }
    } else {
      this.goToStep(currentStepIndex - 1);
    }
  }

  private readonly goNext = () => {
    const page = this.props.page;
    const currentStepIndex = this.props.currentStepIndex;
    if (currentStepIndex === page.stepsAndDiagram.steps.length - 1) {
      if (page.next) {
        this.navigate(page.next.url);
      }
    } else {
      this.goToStep(currentStepIndex + 1);
    }
  }

  private readonly goToStep = (newStepIndex: number) => {
    const page = this.props.page;
    const steps = page.stepsAndDiagram.steps;
    if (0 <= newStepIndex && newStepIndex < steps.length) {
      const newStep = steps[newStepIndex];
      this.navigate(this.props.makePageUrl(page.bookName, page.stepsAndDiagram.name, newStep.name));
    } else {
      this.navigate(this.props.makePageUrl(page.bookName, page.stepsAndDiagram.name, steps[0].name));
    }
  }

  private navigate(pathname: string) {
    if (this.props.location.pathname !== pathname) {
      this.props.history.push(pathname);
    }
  }

}

export const StepsAndDiagramPageView = withRouter(StepsAndDiagramPageViewInternal);

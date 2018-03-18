import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { propUrl, propStepUrl } from '../../link';
import { PropositionPage } from '../../page';
import { StepsAndDiagramView } from '../../stepsAndDiagram';

import { PageView } from './PageView';
import { PageTitleView } from './PageTitleView';

type PropositionPageViewProps = RouteComponentProps<{}> & {
  readonly page: PropositionPage;
  readonly currentStepIndex: number;
};

class PropositionPageViewInternal extends React.PureComponent<PropositionPageViewProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    const proposition = page.proposition;
    const currentStepIndex = this.props.currentStepIndex;
    return (
      <PageView page={page} onKeyDown={this.onKeyDown}>
        <PageTitleView title={page.title} />
        <StepsAndDiagramView
          title={`Proposition ${proposition.propName}`}
          summary={proposition.summary}
          steps={proposition.steps}
          diagram={proposition.diagram}
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
    this.goToStep(Math.max(this.props.currentStepIndex - 1, -1));
  };

  private readonly goNext = () => {
    this.goToStep(Math.min(this.props.currentStepIndex + 1, this.props.page.proposition.steps.length - 1));
  };

  private readonly goToStep = (newStepIndex: number) => {
    const page = this.props.page;
    if (newStepIndex >= 0) {
      const newStep = page.proposition.steps[newStepIndex];
      this.navigate(propStepUrl(page.bookName, page.proposition.propName, newStep.name));
    } else {
      this.navigate(propUrl(page.bookName, page.proposition.propName));
    }
  }

  private navigate(pathname: string) {
    if (this.props.location.pathname !== pathname) {
      this.props.history.push(pathname);
    }
  }

}

export const PropositionPageView = withRouter(PropositionPageViewInternal);

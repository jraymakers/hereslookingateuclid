import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { defGroupUrl, defGroupStepUrl } from '../../link';
import { DefinitionGroupPage } from '../../page';
import { StepsAndDiagramView } from '../../stepsAndDiagram';

import { PageView } from './PageView';
import { PageTitleView } from './PageTitleView';

type DefinitionGroupPageViewProps = RouteComponentProps<{}> & {
  readonly page: DefinitionGroupPage;
  readonly currentStepIndex: number;
};

class DefinitionGroupPageViewInternal extends React.PureComponent<DefinitionGroupPageViewProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    const group = page.definitionGroup;
    const currentStepIndex = this.props.currentStepIndex;
    return (
      <PageView page={page} onKeyDown={this.onKeyDown}>
        <PageTitleView title={page.title} />
        <StepsAndDiagramView
          title={this.getTitle()}
          summary={group.summary}
          steps={group.steps}
          diagram={group.diagram}
          currentStepIndex={currentStepIndex}
          goToStep={this.goToStep}
        />
      </PageView>
    );
  }

  private getTitle(): string {
    const steps = this.props.page.definitionGroup.steps;
    if (steps.length > 1) {
      return `Definitions ${steps[0].name} to ${steps[steps.length - 1].name}`
    } else if (steps.length === 1) {
      return `Definition ${steps[0].name}`
    } else {
      console.warn(`def group with no steps`);
      return '';
    }
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
    this.goToStep(Math.min(currentStepIndex + 1, this.props.page.definitionGroup.steps.length - 1));
  };

  private readonly goToStep = (newStepIndex: number) => {
    const page = this.props.page;
    if (newStepIndex >= 0) {
      const newStep = page.definitionGroup.steps[newStepIndex];
      this.navigate(defGroupStepUrl(page.bookName, page.definitionGroup.defGroupName, newStep.name));
    } else {
      this.navigate(defGroupUrl(page.bookName, page.definitionGroup.defGroupName));
    }
  }

  private navigate(pathname: string) {
    if (this.props.location.pathname !== pathname) {
      this.props.history.push(pathname);
    }
  }

}

export const DefinitionGroupPageView = withRouter(DefinitionGroupPageViewInternal);

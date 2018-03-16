import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { propUrl, propStepUrl } from '../../link';
import { PropositionPage } from '../../page';
import { PropositionView } from '../../proposition';

import { PageView } from './PageView';

type PropositionPageViewProps = RouteComponentProps<{}> & {
  readonly page: PropositionPage;
  readonly stepNum: number;
};

class PropositionPageViewInternal extends React.PureComponent<PropositionPageViewProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    const stepNum = this.props.stepNum;
    return (
      <PageView page={page} onKeyDown={this.onKeyDown}>
        <PropositionView
          bookName={page.bookName}
          proposition={page.proposition}
          stepNum={stepNum}
          goToStep={this.goToStep}
        />
      </PageView>
    );
  }

  private readonly onKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowRight':
        this.next();
        break;
      case 'ArrowLeft':
        this.back();
        break;
    }
  }

  private readonly back = () => {
    this.goToStep(Math.max(this.props.stepNum - 1, 0));
  };

  private readonly next = () => {
    this.goToStep(Math.min(this.props.stepNum + 1, this.props.page.proposition.steps.length));
  };

  private readonly goToStep = (newStep: number) => {
    const page = this.props.page;
    if (newStep > 0) {
      this.navigate(propStepUrl(page.bookName, page.proposition.propName, newStep));
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

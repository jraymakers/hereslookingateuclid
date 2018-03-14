import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { PropositionPage } from '../../page';
import { propUrl, propStepUrl } from '../../routes/Urls';
import { PropositionView } from '../../shared/components';

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
      <PageView page={page}>
        <PropositionView
          bookName={page.bookName}
          proposition={page.proposition}
          stepNum={stepNum}
          goToStep={this.goToStep}
        />
      </PageView>
    );
  }

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

import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { NavBar } from './NavBar';
import { PropositionView } from '../shared/components';
import { PropositionPage } from '../shared/types';
import { propUrl, propStepUrl } from '../routes/Urls';

type PropositionPageViewProps = RouteComponentProps<{}> & {
  readonly page: PropositionPage;
  readonly stepNum: number;
};

class PropositionPageView extends React.PureComponent<PropositionPageViewProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    const stepNum = this.props.stepNum;
    return (
      <div>
        <NavBar prev={page.prev} up={page.up} next={page.next}></NavBar>
        <PropositionView
          bookName={page.bookName}
          proposition={page.proposition}
          stepNum={stepNum}
          goToStep={this.goToStep}
        />
      </div>
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

export const PropositionPageViewWithRouter = withRouter(PropositionPageView);

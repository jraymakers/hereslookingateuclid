import * as React from 'react';
import { RouteComponentProps, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';

import books from '../books';
import { PropositionPageView } from '../app/PropositionPageView';
import { getProposition, validBook } from '../shared/utils/BookUtils';

export type BookPropStepRouteProps = RouteComponentProps<{
  readonly bookNumStr: string;
  readonly propNumStr: string;
  readonly stepNumStr: string;
}>;

export class BookPropStepRoute extends React.PureComponent<BookPropStepRouteProps> {

  public render(): JSX.Element {
    const params = this.props.match.params;
    const bookNum = parseInt(params.bookNumStr, 10);
    const propNum = parseInt(params.propNumStr, 10);
    const stepNum = parseInt(params.stepNumStr, 10);
    const proposition = getProposition(books, { bookNum, propNum });

    if (proposition) {
      if (stepNum >= 0 && stepNum <= proposition.steps.length) {
        return (
          <PropositionPageView
            bookNum={bookNum}
            propNum={propNum}
            stepNum={stepNum}
            goToBookPropStep={this.goToBookPropStep}
          />
        );
      } else {
        return <Redirect to={`/book/${bookNum}/prop/${propNum}/step/0`} />;
      }
    } else {
      return <Redirect to={`/book/${bookNum}`} />;
    }
  }

  private readonly goToBookPropStep = (bookNum: number, propNum: number, stepNum: number) => {
    const url = `/book/${bookNum}/prop/${propNum}/step/${stepNum}`;
    if (this.props.history.location.pathname !== url) {
      this.props.history.push(url);
    }
  }

}

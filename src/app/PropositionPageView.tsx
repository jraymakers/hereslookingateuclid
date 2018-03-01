import * as React from 'react';
import { style } from 'typestyle';

import books from '../books';
import { PropositionView } from '../shared/components';
import { getProposition, getPrevBookProp, getNextBookProp } from '../shared/utils/BookUtils';

import { TopBar } from './TopBar';

const classPrefix = 'PropositionPageView';

const rootClass = style({
  $debugName: `${classPrefix}_root`,
  $unique: true,
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 1000,
  fontFamily: 'serif',
  fontSize: 16,
});

const contentClass = style({
  $debugName: `${classPrefix}_content`,
  $unique: true,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

export type PropositionPageViewProps = {
  readonly bookNum: number;
  readonly propNum: number;
  readonly stepNum: number;
  readonly goToBookPropStep: (bookNum: number, propNum: number, stepNum: number) => void;
};

export class PropositionPageView extends React.PureComponent<PropositionPageViewProps> {

  public render(): JSX.Element {
    const bookNum = this.props.bookNum;
    const propNum = this.props.propNum;
    const stepNum = this.props.stepNum;
    return (
      <div className={rootClass}>
        <TopBar
          previousEnabled={!!getPrevBookProp(books, { bookNum, propNum })}
          nextEnabled={!!getNextBookProp(books, { bookNum, propNum })}
          onPrevious={this.onPreviousPage}
          onNext={this.onNextPage}
        />
        <div className={contentClass}>
          {this.renderProposition(bookNum, propNum, stepNum)}
        </div>
      </div>
    );
  }

  public renderProposition(bookNum: number, propNum: number, stepNum: number): JSX.Element | null {
    const proposition = getProposition(books, { bookNum, propNum });
    if (proposition) {
      return (
        <PropositionView
          proposition={proposition}
          stepNum={Math.min(Math.max(stepNum, 0), proposition.steps.length)}
          goToStep={this.goToStep}
        />
      );
    } else {
      return null;
    }
  }

  private readonly onPreviousPage = () => {
    const bookNum = this.props.bookNum;
    const propNum = this.props.propNum;
    const prevBookProp = getPrevBookProp(books, { bookNum, propNum });
    if (prevBookProp) {
      this.props.goToBookPropStep(prevBookProp.bookNum, prevBookProp.propNum, 0);
    }
  };

  private readonly onNextPage = () => {
    const bookNum = this.props.bookNum;
    const propNum = this.props.propNum;
    const nextBookProp = getNextBookProp(books, { bookNum, propNum });
    if (nextBookProp) {
      this.props.goToBookPropStep(nextBookProp.bookNum, nextBookProp.propNum, 0);
    }
  };

  private readonly goToStep = (stepNum: number) => {
    const bookNum = this.props.bookNum;
    const propNum = this.props.propNum;
    this.props.goToBookPropStep(bookNum, propNum, stepNum);
  };

}

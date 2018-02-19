import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { style } from 'typestyle';
import { getPage, getPreviousSectionAndPage, getNextSectionAndPage } from '../shared/PageRegistry';
import { TopBar } from './TopBar';

const classPrefix = 'BookPropView';

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

export type BookPropViewProps = RouteComponentProps<{
  readonly bookNumStr: string;
  readonly propNumStr: string;
  readonly stepNumStr: string;
}>;

export class BookPropView extends React.PureComponent<BookPropViewProps> {

  public render(): JSX.Element {
    const { bookNum, propNum, stepNum } = this.getBookPropStep();
    return (
      <div className={rootClass}>
        <TopBar
          previousEnabled={!!getPreviousSectionAndPage(bookNum, propNum)}
          nextEnabled={!!getNextSectionAndPage(bookNum, propNum)}
          onPrevious={this.onPreviousPage}
          onNext={this.onNextPage}
        />
        <div className={contentClass}>
          {this.renderPage(bookNum, propNum, stepNum)}
        </div>
      </div>
    );
  }

  public renderPage(bookNum: number, propNum: number, stepNum: number): JSX.Element | null {
    const renderer = getPage(bookNum, propNum);
    if (renderer) {
      return renderer({ stepNum, goToStep: this.goToStep });
    } else {
      return null;
    }
  }

  private readonly onPreviousPage = () => {
    const { bookNum, propNum } = this.getBookPropStep();
    const sectionAndPage = getPreviousSectionAndPage(bookNum, propNum);
    if (sectionAndPage) {
      const { sectionNum, pageNum } = sectionAndPage;
      this.goToBookPropStep(sectionNum, pageNum, 0);
    }
  };

  private readonly onNextPage = () => {
    const { bookNum, propNum } = this.getBookPropStep();
    const sectionAndPage = getNextSectionAndPage(bookNum, propNum);
    if (sectionAndPage) {
      const { sectionNum, pageNum } = sectionAndPage;
      this.goToBookPropStep(sectionNum, pageNum, 0);
    }
  };

  private readonly goToStep = (stepNum: number) => {
    const { bookNum, propNum } = this.getBookPropStep();
    this.goToBookPropStep(bookNum, propNum, stepNum);
  };

  private goToBookPropStep(bookNum: number, propNum: number, stepNum: number) {
    const url = `/book/${bookNum}/prop/${propNum}/step/${stepNum}`;
    if (this.props.history.location.pathname !== url) {
      this.props.history.push(url);
    }
  }

  private getBookPropStep() {
    const { bookNumStr, propNumStr, stepNumStr } = this.props.match.params;
    return {
      bookNum: parseInt(bookNumStr, 10),
      propNum: parseInt(propNumStr, 10),
      stepNum: parseInt(stepNumStr, 10),
    };
  }

}

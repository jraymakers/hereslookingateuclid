import * as React from 'react';
import { style } from 'typestyle';
import { Book1Prop1 } from '../books/book1/Book1Prop1';
import { Book1Prop2 } from '../books/book1/Book1Prop2';

const classPrefix = 'App';

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
});

const topBarClass = style({
  $debugName: `${classPrefix}_topBar`,
  $unique: true,
  display: 'flex',
  flexDirection: 'row',
});

const topBarLeftClass = style({
  $debugName: `${classPrefix}_topBarLeft`,
  $unique: true,
  flex: 1,
});

const topBarCenterClass = style({
  $debugName: `${classPrefix}_topBarCenter`,
  $unique: true,
  flex: 'none',
  display: 'flex',
  flexDirection: 'column',
});

const topBarTitleClass = style({
  $debugName: `${classPrefix}_topBarTitle`,
  $unique: true,
  textAlign: 'center',
  fontSize: 24,
});

const topBarRightClass = style({
  $debugName: `${classPrefix}_topBarRight`,
  $unique: true,
  flex: 1,
  textAlign: 'right',
});

const contentClass = style({
  $debugName: `${classPrefix}_content`,
  $unique: true,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

export type AppState = {
  readonly page: number;
};

const minPage = 1;
const maxPage = 2;

export class App extends React.PureComponent<{}, AppState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      page: minPage
    };
  }

  public render(): JSX.Element {
    return (
      <div className={rootClass}>
        <div className={topBarClass}>
          <div className={topBarLeftClass}>
          <button onClick={this.back} disabled={this.state.page === minPage}>Back</button>
          </div>
          <div className={topBarCenterClass}>
            <div className={topBarTitleClass}>Here's Looking at Euclid</div>
            <button onClick={this.start} disabled={this.state.page === minPage}>Start</button>
          </div>
          <div className={topBarRightClass}>
          <button onClick={this.next} disabled={this.state.page === maxPage}>Next</button>
          </div>
        </div>
        <div className={contentClass}>
          {this.renderContent()}
        </div>
      </div>
    );
  }

  private renderContent(): JSX.Element | null {
    switch (this.state.page) {
      case 1:
        return <Book1Prop1 />;
      case 2:
        return <Book1Prop2 />;
      default:
        return null;
    }
  }

  private readonly start = () => {
    this.setState({
      page: minPage,
    });
  };

  private readonly back = () => {
    this.setState({
      page: Math.max(this.state.page - 1, minPage),
    });
  };

  private readonly next = () => {
    this.setState({
      page: Math.min(this.state.page + 1, maxPage),
    });
  };

  private readonly end = () => {
    this.setState({
      page: maxPage,
    });
  };

}

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
  maxWidth: 1000,
  fontFamily: 'serif',
  fontSize: 16,
});

const topBarClass = style({
  $debugName: `${classPrefix}_topBar`,
  $unique: true,
  display: 'flex',
  flexDirection: 'row',
  padding: 12,
});

const topBarLeftClass = style({
  $debugName: `${classPrefix}_topBarLeft`,
  $unique: true,
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
});

const topBarCenterClass = style({
  $debugName: `${classPrefix}_topBarCenter`,
  $unique: true,
  flex: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
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
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'stretch',
});

const contentClass = style({
  $debugName: `${classPrefix}_content`,
  $unique: true,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

const buttonClass = style({
  $debugName: `${classPrefix}_button`,
  $unique: true,
  paddingLeft: 12,
  paddingRight: 12,
  border: '1px solid #ddd',
  outline: 'none',
  $nest: {
    '&:focus': {
      $unique: true,
      outline: '1px solid black',
    },
    '&:hover': {
      $unique: true,
      backgroundColor: '#eee',
    },
    '&:disabled': {
      $unique: true,
      backgroundColor: 'transparent',
      border: '1px solid #888',
      opacity: 0.3,
    },
  }
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
            <button
              className={buttonClass}
              disabled={this.state.page === minPage}
              onClick={this.prevPage}
            >
              Previous Page
            </button>
          </div>
          <div className={topBarCenterClass}>
            <div className={topBarTitleClass}>Here's Looking at Euclid</div>
          </div>
          <div className={topBarRightClass}>
            <button
              className={buttonClass}
              disabled={this.state.page === maxPage}
              onClick={this.nextPage}
            >
              Next Page
            </button>
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

  private readonly prevPage = () => {
    this.setState({
      page: Math.max(this.state.page - 1, minPage),
    });
  };

  private readonly nextPage = () => {
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

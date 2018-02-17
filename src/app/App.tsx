import * as React from 'react';
import { Book1Prop1 } from '../books/book1/Book1Prop1';
import { Book1Prop2 } from '../books/book1/Book1Prop2';

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
      <div>
        <div>
          <button onClick={this.start} disabled={this.state.page === minPage}>Start</button>
          <button onClick={this.back} disabled={this.state.page === minPage}>Back</button>
          <button onClick={this.next} disabled={this.state.page === maxPage}>Next</button>
          <button onClick={this.end} disabled={this.state.page === maxPage}>End</button>
        </div>
        <div>{this.renderBook()}</div>
      </div>
    );
  }

  private renderBook(): JSX.Element {
    switch (this.state.page) {
      case 1:
        return <Book1Prop1 />;
      case 2:
        return <Book1Prop2 />;
      default:
        return <div></div>;
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

import * as React from 'react';

export type AppState = {
};

export class App extends React.PureComponent<{}, AppState> {

  public render(): JSX.Element {
    return (
      <div>Here's looking at Euclid!</div>
    );
  }

}

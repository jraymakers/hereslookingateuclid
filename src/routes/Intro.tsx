import * as React from 'react';
import { Link } from 'react-router-dom';

export class Intro extends React.PureComponent<{}> {

  public render(): JSX.Element {
    return (
      <div>
        <div><Link to="/book/1">Book 1</Link></div>
      </div>
    );
  }

}

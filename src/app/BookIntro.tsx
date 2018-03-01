import * as React from 'react';
import { Link } from 'react-router-dom';

export type BookIntroProps = {
  readonly bookNum: number;
};

export class BookIntro extends React.PureComponent<BookIntroProps> {

  public render(): JSX.Element {
    return (
      <Link to={`/book/${this.props.bookNum}/prop/1`}>Proposition 1</Link>
    );
  }

}

import * as React from 'react';

import { NavBar } from '../app/NavBar';

import { bookIntroLink } from '../routes/Links';

export class MainIntro extends React.PureComponent<{}> {

  public render(): JSX.Element {
    return (
      <div>
        <NavBar prev={null} up={null} next={bookIntroLink('I')}></NavBar>
        <div>Introduction</div>
      </div>
    );
  }

}

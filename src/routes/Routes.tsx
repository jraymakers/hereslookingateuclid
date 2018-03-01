import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import { Intro } from './Intro';
import { BookRoute } from './BookRoute';
import { BookPropRoute } from './BookPropRoute';
import { BookPropStepRoute } from './BookPropStepRoute';

export class Routes extends React.Component<{}> {

  public render(): JSX.Element {
    return (
      <Switch>
        <Route exact path="/book/:bookNumStr/prop/:propNumStr/step/:stepNumStr" component={BookPropStepRoute} />
        <Route exact path="/book/:bookNumStr/prop/:propNumStr" component={BookPropRoute} />
        <Route exact path="/book/:bookNumStr" component={BookRoute} />
        <Route exact path="/" component={Intro} />
        <Redirect to="/" />
      </Switch>
    );
  }

}

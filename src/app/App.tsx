import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BookPropView } from './BookPropView';

import '../books/book1/Book1Prop1';
import '../books/book1/Book1Prop2';

export class App extends React.Component<{}> {

  public render(): JSX.Element {
    return (
      <Switch>
        <Route path="/book/:bookNumStr/prop/:propNumStr/step/:stepNumStr" component={BookPropView} />
        <Redirect to="/book/1/prop/1/step/0" />
      </Switch>
    );
  }

}

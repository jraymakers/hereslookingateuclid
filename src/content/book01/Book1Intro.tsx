import * as React from 'react';
import { style } from 'typestyle';

const classPrefix = 'BookIIntro';

const rootClass = style({
  $debugName: `${classPrefix}_root`,
  $unique: true,
  display: 'flex',
  flexDirection: 'column',
  padding: 12,
});

export class Book1Intro extends React.PureComponent<{}> {

  public render(): JSX.Element {
    return (
      <div className={rootClass}>
        This is the introduction to Book I.
      </div>
    );
  }

}

export default () => <Book1Intro />;

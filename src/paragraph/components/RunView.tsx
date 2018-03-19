import * as React from 'react';
import { Link } from 'react-router-dom';

import { linkClass } from '../../style';

import { Run } from '../types/Paragraph';

export type RunViewProps = {
  readonly run: Run;
};

export class RunView extends React.PureComponent<RunViewProps> {

  public render(): JSX.Element | null {
    const run = this.props.run;
    if (typeof run === 'string') {
      return <span>{run}</span>;
    } else {
      switch (run.type) {
        case 'styled':
          return <span className={run.className}>{run.text}</span>;
        case 'link':
          return <Link className={linkClass} to={run.linkInfo.url}>{run.linkInfo.text}</Link>;
        default:
          assertNever(run);
          return null;
      }
    }
  }

}

function assertNever(value: never) {
  console.warn(`assertNever called: ${value}`);
}

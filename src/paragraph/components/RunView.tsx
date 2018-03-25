import * as React from 'react';
import { Link } from 'react-router-dom';

import { assertNever } from '../../common';
import { linkClass } from '../../style';

import { Run } from '../types/Paragraph';

function stopProp(event: React.MouseEvent<HTMLElement>) {
  event.stopPropagation();
}

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
          return (
            <span onClick={stopProp}>
              <Link className={linkClass} to={run.linkInfo.url}>{run.linkInfo.text}</Link>
            </span>
          );
        default:
          assertNever(run);
          return null;
      }
    }
  }

}

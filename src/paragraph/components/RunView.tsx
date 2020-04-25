import * as React from 'react';
import { Link } from 'react-router-dom';

import { linkClass } from '../../style';
import { assertNever } from '../../typescript';
import { Run } from '../types/Paragraph';

function stopProp(event: React.MouseEvent<HTMLElement>) {
  event.stopPropagation();
}

type RunViewProps = Readonly<{
  run: Run;
}>;

export const RunView: React.FC<RunViewProps> = (props) => {
  const run = props.run;
  if (typeof run === 'string') {
    return <span>{run}</span>;
  } else {
    switch (run.type) {
      case 'anchor':
        return (
          <span onClick={stopProp}>
            <a className={linkClass} href={run.linkInfo.url}>{run.linkInfo.text}</a>
          </span>
        );
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
RunView.displayName = 'RunView';

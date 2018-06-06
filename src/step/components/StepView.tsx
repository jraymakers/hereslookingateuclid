import * as React from 'react';
import { Link } from 'react-router-dom';

import {
  LinkInfo,
} from '../../link';
import {
  link,
  Paragraph,
  ParagraphView,
  RunView,
} from '../../paragraph';
import {
  classes,
  flexGrowStyle,
  flexNoneStyle,
  flexRowStyle,
  namedClass,
} from '../../style';

import {
  Step,
} from '../types/Step';

const classPrefix = 'StepView';

const rootClass = namedClass(classPrefix, 'root', flexRowStyle, {
  cursor: 'pointer',
  borderLeft: '3px solid transparent',
  $nest: {
    '&:hover': {
      $unique: true,
      borderLeft: '3px solid #666',
    },
  },
});

const fadedClass = namedClass(classPrefix, 'faded', {
  opacity: 0.5,
});

const highlightedClass = namedClass(classPrefix, 'highlighted', {
  borderLeft: '3px solid orange',
  $nest: {
    '&:hover': {
      $unique: true,
      borderLeft: '3px solid orange',
    },
  },
});

const numAndTextClass = namedClass(classPrefix, 'numAndText', flexRowStyle, {
  paddingTop: 6,
  paddingBottom: 6,
  textDecoration: 'none',
  color: 'black',
  userSelect: 'none',
  flex: '1',
});

const numberClass = namedClass(classPrefix, 'number', flexNoneStyle, {
  width: 36,
  textAlign: 'right',
});

const textClass = namedClass(classPrefix, 'text', flexGrowStyle, {
  paddingLeft: 12,
  paddingRight: 12,
});

const linkClass = namedClass(classPrefix, 'link', flexNoneStyle, {
  paddingTop: 6,
  paddingBottom: 6,
  width: 90,
  textAlign: 'right',
});

export type StepViewProps = {
  readonly stepIndex: number;
  readonly stepName: string;
  readonly text: Paragraph;
  readonly link?: LinkInfo | null | undefined;
  readonly faded?: boolean;
  readonly highlighted?: boolean;
  readonly makeStepUrl: (stepName: string) => string;
};

export class StepView extends React.PureComponent<StepViewProps> {

  public render(): JSX.Element {
    const stepName = this.props.stepName;
    const rootClasses = classes(
      rootClass,
      this.props.faded && fadedClass,
      this.props.highlighted && highlightedClass,
    );
    return (
      <div className={rootClasses} >
        <Link className={numAndTextClass} to={this.props.makeStepUrl(stepName)}>
          <div className={numberClass}>{stepName}.</div>
          <div className={textClass}><ParagraphView paragraph={this.props.text} /></div>
        </Link>
        <div className={linkClass}>{this.props.link ? <RunView run={link(this.props.link)} /> : null}</div>
      </div>
    );
  }

}

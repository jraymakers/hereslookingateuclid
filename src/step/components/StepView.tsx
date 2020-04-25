import * as React from 'react';
import { Link } from 'react-router-dom';

import { LinkInfo } from '../../link';
import { link, Paragraph, ParagraphView, RunView } from '../../paragraph';
import { classes, cssClass, flexGrowStyle, flexNoneStyle, flexRowStyle } from '../../style';

const classPrefix = 'StepView';

const rootClass = cssClass(classPrefix, 'root', flexRowStyle, {
  cursor: 'pointer',
  borderLeft: '3px solid transparent',
  $nest: {
    '&:hover': {
      $unique: true,
      borderLeft: '3px solid #666',
    },
  },
});

const fadedClass = cssClass(classPrefix, 'faded', {
  opacity: 0.5,
});

const highlightedClass = cssClass(classPrefix, 'highlighted', {
  borderLeft: '3px solid orange',
  $nest: {
    '&:hover': {
      $unique: true,
      borderLeft: '3px solid orange',
    },
  },
});

const numAndTextClass = cssClass(classPrefix, 'numAndText', flexRowStyle, {
  paddingTop: 6,
  paddingBottom: 6,
  textDecoration: 'none',
  color: 'black',
  userSelect: 'none',
  flex: '1',
});

const numberClass = cssClass(classPrefix, 'number', flexNoneStyle, {
  width: 36,
  textAlign: 'right',
});

const textClass = cssClass(classPrefix, 'text', flexGrowStyle, {
  paddingLeft: 12,
  paddingRight: 12,
});

const linkClass = cssClass(classPrefix, 'link', flexNoneStyle, {
  paddingTop: 6,
  paddingBottom: 6,
  width: 90,
  textAlign: 'right',
});

type StepViewProps = Readonly<{
  stepIndex: number;
  stepName: string;
  text: Paragraph;
  link?: LinkInfo | null | undefined;
  links?: ReadonlyArray<LinkInfo> | null | undefined;
  faded?: boolean;
  highlighted?: boolean;
  makeStepUrl: (stepName: string) => string;
}>;

export const StepView: React.FC<StepViewProps> = (props) => {
  const stepName = props.stepName;
  const rootClasses = classes(
    rootClass,
    props.faded && fadedClass,
    props.highlighted && highlightedClass,
  );
  return (
    <div className={rootClasses} >
      <Link className={numAndTextClass} to={props.makeStepUrl(stepName)}>
        <div className={numberClass}>{stepName}.</div>
        <div className={textClass}><ParagraphView paragraph={props.text} /></div>
      </Link>
      <div className={linkClass}>
        {props.link ? <RunView run={link(props.link)} /> : null}
        {props.links ? renderLinks(props.links) : null}
      </div>
    </div>
  );
}
StepView.displayName = 'StepView';

function renderLinks(links: ReadonlyArray<LinkInfo>): JSX.Element[] {
  return links.map((linkInfo, index) => <div key={index}><RunView run={link(linkInfo)} /></div>);
}

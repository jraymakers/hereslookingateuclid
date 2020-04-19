import * as React from 'react';
import { useHistory, useLocation } from 'react-router';

import { StepsAndDiagramView } from '../../stepsAndDiagram';
import { StepsAndDiagramPage } from '../types';
import { stepsAndDiagramPageUrl } from '../utils';
import { PageView } from './PageView';

function makePrevUrl(page: StepsAndDiagramPage, currentStepIndex: number) {
  if (currentStepIndex === 0) {
    return null;
  } else {
    const steps = page.stepsAndDiagram.steps;
    return stepsAndDiagramPageUrl(page, steps[currentStepIndex - 1].name);
  }
}

function makeNextUrl(page: StepsAndDiagramPage, currentStepIndex: number) {
  const steps = page.stepsAndDiagram.steps;
  if (currentStepIndex === steps.length - 1) {
    return null;
  } else {
    return stepsAndDiagramPageUrl(page, steps[currentStepIndex + 1].name);
  }
}

function urlForKey(key: string, page: StepsAndDiagramPage, currentStepIndex: number) {
  switch (key) {
    case 'ArrowUp':
      return makePrevUrl(page, currentStepIndex);
    case 'ArrowDown':
      return makeNextUrl(page, currentStepIndex);
  }
  return null;
}

type StepsAndDiagramPageViewProps = Readonly<{
  page: StepsAndDiagramPage;
  currentStepIndex: number;
}>;

export const StepsAndDiagramPageView: React.FC<StepsAndDiagramPageViewProps> = (props) => {
  const page = props.page;
  const stepsAndDiagram = page.stepsAndDiagram;
  const currentStepIndex = props.currentStepIndex;
  const history = useHistory();
  const location = useLocation();
  const navigate = React.useCallback((path: string) => {
    if (location.pathname !== path) {
      history.push(path);
    }
  }, [location, history]);
  const makeStepUrl = React.useCallback((stepName: string) => {
    return stepsAndDiagramPageUrl(page, stepName);
  }, [page]);
  const onKeyDown = React.useCallback((event: KeyboardEvent) => {
    const url = urlForKey(event.key, page, currentStepIndex);
    if (url) {
      navigate(url);
    }
  }, [page, currentStepIndex, navigate]);
  return (
    <PageView page={page} navigate={navigate} onKeyDown={onKeyDown}>
      <StepsAndDiagramView
        title={stepsAndDiagram.title}
        summary={stepsAndDiagram.summary}
        steps={stepsAndDiagram.steps}
        diagram={stepsAndDiagram.diagram}
        currentStepIndex={currentStepIndex}
        makeStepUrl={makeStepUrl}
        prevUrl={makePrevUrl(page, currentStepIndex)}
        nextUrl={makeNextUrl(page, currentStepIndex)}
      />
    </PageView>
  );
}

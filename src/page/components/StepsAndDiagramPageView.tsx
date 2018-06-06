// import * as React from 'react';
// import { RouteComponentProps, withRouter } from 'react-router';

// import { bookTitle } from '../../link';
// import { StepsAndDiagramPage } from '../../page';
// import { StepsAndDiagramView } from '../../stepsAndDiagram';

// import { PageView } from './PageView';

// type StepsAndDiagramPageViewProps = RouteComponentProps<{}> & {
//   readonly page: StepsAndDiagramPage;
//   readonly currentStepIndex: number;
//   readonly makePageUrl: (bookName: string, pageName: string, stepName: string) => string;
// };

// class StepsAndDiagramPageViewInternal extends React.PureComponent<StepsAndDiagramPageViewProps> {

//   public render(): JSX.Element {
//     const page = this.props.page;
//     const stepsAndDiagram = page.stepsAndDiagram;
//     const currentStepIndex = this.props.currentStepIndex;
//     return (
//       <PageView page={page} onKeyDown={this.onKeyDown}>
//         <StepsAndDiagramView
//           title={stepsAndDiagram.title}
//           summary={stepsAndDiagram.summary}
//           steps={stepsAndDiagram.steps}
//           diagram={stepsAndDiagram.diagram}
//           currentStepIndex={currentStepIndex}
//           goPrevStep={this.goPrevStep}
//           goNextStep={this.goNextStep}
//           goToStep={this.goToStep}
//         />
//       </PageView>
//     );
//   }

//   private readonly onKeyDown = (event: KeyboardEvent) => {
//     switch (event.key) {
//       case 'ArrowLeft':
//         this.goPrevPage();
//         break;
//       case 'ArrowRight':
//         this.goNextPage();
//         break;
//       case 'ArrowUp':
//         this.goPrevStep();
//         break;
//       case 'ArrowDown':
//         this.goNextStep();
//         break;
//     }
//   }

//   private readonly goPrevPage = () => {
//     const page = this.props.page;
//     if (page.prev) {
//       this.navigate(page.prev.url);
//     }
//   }

//   private readonly goNextPage = () => {
//     const page = this.props.page;
//     if (page.next) {
//       this.navigate(page.next.url);
//     }
//   }

//   private readonly goPrevStep = () => {
//     const currentStepIndex = this.props.currentStepIndex;
//     if (currentStepIndex === 0) {
//       const page = this.props.page;
//       if (page.prev) {
//         this.navigate(page.prev.url);
//       }
//     } else {
//       this.goToStep(currentStepIndex - 1);
//     }
//   }

//   private readonly goNextStep = () => {
//     const page = this.props.page;
//     const currentStepIndex = this.props.currentStepIndex;
//     if (currentStepIndex === page.stepsAndDiagram.steps.length - 1) {
//       if (page.next) {
//         this.navigate(page.next.url);
//       }
//     } else {
//       this.goToStep(currentStepIndex + 1);
//     }
//   }

//   private readonly goToStep = (newStepIndex: number) => {
//     const page = this.props.page;
//     const steps = page.stepsAndDiagram.steps;
//     if (0 <= newStepIndex && newStepIndex < steps.length) {
//       const newStep = steps[newStepIndex];
//       this.navigate(this.props.makePageUrl(page.bookName, page.stepsAndDiagram.name, newStep.name));
//     } else {
//       this.navigate(this.props.makePageUrl(page.bookName, page.stepsAndDiagram.name, steps[0].name));
//     }
//   }

//   private navigate(pathname: string) {
//     if (this.props.location.pathname !== pathname) {
//       this.props.history.push(pathname);
//     }
//   }

// }

// export const StepsAndDiagramPageView = withRouter(StepsAndDiagramPageViewInternal);

import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

// import { bookTitle } from '../../link';
// import { StepsAndDiagramPageItem } from '../../page';

import { stepsAndDiagramPageUrl } from '../../link';
import { StepsAndDiagram, StepsAndDiagramView } from '../../stepsAndDiagram';

import { StepsAndDiagramPage } from '../types';

import { PageView } from './PageView';

// import { PageView } from './PageView';

type StepsAndDiagramPageViewProps = RouteComponentProps<{}> & {
  readonly page: StepsAndDiagramPage;
  readonly currentStepIndex: number;
  // readonly makePageUrl: (bookName: string, pageName: string, stepName: string) => string;
};

class StepsAndDiagramPageViewInternal extends React.PureComponent<StepsAndDiagramPageViewProps> {

  public render(): JSX.Element {
    const page = this.props.page;
    const stepsAndDiagram = page.stepsAndDiagram;
    // const stepsAndDiagram = pageItem.stepsAndDiagram;
    const currentStepIndex = this.props.currentStepIndex;
    return (
      <PageView page={page} navigate={this.navigate} onKeyDown={this.onKeyDown}>
        <StepsAndDiagramView
          title={stepsAndDiagram.title}
          summary={stepsAndDiagram.summary}
          steps={stepsAndDiagram.steps}
          diagram={stepsAndDiagram.diagram}
          currentStepIndex={currentStepIndex}
          // goPrevStep={this.goPrevStep}
          // goNextStep={this.goNextStep}
          makeStepUrl={this.makeStepUrl}
          prevUrl={this.makePrevUrl()}
          nextUrl={this.makeNextUrl()}
        />
      </PageView>
    );
  }

  public readonly makeStepUrl = (stepName: string) => {
    return stepsAndDiagramPageUrl(this.props.page, stepName);
  }

  public readonly makePrevUrl = () => {
    const currentStepIndex = this.props.currentStepIndex;
    if (currentStepIndex === 0) {
      return null;
    } else {
      const steps = this.props.page.stepsAndDiagram.steps;
      return stepsAndDiagramPageUrl(this.props.page, steps[currentStepIndex - 1].name);
    }
  }

  public readonly makeNextUrl = () => {
    const currentStepIndex = this.props.currentStepIndex;
    const steps = this.props.page.stepsAndDiagram.steps;
    if (currentStepIndex === steps.length - 1) {
      return null;
    } else {
      return stepsAndDiagramPageUrl(this.props.page, steps[currentStepIndex + 1].name);
    }
  }

  private readonly onKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp':
        this.goPrevStep();
        break;
      case 'ArrowDown':
        this.goNextStep();
        break;
    }
  }

  private goPrevStep() {
    const url = this.makePrevUrl();
    if (url) {
      this.navigate(url);
    }
  }

  private goNextStep() {
    const url = this.makeNextUrl();
    if (url) {
      this.navigate(url);
    }
  }

  // private readonly onKeyDown = (event: KeyboardEvent) => {
  //   switch (event.key) {
  //     case 'ArrowLeft':
  //       this.goPrevPage();
  //       break;
  //     case 'ArrowRight':
  //       this.goNextPage();
  //       break;
  //     case 'ArrowUp':
  //       this.goPrevStep();
  //       break;
  //     case 'ArrowDown':
  //       this.goNextStep();
  //       break;
  //   }
  // }

  // private readonly goPrevPage = () => {
  //   const page = this.props.page;
  //   if (page.prev) {
  //     this.navigate(page.prev.url);
  //   }
  // }

  // private readonly goNextPage = () => {
  //   const page = this.props.page;
  //   if (page.next) {
  //     this.navigate(page.next.url);
  //   }
  // }

  // private readonly goPrevStep = () => {
    // const currentStepIndex = this.props.currentStepIndex;
    // if (currentStepIndex === 0) {
    //   const page = this.props.page;
    //   if (page.prev) {
    //     this.navigate(page.prev.url);
    //   }
    // } else {
    //   this.goToStep(currentStepIndex - 1);
    // }
  // }

  // private readonly goNextStep = () => {
    // const page = this.props.page;
    // const currentStepIndex = this.props.currentStepIndex;
    // if (currentStepIndex === page.stepsAndDiagram.steps.length - 1) {
    //   if (page.next) {
    //     this.navigate(page.next.url);
    //   }
    // } else {
    //   this.goToStep(currentStepIndex + 1);
    // }
  // }

  // private readonly goToStep = (newStepIndex: number) => {
    // const page = this.props.page;
    // const steps = page.stepsAndDiagram.steps;
    // if (0 <= newStepIndex && newStepIndex < steps.length) {
    //   const newStep = steps[newStepIndex];
    //   this.navigate(this.props.makePageUrl(page.bookName, page.stepsAndDiagram.name, newStep.name));
    // } else {
    //   this.navigate(this.props.makePageUrl(page.bookName, page.stepsAndDiagram.name, steps[0].name));
    // }
  // }

  private readonly navigate = (path: string) => {
    if (this.props.location.pathname !== path) {
      this.props.history.push(path);
    }
  }

}

export const StepsAndDiagramPageView = withRouter(StepsAndDiagramPageViewInternal);

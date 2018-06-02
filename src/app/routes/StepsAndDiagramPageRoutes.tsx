// import * as React from 'react';
// import {
//   Redirect,
//   Route,
//   RouteComponentProps,
//   Switch,
// } from 'react-router';

// import {
//   lastStep,
//   MakePageUrl,
// } from '../../link';

// import {
//   StepsAndDiagramPage,
//   StepsAndDiagramPageView,
// } from '../../page';

// import {
//   findStepIndex,
// } from '../../step';

// type StepsAndDiagramPageRoutesProps = {
//   readonly page: StepsAndDiagramPage;
//   readonly makePageUrl: MakePageUrl;
// };

// type StepRouteProps = RouteComponentProps<{
//   readonly stepName: string;
// }>;

// export class StepsAndDiagramPageRoutes extends React.Component<StepsAndDiagramPageRoutesProps> {

//   public render(): JSX.Element {
//     return (
//       <Switch>
//         <Route exact path={this.pageUrl(':stepName')} render={this.renderStepRoute} />
//         <Redirect to={this.pageUrl(this.props.page.stepsAndDiagram.steps[0].name)} />
//       </Switch>
//     );
//   }

//   private pageUrl(stepName: string): string {
//     const page = this.props.page;
//     const bookName = page.bookName;
//     const pageName = page.stepsAndDiagram.name;
//     return this.props.makePageUrl(bookName, pageName, stepName);
//   }

//   private readonly renderStepRoute = (props: StepRouteProps): JSX.Element => {
//     const stepName = props.match.params.stepName;
//     const steps = this.props.page.stepsAndDiagram.steps;
//     if (stepName === lastStep) {
//       return this.renderRedirect(steps[steps.length - 1].name);
//     }
//     const stepIndex = findStepIndex(steps, stepName);
//     if (0 <= stepIndex && stepIndex < steps.length) {
//       return this.renderStep(stepIndex);
//     } else {
//       return this.renderRedirect(steps[0].name);
//     }
//   }

//   private renderRedirect(stepName: string) {
//     return <Redirect to={this.pageUrl(stepName)} />;
//   }

//   private renderStep(stepIndex: number): JSX.Element {
//     return (
//       <StepsAndDiagramPageView
//         page={this.props.page}
//         currentStepIndex={stepIndex}
//         makePageUrl={this.props.makePageUrl}
//       />
//     );
//   }

// }

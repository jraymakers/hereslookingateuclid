// import * as React from 'react';
// import {
//   Redirect,
//   Route,
//   RouteComponentProps,
//   Switch,
// } from 'react-router';

// import { leafPageUrl } from '../../link';
// import {
//   LeafPage,
//   PageView,
// } from '../../page';

// type LeafPageRoutesProps = {
//   readonly page: LeafPage;
// };

// type StepRouteProps = RouteComponentProps<{
//   readonly stepName: string;
// }>;

// export class LeafPageRoutes extends React.Component<LeafPageRoutesProps> {

//   public render(): JSX.Element {
//     const page = this.props.page;
//     switch (page.pageType) {
//       case 'stepsAndDiagram':
//         return this.renderStepsAndDiagramLeafPage();
//       case 'text':
//         return this.renderTextLeafPage();
//     }
//   }

//   private renderStepsAndDiagramLeafPage(): JSX.Element {
//     const page = this.props.page;
//     return (
//       <Switch>
//         <Route
//           path={`${leafPageUrl(page)}/select=:stepName`}
//           render={this.renderStepRoute}
//         />
//         {this.redirectToFirstStep()}
//       </Switch>
//     );
//   }

//   private renderTextLeafPage(): JSX.Element {
//     const page = this.props.page;
//     return (
//       <PageView page={page} />
//     );
//   }

//   private redirectToFirstStep() {
//     const page = this.props.page;
//     const stepName = '';
//     // const firstChildName = page.childList.length > 0 ? page.childList[0].name : '';
//     //       path={`${leafPageUrl(page)}/step=:stepName`}
//     return <Redirect to={`${leafPageUrl(page)}/select=${stepName}}`} />;
//   }

//   private readonly renderStepRoute = (props: StepRouteProps): JSX.Element | null => {
//     const page = this.props.page;
//     const stepName = props.match.params.stepName;
//     // const child = page.childMap[childName];
//     if (stepName) {
//       return (
//         <PageView page={page} />
//       );
//     } else {
//       return this.redirectToFirstStep();
//     }
//   }

// }

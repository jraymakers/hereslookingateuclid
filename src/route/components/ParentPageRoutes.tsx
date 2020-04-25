import * as React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router';

import { ParentPage, parentPageUrl } from '../../page';
import { PageRoutes } from './PageRoutes';

const childNameRoutePropKey = 'childName';
type ParentPageRoutePropsKeys = typeof childNameRoutePropKey;
type ParentPageRouteProps = { [key in ParentPageRoutePropsKeys]: string };

function redirectToFirstChild(page: ParentPage) {
  const firstChildName = page.childList.length > 0 ? page.childList[0].name : '';
  return <Redirect to={`${parentPageUrl(page)}${firstChildName}`} />;
}

export const ParentPageRoutes: React.FC<{
  page: ParentPage;
}> = ({ page }) => {
  const renderChildRoute = React.useCallback(
    (props: RouteComponentProps<ParentPageRouteProps>) => {
      const childName = props.match.params[childNameRoutePropKey];
      const child = page.childMap[childName];
      if (child) {
        return (
          <PageRoutes page={child} />
        );
      } else {
        return redirectToFirstChild(page);
      }
    },
    [page],
  );
  return (
    <Switch>
      <Route
        path={`${parentPageUrl(page)}:${childNameRoutePropKey}`}
        render={renderChildRoute}
      />
      {redirectToFirstChild(page)}
    </Switch>
  );
}
ParentPageRoutes.displayName = 'ParentPageRoutes';

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ROUTES_LIST } from 'routes/routesList';

const HomePage = React.lazy(() => import('routes/Home'));
const ConstructorPage = React.lazy(() => import('routes/Patterns/Constructor'));
const FactoryPage = React.lazy(() => import('routes/Patterns/Factory'));

function App() {
  return (
    <Router>
      <Suspense fallback={<CircularProgress />}>
        <Switch>
          <Route exact path={ROUTES_LIST.home}>
            <HomePage />
          </Route>
          <Route
            exact
            path={`${ROUTES_LIST.patterns.link}${ROUTES_LIST.patterns.constructor}`}
          >
            <ConstructorPage />
          </Route>
          <Route
            exact
            path={`${ROUTES_LIST.patterns.link}${ROUTES_LIST.patterns.factory}`}
          >
            <FactoryPage />
          </Route>
          <Route path={'/'}>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;

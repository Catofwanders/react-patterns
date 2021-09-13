import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ROUTES_LIST } from 'routes/routesList';

const HomePage = React.lazy(() => import('routes/Home'));

function App() {
  return (
    <Router>
      <Suspense fallback={<CircularProgress />}>
        <Switch>
          <Route exact path={ROUTES_LIST.home}>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;

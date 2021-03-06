import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'screens/Home';
import SignUp from 'screens/SignUp';
import AdminDashboard from 'screens/AdminDashboard';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/login']} component={Home} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/admin/dashboard' component={AdminDashboard} />
      </Switch>
    </Router>
  );
};

export default AppRouter;

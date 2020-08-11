import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'screens/Home';
import AdminDashboard from 'screens/AdminDashboard';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/admin/dashboard' component={AdminDashboard} />
      </Switch>
    </Router>
  );
};

export default AppRouter;

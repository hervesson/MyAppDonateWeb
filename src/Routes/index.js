import React, {Suspense} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isAutenticated } from './Auth'

import { authProtectedRoutes, publicRoutes } from './Routes';

const DashboardAdmin = React.lazy(() => import("../Pages/Dashboard/DashboardAdmin"));
const DashboardEntidade = React.lazy(() => import("../Pages/Dashboard/DashboardEntidade"));

const Login = React.lazy(() => import("../Pages/Auth/Login"));
const Register = React.lazy(() => import("../Pages/Auth/Register"));

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAutenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);


const Routes = (props) => (
	<BrowserRouter>
		<Suspense fallback = {<div></div>}>
			<Switch>
	         <Route exact path="/" component={() => <h1>Hello World</h1>} />
	         <Route exact path="/login" component={() => <Login /> } />
	         <Route exact path="/register" component={() => <Register/> } />
      		<PrivateRoute exact path="/dashboardAdmin" component={() =>  <DashboardAdmin /> } />
      		<PrivateRoute exact path="/dashboardEntidade" component={() => < DashboardEntidade/> } />
			</Switch>
		</Suspense>	
	</BrowserRouter>
);

export default Routes;
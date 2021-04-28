import React, {Suspense} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import  Auth  from "../Services/Auth";
import { auth } from "../Services/FirebaseConfig";

const Dashboard = React.lazy(() => import("../Pages/Dashboard"));

const Login = React.lazy(() => import("../Pages/Auth/Login"));
const Register = React.lazy(() => import("../Pages/Auth/Register"));

var user = true

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      user ?
         (
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
	         <Route exact path="/" component={() => <Redirect to={{ pathname: "/login" }} />} />
	         <Route exact path="/login" component={() => <Login /> } />
	         <Route exact path="/register" component={() => <Register/> } />
      		<PrivateRoute exact path="/Dashboard" component={() =>  <Dashboard /> } />
      		
			</Switch>
		</Suspense>	
	</BrowserRouter>
);

export default Routes;
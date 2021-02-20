import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getInitialDataAction, isUserLoggedIn } from './actions';
import './app.css';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import './scss/style.scss';

const loading = (
	<div className="pt-3 text-center">
		<div className="sk-spinner sk-spinner-pulse" />
	</div>
);

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Category = React.lazy(() => import('./views/category/AddCategory'));
const NewCategory = React.lazy(() => import('./views/category/AddCategory'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

function App() {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(
		() => {
			if (!auth.authenticate) {
				dispatch(isUserLoggedIn());
			}
			if (auth.authenticate) {
				dispatch(getInitialDataAction());
			}
			// eslint-disable-next-line
		},
		[ auth.authenticate ]
	);

	return (
		<Router>
			<React.Suspense fallback={loading}>
				<Switch>
					<Route exact path="/login" name="Login Page" render={(props) => <Signin {...props} />} />
					<Route exact path="/register" name="Register Page" render={(props) => <Register {...props} />} />
					<Route
						exact
						path="/category/allcategories"
						name="Category"
						render={(props) => <Category {...props} />}
					/>
					<Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
					<Route path="/" name="Home" render={(props) => <TheLayout {...props} />} />
					<Route path="/signup" component={Signup} />
				</Switch>
			</React.Suspense>
		</Router>
	);
}

export default App;

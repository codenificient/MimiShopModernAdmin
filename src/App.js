import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getInitialDataAction, isUserLoggedIn } from './actions';
import './app.css';
import PrivateRoute from './components/HOC/PrivateRoute';
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
const ActiveOrders = React.lazy(() => import('./views/orders/ActiveOrders'));
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
					<Route
						exact
						path="/login"
						name="Login Page"
						render={(props) => <Login {...props} />}
					/>
					<Route
						exact
						path="/register"
						name="Register Page"
						render={(props) => <Register {...props} />}
					/>
					<PrivateRoute
						exact
						path="/category/allcategories"
						name="Category"
						render={(props) => <Category {...props} />}
					/>
					<PrivateRoute
						exact
						path="/orders/activeorders"
						name="Orders"
						render={(props) => <ActiveOrders {...props} />}
					/>

					<Route
						exact
						path="/500"
						name="Page 500"
						render={(props) => <Page500 {...props} />}
					/>
					<PrivateRoute
						path="/"
						name="Home"
						component={(props) => <TheLayout {...props} />}
					/>
				</Switch>
			</React.Suspense>
		</Router>
	);
}

export default App;

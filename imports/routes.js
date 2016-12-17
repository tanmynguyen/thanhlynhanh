import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app';
import Home from './page/home';
import Login from './page/login';
import Register from './page/register';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
    <Route path="login" component={Login} />
		<Route path="register" component={Register} />
	</Route>
);

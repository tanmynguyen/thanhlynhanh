import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app';
import Home from './page/home';
import Login from './page/login';
import Profile from './page/profile';
import Checkout from './page/checkout';
import Detail from './page/detail';
import Admin from './page/admin';
import NotFound from './page/not_found';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
    <Route path="login" component={Login} />
		<Route path="profile" component={Profile} />
		<Route path="checkout" component={Checkout}/>
		<Route path="detail/:productId/:userId" component={Detail}/>
		<Route path="admin" component={Admin} />
		<Route path="*" component={NotFound}/>
	</Route>
);

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
/*import './index.css';*/
import * as serviceWorker from './serviceWorker';
import Information from "./components/Info/Information";
import Order from "./components/Order/Order";
import Scenery from "./components/Scenery/Scenery";
import Introduction from "./components/Introduction";
import { Router, Route, hashHistory  } from 'react-router';
/*npm install react-router@3.x --save 这里写的路由只能用3.x版本的，升级到4.x版本会报错*/
ReactDOM.render(
	<Router history={hashHistory }>
		<Route path="/" component={Home}></Route>
		<Route path="/information" component={Information}></Route>
		<Route path="/order" component={Order}></Route>
		<Route path="/scenery" component={Scenery}></Route>
		<Route path="/introduction" component={Introduction}></Route>
	</Router>
, document.getElementById('home'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

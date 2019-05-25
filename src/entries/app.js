import React, { Fragment } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../pages/home/containers/home-layout'
import AboutMe from '../pages/about-me/containers/about-layout'
import Projects from '../pages/projects/containers/projects-layout'
import NotFound from '../pages/not-found/containers/not-found'
import Menu from '../widgets/components/menu'



render(
	<BrowserRouter>
		<Fragment>
			<Menu />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/yo" component={AboutMe} />
				<Route component={NotFound} />
			</Switch>
		</Fragment>
	</BrowserRouter>, document.getElementById("app"));	
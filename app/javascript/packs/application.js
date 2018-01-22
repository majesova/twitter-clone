/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
import React from "react"
import ReactDOM from 'react-dom'
import Index from "../components/Index";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import Follow from '../components/Follow'


console.log('Hello World from Webpacker')
// Support component names relative to this directory:
var componentRequireContext = require.context("components", true)
var ReactRailsUJS = require("react_ujs")
ReactRailsUJS.useContext(componentRequireContext);


class App extends React.Component{
	render(){
		return (
				<div>{this.props.children}</div>
				);
	}

};

let documentReady = () => {
	console.log("jalando");
	let reactNode = document.getElementById("react");
	if(reactNode){
		ReactDOM.render(
			<BrowserRouter>
			    <div>
			      <Route path="/" component={Index} exact={true} />
			      <Route path="/follow" component={Follow} exact={true} />
			    </div>
			  </BrowserRouter>
		, reactNode);
	}	
};

$(documentReady);
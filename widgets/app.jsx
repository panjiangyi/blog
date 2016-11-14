import React, {Component } from 'react';
import {render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import Name from './components/name.jsx'
import Nav from './components/navigation.jsx'
class App extends Component{
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div>
			<Name />
			<Nav />
			</div>
			)
	}
}

render(<App />, document.getElementById('app'));
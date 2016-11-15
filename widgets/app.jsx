import './../css/global.css'
import React, {Component } from 'react';
import {render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import Header from './components/header/Header.jsx'
const css = {
	width:'100%',
	height:'100%',
}
class App extends Component{
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div style={css}>
				<Header />
				<div style={{width:'50px',height:'1900px',backgroundColor:'pink'}} / >
			</div>
			)
	}
}

render(<App />, document.getElementById('app'));
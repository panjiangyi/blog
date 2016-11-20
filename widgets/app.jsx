import './../css/global.css'
import React, {Component } from 'react';
import {render } from 'react-dom';
import { Router, Route, Link,IndexRoute ,hashHistory} from 'react-router';
import Header from './components/header/Header.jsx'
import Nav from './components/header/navigation.jsx'
import Name from './components/header/name.jsx'
import Article from './components/article/Article.jsx'
import Essay from './components/article/Essay.jsx'
import Hospital from './components/Hospital.jsx'
import School from './components/School.jsx'
import Profiles from './components/profiles/Profiles.jsx'
import history from './components/history'
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
				<Profiles/>
				{this.props.children}
			</div>
			)
	}
}

render((
	<Router history={history}>
		<Route path="/" component={App}>
			<Route path="/Article" component={Article}>
				<Route path='Essay/:d' component={Essay}/>
			</Route>
			<Route path="/About" component={School}/>
			<Route path="/Culture" component={Hospital}/>
		</Route>	
	</Router>
), document.getElementById('app'));
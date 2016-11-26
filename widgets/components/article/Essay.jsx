import React, {Component } from 'react';
import history from './../history';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
const css = {
	width:'70%',
	height:'100%',
	position:'fixed',
	left:'30%',
	backgroundColor:'#fff'
}

export default class Essay extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
	}
	backTowards(){
		history.goBack();
	}
	render(){
		return (
			<ReactCSSTransitionGroup transitionName="essay"
      					transitionEnterTimeout={300}
      					transitionLeaveTimeout={300}
      					transitionAppear={true}
      					transitionAppearTimeout={300}
      					>
			<div id='ess' onClick={this.backTowards} style={css}>
				{this.props.params.d}
			</div>
			</ReactCSSTransitionGroup>
			)
	}
}

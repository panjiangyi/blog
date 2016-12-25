import React, {Component } from 'react';
import history from './../history';
import marked from 'marked';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
const css = {
	boxSizing:'border-box',
	width:'70%',
	height:'100%',
	position:'fixed',
	left:'30%',
	padding:'5% 0%',
	backgroundColor:'#ddd'
}
let mk;
export default class Essay extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		
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
			<div 
				id='ess' 
				dangerouslySetInnerHTML={{__html:marked('mark *down*')}} 
			 	onClick={this.backTowards} style={css}>
			</div>
			</ReactCSSTransitionGroup>
			)
	}
}

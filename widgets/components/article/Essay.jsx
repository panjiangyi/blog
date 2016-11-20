import React, {Component } from 'react';
const css = {
	width:'50%',
	height:'100%',
	position:'absolute',
	left:'50%',
	backgroundColor:'red'
}
export default class Essay extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
	}
	render(){
		console.log(this.props.params.d)
		return (
			<div id='ess' style={css}>{this.props.params.d}</div>
			)
	}
}

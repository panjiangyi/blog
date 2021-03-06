import React, {Component } from 'react';
import history from './../history';
import marked from 'marked';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
const css = {
	boxSizing:'border-box',
	width:'70%',
	height:'100%',
	// overflow:'auto',
	marginLeft:'30%',
	paddingLeft:'50px',
	wordBreak:'break-all',
	lineHeight:'3em',
	backgroundColor:'#ddd'
}
let translatedEssay;
export default class Essay extends Component {
	constructor(props) {
		super(props);
		this.state={
			content:''
		}
	}
	componentWillMount() {
		// console.log(`http://${location.hostname}/contents/${this.props.params.id}.md`)
		fetch(`/contents/${this.props.params.id}.md`)
		.then(response => response.text())
		  .then(data => {
		  	this.setState({content:marked(data)});
		  })
		  .catch(e => translatedEssay=(console.error(e),"#Oops, error"))
	}
	componentDidMount() {
	}
	componentWillUnmount() {
	}
	backTowards(){
		history.goBack();
	}
	render(){
		return (
			<div 
				key='0'
				id='ess' 
				ref = 'ess'
				dangerouslySetInnerHTML={{__html:this.state.content}} 
			 	onDoubleClick={this.backTowards.bind(this)} style={css}>
			</div>
			)
	}
}

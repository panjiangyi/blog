import React, { Component } from 'react';
import Titles from './Titles.jsx';
const css = {
	width:'70%',
	height:'100%',
	overflowY:'auto',
	overflowX:'hidden',
	backgroundColor:'gold',
	position:'relative',
	fontSize:'0px',
	lineHeight:'0px'
}
export default class Article extends Component {
	constructor(props) {
		super(props);
		this.state={
			titles:['a','b','c']
		}
	}
	componentDidMount() {
		// this.refs.article.addEventListener('scroll',(e)=>{
		// },false)
		// setTimeout(()=>{
				this.setState({
				titles:['aa','bb','cc','d','e','f','g','h']
			})
			// },3000)
	}
	toEssay(){
		this.refs.esCon.style.transform='translateX(-50%)'
	}
  render() {
    return (
      <div id="article" ref='article' style={css}>
      	<div id='esCon' ref='esCon'>
      	{<Titles toEssay={this.toEssay.bind(this)} titles={this.state.titles}/>}
      	{this.props.children}
      	</div>
      </div>
    );
  }
}
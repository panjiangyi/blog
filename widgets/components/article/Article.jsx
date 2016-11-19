import React, { Component } from 'react';
import Titles from './Titles.jsx';
const css = {
	width:'70%',
	height:'100%',
	overflowY:'auto',
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
		setTimeout(()=>{
				this.setState({
				titles:['aa','bb','cc','d','e','f','g','h']
			})
			},3000)
	}
  render() {
    return (
      <div id="article" ref='article' style={css}>
      	{<Titles titles={this.state.titles}/>}
      </div>
    );
  }
}
import React, { Component } from 'react';
import Titles from './Titles.jsx';
const css = {
	width:'70%',
	position:'absolute',
	left:'30%'
}
export default class Article extends Component {
	constructor(props) {
		super(props);
		this.state={
			titles:[{
				title:'修辞',
				path:1,
				preView:'中学的时候。 我问同桌。 怎么样才能让语言看上去更有美感……'
			},{
				title:'当时我就被赶出了考场',
				path:2,
				preView:'交白卷是一种怎样的体验？'
			},{
				title:'还没写',
				path:3,
				preView:'还没写'
			},{
				title:'还没写',
				path:4,
				preView:'还没写'
			},{
				title:'还没写',
				path:5,
				preView:'还没写'
			}]
		}
	}
	componentDidMount() {
	}
  render() {
    return (
      <div id="article" ref='article' style={css}>
      	<Titles titles={this.state.titles}/>
      	<div className='clear'></div>
      </div>
    );
  }
}

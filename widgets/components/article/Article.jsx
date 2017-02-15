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
			titles:[]
		}
	}
	componentDidMount() {
		fetch(`http://${location.hostname}/contents/title.json`)
		.then(response => response.json())
		  .then(data => {
		  	this.setState({titles:data});
		  })
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

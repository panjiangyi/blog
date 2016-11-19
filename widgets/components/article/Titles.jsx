import React, { Component } from 'react';
const conCss = {
	width:'100%',
	height:'100%',
	position:'absolute',
	display:'inline-block',
}
const titleCss = {
	
	outline:'1px solid red'
}
let essayTt = [];
export default class Titles extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
	}
	componentWillReceiveProps(nextProps) {
		essayTt = [];
	}
	getTitle(d,i){
		essayTt.push(
			<div className='title' key={i} style={titleCss}>
				{d}
			</div>
			)
	}
  render() {
	this.props.titles.forEach(this.getTitle)
    return (
      <div style={conCss} id="titles">{essayTt}</div>
    );
  }
}


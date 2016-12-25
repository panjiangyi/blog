import React, { Component } from 'react';
import history from './../history'
import {Link } from 'react-router';
const conCss = {
	width:'100%',
	float:'right',
}
const titleCss = {
	// borderBottom:'1px solid grey',
	padding:'2% 4%'
}
const linkCss = {
	fontSize:'30px',
}
const pCss = {
	padding:'2%',
	fontSize:'15px',
}
let essayTt = [],toEssay;
export default class Titles extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		toEssay = this.props.toEssay;
	}
	componentWillReceiveProps(nextProps) {
		essayTt = [];
	}

	getTitle(data,i){
		let d = data.path,
			preView = data.preView,
			className='title'
		essayTt.push(
			<div className={className} key={i} style={titleCss}>
				<Link style={linkCss} to={'/Article/Essay/'+d}>{data.title}</Link>
				<p style={pCss}>{preView}</p>
			</div>
			)
	}

	componentWillUnmount() {
		essayTt = [];
	}
  render() {
	this.props.titles.forEach(this.getTitle)
    return (
      <div style={conCss} >
      {essayTt}
      </div>
    );
  }
}


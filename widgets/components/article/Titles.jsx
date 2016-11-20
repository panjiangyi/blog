import React, { Component } from 'react';
import history from './../history'
import {Link } from 'react-router';
const conCss = {
	width:'50%',
	height:'100%',
	position:'absolute',
	display:'inline-block',
}
const titleCss = {
	
	outline:'1px solid red'
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
	onClick(e){
		console.log('click',e.target)
		toEssay();
	}
	getTitle(d,i){
		essayTt.push(
			<div className='title' key={i} style={titleCss}>
				<Link to={'/Article/Essay/'+d}>{d}</Link>
			</div>
			)
	}

	componentWillUnmount() {
		essayTt = [];
	}
  render() {
	this.props.titles.forEach(this.getTitle)
    return (
      <div onClick={this.onClick} style={conCss} >
      {essayTt}
      {this.props.children}
      </div>
    );
  }
}


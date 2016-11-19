import React, { Component } from 'react';
const css = {
	width:'30%',
	height:'100%',
	// display:'inline-block',
	float:'left',
	backgroundColor:'yellow',
	fontSize:'0px',
	lineHeight:'0px'
}
export default class Profiles extends Component {
	constructor(props) {
		super(props);
	}
  render() {
    return (
      <div style={css}></div>
    );
}
}

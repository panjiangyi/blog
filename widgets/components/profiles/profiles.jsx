import React, { Component } from 'react';
const css = {
	width:'30%',
	height:'100%',
	// float:'left',
	position:'absolute',
	top:'0px',
	left:'0px',
	bottom:'0px',
	right:'70%',
	zIndex:'-1',
}
export default class Profiles extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
	}
  render() {
    return (
      <div style={css}>
      	<canvas id="loiter" style={{width:'100%',height:'100%'}} />
      </div>
    );
}
}

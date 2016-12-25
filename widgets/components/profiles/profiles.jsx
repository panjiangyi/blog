import React, { Component } from 'react';
const css = {
	width:'30%',
	height:'94%',
	// backgroundColor:'grey',
	fontSize:'0px',//清除canvas标签导致的一行缝隙
	float:'left',
}
export default class Profiles extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
	}
  render() {
    return (
      <div ref='test' id='profiles' style={css}>
      	<canvas id="loiter" style={{width:'100%',height:'100%'}} />
      </div>
    );
}
}

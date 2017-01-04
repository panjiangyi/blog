import React, { Component } from 'react';
import loiter from '../../../vendor/loiter.min.js';
const css = {
	width:'30%',
	height:'94%',
	position:'fixed',
	fontSize:'0px',//清除canvas标签导致的一行缝隙
}
export default class Profiles extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		let widHei = document.defaultView.getComputedStyle(this.refs.loiter);
    	loiter.loiter.start({
        width:+widHei.width.split('px')[0],
        height:+widHei.height.split('px')[0],
        num:11,
        container:this.refs.loiter,
        FPS:150,
        mode:'through',
        circleColor:'rgba(0,0,0,0.2)'
    });
	}
  render() {
    return (
      <div id='profiles' style={css}>
      	<canvas ref="loiter" style={{width:'100%',height:'100%'}} />
      </div>
    );
}
}

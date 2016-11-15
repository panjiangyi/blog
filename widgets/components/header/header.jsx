import React, {Component } from 'react';
import Name from './name.jsx'
import Nav from './navigation.jsx'
const css = {
	width:'100%',
	padding:'1.4% 0% 0.6% 0%',
	backgroundColor:'rgba(17,17,17,0.6)',
	position:'fixed',
	transform:'translateY(0px)'
}
let scrollAction = {},scrollDirection;
 function scrollFunc() {
    if (typeof scrollAction.x == 'undefined') {
      scrollAction.x = window.pageXOffset;
      scrollAction.y = window.pageYOffset;
    }
    var diffX = scrollAction.x - window.pageXOffset;
    var diffY = scrollAction.y - window.pageYOffset;
    if (diffX < 0) {
    // Scroll right
      scrollDirection = 'right';
    } else if (diffX > 0) {
    // Scroll left
      scrollDirection = 'left';
    } else if (diffY < 0) {
    // Scroll down
      scrollDirection = 'down';
    } else if (diffY > 0) {
    // Scroll up
      scrollDirection = 'up';
    } else {
    // First scroll event
    }
    scrollAction.x = window.pageXOffset;
    scrollAction.y = window.pageYOffset;
}

export default class Header extends Component{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.header = this.refs.header;
		window.addEventListener('scroll',this.scroll.bind(this),false)
	}
	scroll(){
		scrollFunc()
		switch(scrollDirection){
			case 'up':
				this.header.style.backgroundColor = 'rgba(17,17,17,0.6)';
				this.header.style.transform = 'translateY(0px)';
			  break;
			case 'down':
				this.header.style.backgroundColor = 'rgba(17,17,17,0)';
				this.header.style.transform = 'translateY(-100px)';
			  break;
			default:
			}
		if(scrollAction.y===0){
			this.header.style.backgroundColor = 'rgba(17,17,17,0)';
		}
	}
	render(){
		return(
				<header ref='header' id="nav" style={css}>
					<Name />
					<Nav />
				</header>
			)}
}
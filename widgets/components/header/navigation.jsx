import React, {Component } from 'react';
import {Link } from 'react-router';
const ulCss = {
			listStyleType:'none',
			display:'inline',
		},
		liCss={
			float:'right',
			display:'inline-block',
			color:'rgb(200,200,200)',
			marginRight:'2em',
			padding:'0.26em 0em'
		},
		aCss = {
			fontSize:'1.5em',
		}
class Navi extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {

	}
	render(){
		let navTxt = ['Article','About','Culture'];
		navTxt.reverse();
		let list = [];
		navTxt.forEach((d,i)=>{
			list.push(
					<li style={liCss} key={i}>
						<Link to={'/'+d} style={aCss}>{d}</Link>
					</li>
				)
		})
		return (
			<ul style={ulCss}>
				{list}
			</ul>
			)
	}
}
export default Navi;
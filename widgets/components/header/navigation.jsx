import React, {Component } from 'react';
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
		let navTxt = ['Projects','About','Culture'];
		navTxt.reverse();
		let list = [];
		navTxt.forEach((d,i)=>{
			list.push(
					<li style={liCss} key={i}>
						<a  target='_blank' style={aCss} href='#'>{d}</a>
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
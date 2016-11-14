import React, {Component } from 'react';
const css = {
			listStyleType:'none',
		}
class Navi extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {

	}
	render(){
		let navTxt = ['Projects','About','Culture'];
		let list = [];
		navTxt.forEach((d,i)=>{
			list.push(<li style={{float:'right'}} key={i}>{d}</li>)
		})
		return (
			<ul style={css}>
				{list}
			</ul>
			)
	}
}
export default Navi;
import React, { Component } from 'react';
import Titles from './Titles.jsx';
import Profiles from './../profiles/Profiles.jsx'
const css = {
	width:'100%',
	// backgroundColor:'gold',
	position:'relative'
}
export default class Article extends Component {
	constructor(props) {
		super(props);
		this.state={
			titles:[{
				title:'',
				preView:''
			},{
				title:'深入浅出Fetch API',
				preView:'深入浅出Fetch API'
			},{
				title:'MutationObserver-DOM树变化监控器',
				preView:'MutationObserver-DOM树变化监控器'
			},{
				title:'MutationObserver-DOM树变化监控器',
				preView:'MutationObserver-DOM树变化监控器'
			},{
				title:'MutationObserver-DOM树变化监控器',
				preView:'MutationObserver-DOM树变化监控器'
			},{
				title:'MutationObserver-DOM树变化监控器',
				preView:'MutationObserver-DOM树变化监控器'
			}]
		}
	}
	componentDidMount() {
		

	}
  render() {
    return (
      <div id="article" ref='article' style={css}>
      	<Profiles />
      	<Titles titles={this.state.titles}/>
      		{this.props.children}
      	<div className='clear'></div>
      </div>
    );
  }
}
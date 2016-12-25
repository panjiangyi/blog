import React, { Component } from 'react';
import Titles from './Titles.jsx';
const css = {
	width:'70%',
	float:'left',
}
export default class Article extends Component {
	constructor(props) {
		super(props);
		this.state={
			titles:[{
				title:'欢迎使用 MarkdownPad 2',
				path:1,
				preView:'Welcome to MarkdownPad 2'
			},{
				title:'MutationObserver-DOM树变化监控器',
				path:2,
				preView:'MutationObserver-DOM树变化监控器'
			},{
				title:'MutationObserver-DOM树变化监控器',
				path:3,
				preView:'MutationObserver-DOM树变化监控器'
			},{
				title:'MutationObserver-DOM树变化监控器',
				path:4,
				preView:'MutationObserver-DOM树变化监控器'
			},{
				title:'MutationObserver-DOM树变化监控器',
				path:5,
				preView:'MutationObserver-DOM树变化监控器'
			}]
		}
	}
	componentDidMount() {
	}
  render() {
    return (
      <div id="article" ref='article' style={css}>
      	<Titles titles={this.state.titles}/>
      		{this.props.children}
      	<div className='clear'></div>
      </div>
    );
  }
}
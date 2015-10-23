
'use strict'

// tabBar.js
import React from 'react';
import ReactDOM from 'react-dom';

class TabBlock extends React.Component {
	render() {
		return(
			<li className={this.props.liClass}>
				<a href={this.props.myHref} data-ajax="false" data-transition="fade" data-theme="a" data-icon={this.props.myIcon} 
				className="ui-btn ui-btn-inline ui-btn-icon-top ui-btn-up-a" data-corners="false" data-shadow="false" data-iconshadow="true" data-iconsize="18" data-wrapperels="span" data-iconpos="top" data-inline="true">
				<span className="ui-btn-inner">
				<span className="ui-btn-text">{this.props.btnText}</span>
				<span className= {"ui-icon " + this.props.uiIcon + " ui-icon-shadow ui-iconsize-18"}>&nbsp;</span>
				</span>
				</a>
			</li>
		);
	}
}

export default class TabBar extends React.Component {
	render() {
		return(
			<div data-role="tabbar" data-iconpos="top" data-theme="a" data-cid="tabbar3" className="codiqa-control ui-footer ui-footer-fixed ui-bar-a ui-navbar ui-mini" role="navigation">
                <ul className="ui-grid-b">
                	<TabBlock myHref="#pre"       myIcon="arrow-l" liClass="ui-block-a" btnText="上一关"     uiIcon="ui-icon-arrow-l"/>
                	<TabBlock myHref="index.html" myIcon="home"    liClass="ui-block-b" btnText="首页"       uiIcon="ui-icon-home"/>
                	<TabBlock myHref="about.html" myIcon="grid"    liClass="ui-block-c" btnText="爱立信招聘" uiIcon="ui-icon-grid"/>
                </ul>
            </div>
		);
	}
}

ReactDOM.render(
  <TabBar/>,
  document.getElementById('gameTabBar')
);
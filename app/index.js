
'use strict'

// index.js
// var React = require('react');
// var ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, Redirect } from 'react-router';
import history from 'history';

import GameApp from './component/GameApp';
import GameSuccess from './component/GameSuccess';
import GameFinish from './component/GameFinish';
import About from './component/About';
import Ericsson from './component/Ericsson';
import E3Info from './component/E3Info';

class App extends React.Component {
	render() {
		return(
			<div>
        		{this.props.children}
        	</div>
		)
	}
}

class EricssonGameDescription extends React.Component {
	render() {
		return (
			<div>
				<span id="home_span1">游戏说明</span>
				<span id="home_span2">每一次点击爱立信图标，其相邻的图标都会变换颜色</span>
				<span id="home_span2">用最短的时间和步骤点亮所有的爱立信图标</span>
			</div>
		);
	}
}

class EricssonRecruit extends React.Component {
	render() {
		return (
			<div id="home_div">
				<Link to="/about">爱立信校园招聘</Link>
			</div>
		);
	}
}

class EricssonGameEntry extends React.Component {
	constructor() {
		super();
    	this.state = {
    		theme: "点亮爱立信",
    		logoImg: "css/images/ericssonlogo-13.png"
    	};    	
  	}

	render() {
		let divStyle = {
			minHeight: "653px",
		}
		let homeDivStyle = {
  				margin: "0 auto",
				border:"1px solid #fff",
				width: "200px",
				height: "200px",
				WebkitBorderRadius: "100px",
				MozBorderRadius: "100px",
				borderRadius: "100px"
			};

		let imgStyle = {
			width: "120px",
			height: "120px"
		};
		return (
			<div>
				<div data-role="content" className="ui-page ui-body-c ui-page-active" 
					style={divStyle} id="home">
					<img src="css/images/e.jpg" width="0px" height="0px"/>
            		<br/>
            		<Link to="/game">
            	    <div id="idhome" style={homeDivStyle}>
            	        <br/>
            	        <img src={this.state.logoImg} style={imgStyle}/>
            	        <br/>
	        	        <div>{this.state.theme}</div>
            	    </div>
            	    </Link>
            		<br/><br/>
            	    <EricssonGameDescription />
            	    <br/><br/><br/><br/>
            	    <EricssonRecruit/>
            	</div>
            </div>
		);
	}
}

ReactDOM.render((
  <Router>
  	<Route path="/" component={App}>
  		<IndexRoute component={EricssonGameEntry}/>
    	<Route path="game" component={GameApp}/>
    	<Route path="success" component={GameSuccess}/>
    	<Route path="finish" component={GameFinish}/>
    	<Route path="about" component={About}/>
    	<Route path="ericsson" component={Ericsson}/>
    	<Route path="e3Info" component={E3Info}/>
    </Route>
  </Router>
), document.getElementById('app'))

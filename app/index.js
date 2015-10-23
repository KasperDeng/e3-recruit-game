
'use strict'

// index.js
// var React = require('react');
// var ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';

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
				<a href={this.props.about} data-ajax="false">爱立信校园招聘</a>
			</div>
		);
	}
}

class EricssonGameEntry extends React.Component {
	constructor() {
		super();
    	this.state = {
    		theme: "点亮爱立信",
			aboutRecruit: "about.html",
    		gameHref: "game.html",
    		logoImg: "css/images/ericssonlogo-13.png"
    	};
  	}

	render() {
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
			<div data-role="content">
				<img src="css/images/e.jpg" width="0px" height="0px"/>
            	<br/>
                <div id="idhome" style={homeDivStyle}>
                    <a href={this.state.gameHref} data-ajax="false">
                    <br/>
                    <img src={this.state.logoImg} style={imgStyle}/>
                    <br/>
	                <div>{this.state.theme}</div>
                    </a>
                </div>
            	<br/><br/>
                <EricssonGameDescription />
                <br/><br/><br/><br/>
                <EricssonRecruit about={this.state.aboutRecruit}/>
            </div>
		);
	}
}

ReactDOM.render(
	<EricssonGameEntry/>,
	document.getElementById('home')
);
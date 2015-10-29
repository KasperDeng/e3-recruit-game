'use strict'

import React from 'react';
import { Router, Route, Link } from 'react-router';

export default class Finish extends React.Component {
	render() {
        let style = {
            marginLeft: "50px",
            marginRight: "50px",
        }
		return(
			<div data-role="page" id="finished">
        	    <div data-role="content">
        	        <img src="css/images/e.jpg" width="0px" height="0px"/>
        	        <br/><br/>
        	        <div id="finished_div">
        	            <span id="finished_span1">恭喜你!</span>
        	            <span id="finished_span2">你完成这个游戏的所有的关卡</span>
        	        </div>
        	        <br/><br/>
        	        <div id="finished_border" style={style}>
        	            <Link to="/">首页</Link>
                    <Link to="/about">爱立信校园招聘</Link>
        	        </div>
        	    </div>
        	</div>
		)
	}
}
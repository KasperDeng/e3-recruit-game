'use strict'

import React from 'react';
import level from './levels';
import { Router, Route, Link, PropTypes } from 'react-router';

export default class GameSuccess extends React.Component {
    constructor() {
        super();
        this.state = {
              time: 0,
              currentLevel: 0,
              totalMoves: 0,
        }
    }
    componentWillMount() {
        let queryArray = window.location.href.split("?")[1].split("&");
        this.state.time = parseInt(queryArray[0].split('time=')[1]);
        this.state.currentLevel = parseInt(queryArray[1].split('currentLevel=')[1]);
        this.state.totalMoves = parseInt(queryArray[2].split('totalMoves=')[1]);
        document.title = this.state.time + "秒" + this.state.totalMoves + "步过第"
        + (parseInt(this.state.currentLevel) + 1) + "关,不服来战";
    }
    render() {
        //level.length = 1; //for debugging finish page
        let divStyle = {
            minHeight: "653px",
        }
        return(
            <div data-role="content" className="ui-page ui-body-c ui-page-active" style={divStyle} id="success">
                <img src="css/images/e.jpg" width="0px" height="0px"/>
                <div>
                    <span id="success_span1">恭喜你!!!</span>
                    <span id="success_span2">第<span>{this.state.currentLevel + 1}</span>关</span>
                    <span id="success_span2">你在<span>{this.state.time}</span>秒内，
                    一共走了<span>{this.state.totalMoves}</span>步</span>
                </div>
                <br/>
                <div id="success_div">
                    <Link to="/game" query={{level: this.state.currentLevel}}>重新开始这关</Link>
                    <Link to={(this.state.currentLevel + 1) <= level.length - 1 ? "/game" : "/finish"} 
                    query={(this.state.currentLevel + 1) <= level.length - 1 ? {level: this.state.currentLevel + 1} : null}>下一关</Link>
                    <Link to="/">首页</Link>
                    <Link to="/about">爱立信校园招聘</Link>
                </div>
            </div>
        )
    }
}

GameSuccess.contextTypes = { history: PropTypes.history }

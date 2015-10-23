'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import level from './levels';

class SuccessPage extends React.Component {
      constructor() {
            super();
            this.state = {
                  time: 0,
                  currentLevel: 0,
                  totalMoves: 0,
            }
      }
      componentWillMount() {
            let queryArray = window.location.search.substring(1).split("&");
            this.state.time = Number.parseInt(queryArray[0].split('time=')[1]);
            this.state.currentLevel = Number.parseInt(queryArray[1].split('currentLevel=')[1]);
            this.state.totalMoves = Number.parseInt(queryArray[2].split('totalMoves=')[1]);
            document.title = this.state.time + "秒" + this.state.totalMoves + "步过第" 
            + (Number.parseInt(this.state.currentLevel) + 1) + "关,不服来战";
      }
      backRetry() {
            window.location.href=`game.html?level=${this.state.currentLevel}`;
      }
      backNext() {
            var gamelevel = parseInt(this.state.currentLevel) || 0;
            var nextLevel = gamelevel + 1;
            if (nextLevel <= level.length - 1) {
                  window.location.href=`game.html?level=${nextLevel}`;      
            } else {
                  window.location.href="finish.html";
            }
      }
      render() {
            return(
            <div>
                  <img src="css/images/e.jpg" width="0px" height="0px"/>
                  <div>
                        <span id="success_span1">恭喜你!!!</span>
                        <span id="success_span2">第<span>{this.state.currentLevel + 1}</span>关</span>
                        <span id="success_span2">你在<span>{this.state.time}</span>秒内，
                          一共走了<span>{this.state.totalMoves}</span>步</span>
                  </div>
                  <br/>
                  <div id="success_div">
                    <a onClick={this.backRetry.bind(this)}>重新开始这关</a>
                    <a onClick={this.backNext.bind(this)} >下一关</a>
                    <a href="index.html" data-ajax="false">首页</a>
                    <a href="about.html" data-ajax="false">爱立信招聘</a>
                  </div>
            </div>
            )
      }
}

ReactDOM.render(
      <SuccessPage />,
      document.getElementById('success')
);



'use strict'

import React from 'react';

export default class Ericsson extends React.Component {
	render() {
		let divStyle = {
            minHeight: "653px",
            paddingTop: "43px",
        }
		return(
			<div data-role="page" id="ericssonbg1" className="ui-page ui-body-c ui-page-header-fixed ui-page-active" style={divStyle}>
        		<div data-role="header" data-position="fixed" className="ui-header ui-bar-a ui-header-fixed slidedown" role="banner">
        	    	<h3 className="ui-title" role="heading" aria-level="1">爱立信</h3>
        	    </div>
        	    <div data-role="content" className="ui-content" role="main">
					<img src="css/images/e.jpg" width="0px" height="0px"/>
        	      	<div id="ericsson_div1">
						爱立信中国<br/>2016年校园宣讲会日程重磅来袭<br/>See you soon
					</div>
					<br/>
					<div id="ericsson_div2">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此时，秋叶正渲染着新色，在这个色彩斑斓的季节里，你是否已收拾好心情整装待发，开始生命里下一场旅程？快加入我们！一起踏上精彩纷呈的职业之旅！
						<br/><br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;爱立信中国2016年校园宣讲会诚邀你的参与！九个城市，十一场宣讲，我们静候你的莅临~
					</div>
					<div>
						<img id="ericsson_img" src="css/images/640.png" width="100%" heigth="100%"/>
					</div>
					<div id="ericsson_div2">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;爱立信高管现场分享，宣讲会现场接受简历投递，精美礼品相赠，欢迎大家届时来参加！
					</div>
        	    </div>
        	</div>
		)
	}
}
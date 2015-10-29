'use strict'

import React from 'react';

export default class EricssonInfo extends React.Component {
	render() {
		let divStyle = {
            minHeight: "653px",
            paddingTop: "43px",
        }
		let spanStyle = {
			color: "#fff",
			fontSize: "22px", 
			width: "100%", 
			display: "block",
			padding: "8px 0px",
			fontWeight: "normal",
			textShadow: "none"
		}
		return(
			<div data-role="page" id="e3info" className="ui-page ui-body-c ui-page-header-fixed ui-page-active" style={divStyle}>
				<div data-role="header" data-position="fixed" className="ui-header ui-bar-a ui-header-fixed slidedown" role="banner">
			    	<h3 className="ui-title" role="heading" aria-level="1">爱立信</h3>
			    </div>
			    <div data-role="content">
			        <br/>
			      	<div>
			        	<span id="e3span1">爱立信简介</span>
			        	<span id="e3span2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;爱立信是世界领先的为全球移动和固定网络运营商提供电信设备和相关服务的供应商。超过180个国家的1000多个网络正在使用我们的网络设备，我们提供的网络承载着全球近一半的移动业务。爱立信是全球少数能够为所有主流移动通信标准提供端到端解决方案的厂商之一。</span>
			        </div>
			        <br/>
			        <div>
			            <span id="e3span1">关于我们</span>
			            <span id="e3span2">我们提供的网络设备承载着全球40%以上的移动业务；</span>
			            <span id="e3span2">我们为运营商提供支持的网络正在为超过25亿用户提供服务；</span>
			            <span id="e3span2">我们为运营商管理的网络正在为超过9.5亿用户提供服务；</span>
			            <span id="e3span2">我们拥有业内最强大的专利组合，包括33,000项获批专利；</span>
			            <span id="e3span2">我们拥有超过60,000名专业服务人员；</span>
			            <span id="e3span2">我们的客户遍布超过180个国家；</span>
			            <span id="e3span2">我们在电信市场已有136年历史；</span>
			            <span id="e3span2">我们是全球第五大软件供应商；</span>
			        </div>
			        <br/>
			        <div>
			            <span id="e3span1" style={spanStyle}>了解更多</span>
			            <a id="e3span2" href="http://www.ericsson.com/cn/" data-ajax="false">爱立信中国官网&nbsp;&gt;&gt;</a>
			            <a id="e3span2" href="http://weibo.com/ericssonweibo?sudaref=www.ericsson.com" data-ajax="false">爱立信官方微博&nbsp;&gt;&gt;</a>
			            <a id="e3span2" href="http://i.youku.com/u/UMzA2MTI2MDQ4" data-ajax="false">爱立信中国优酷频道&nbsp;&gt;&gt;</a>
			        </div>
			    </div>
			</div>
		)
	}
}
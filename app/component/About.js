
import React from 'react';
import { Router, Route, Link } from 'react-router';

export default class About extends React.Component {
    render() {
        let divStyle = {
            minHeight: "653px",
        }
        let style1 = {
            width: "100%",
        }
        let style2 = {
            marginLeft: "50px",
            marginRight: "50px",
        };
        return(
            <div data-role="page" id="about" className="ui-page ui-body-c ui-page-active" style={divStyle}>
                <div id="about_div">
                    <div id="about_div_div">
                        <img src="css/images/e.jpg" width="0px" height="0px"/>
                        <img src="css/images/background.jpg" style={style1}/>
                    </div>
                </div>
                <div data-theme="a" data-role="header" className="ui-header ui-bar-a" role="banner">
                    <h3 className="ui-title" role="heading" aria-level="1">爱立信</h3>
                </div>
                <div id="about_content" data-role="content">
                    <div id="about_span">
                        <span>爱立信<br/>2016校园招聘</span>
                    </div>
                    <div id="about_div1" style={style2}>
                        <Link to="/e3Info">爱立信简介</Link>
                        <a href="http://www.ericssoncampus.com/" data-ajax="false">爱立信校招官网</a>
                        <Link to="/ericsson">爱立信2016校招宣讲会日程</Link> 
                    </div>
                </div>
            </div>
        )
    }
}
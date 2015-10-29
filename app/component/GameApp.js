
'use strict'

import React from 'react';
import { PropTypes } from 'react-router'

import level from './levels';
import TabBar from './TabBar';

var leters = ['a', 'b', 'c', 'd', 'e'];

class TimeCounter extends React.Component {
	constructor(){
		super();
		this.state = {
			time: 0,
			timeout: null,
		}
	}
	componentDidMount() {
		this.state.timout = setInterval(() => {
			this.state.time++;
			this.setState({
				time: this.state.time,
			})
		}.bind(this), 1000);
	}
	componentWillUnmount() {
		clearInterval(this.state.timout);
	}

    getTime() {
    	return this.state.time;
    }
	render() {
		return(
			<span>
				<span><b>计时:{this.state.time} 秒</b></span>
			</span>
		)
	}
}

class DataBlock extends React.Component {
	constructor() {
		super();
		this.state ={
			imageSrc: "css/images/campus recruitment-15.png",
			style1: "ui-block-a light style_border",
			style2: "ui-bar ui-bar-b",
			heightStyle: "0px",
			lighted: true,
			imageStyle: {
				width:  "100%",
				height: "100%"
			}
		};
	}
	componentWillMount() {
		this.state.style1 = `ui-block-${leters[this.props.dataCol % 5]} light style_border`; // ES6 template string
		this.state.style2 = `ui-bar ${this.props.lighted ? "ui-bar-b" : "ui-bar-c"}`;
		this.state.blockId = this.props.blockId;
		this.state.heightStyle = {
			height: (window.innerWidth - 40) / this.props.totcol + "px",
		}
		this.setState({
			style1: this.state.style1,
			style2: this.state.style2,
			heightStyle: this.state.heightStyle,
			lighted: this.props.lighted,
		})
	}
	onToggleLight() {
		if (this.state.lighted) {
			this.setState({
				style2: "ui-bar ui-bar-c",
				lighted: !this.state.lighted,
			});
		} else {
			this.setState({
				style2: "ui-bar ui-bar-b",
				lighted: !this.state.lighted,
			});
		}
		this.state.lighted = !this.state.lighted;

	}
	handleClick() {
		this.props.callbackFn(this.state.blockId, this.state.lighted);
	}

	getLightState() {
		return this.state.lighted;
	}

	render() {
		return(
			<div className={this.state.style1}>
				<div className={this.state.style2} style={this.state.heightStyle}>
					<img src={this.state.imageSrc} style={this.state.imageStyle} onClick={this.handleClick.bind(this)}/>
				</div>
			</div>
		);
	}
}

export default class GameApp extends React.Component {
	constructor() {
		super();
		this.state = {
			currentLevel: 0,
			totalMoves: 0,
        	blocks: [],
        	isFinshed: false
		}
	}

	componentWillMount() {
		console.log("href: " + window.location.href);
		let toLevel = window.location.href.split("?")[1].split('level=')[1];
		if ((typeof toLevel !== "undefined") && (!isNaN(Number.parseInt(toLevel)))) {
			this.state.currentLevel = Number.parseInt(toLevel);
		} else {
			this.state.currentLevel = Number.parseInt(window.localStorage.getItem("level")) || 0; // from persistent
		}

		document.title = `第${this.state.currentLevel + 1}关`;

		let myData = level[this.state.currentLevel].data;
		this.state.totrow = myData.length;
		this.state.totcol = myData[0].length;
	 	let blocks = [];
	 	let idx = 0;
	 	for(let i in myData) {
	 		for(let j in myData[i]) {
	 			let lighted = myData[i][j] == 1 ? false : true;
	 			let block = {
	 				idx: idx,
	 				totcol: this.state.totcol,
					dataCol: j,
					lighted: lighted,
					callbackFn: this.onToggleLight.bind(this)
				}
	 			blocks[idx] = block;
	 			idx++;
	 		}
		}
		this.state.blocks = blocks;

	}

    rowcol2index(col, row) {
        if (col < 0 || row < 0 || col >= this.state.totcol || row >= this.state.totrow)
            return -1;
        else
            return row * this.state.totcol + col;
    }

    onToggleLight(blockId, lighted) {
        let col = blockId % this.state.totcol;
        let row = (blockId - col) / this.state.totcol;

    	this.refs[blockId].onToggleLight();

    	// set blocks in neighbourhood
    	let dummyFn = () => {};
    	this.rowcol2index(col + 1, row) >= 0 ? this.refs[this.rowcol2index(col + 1, row)].onToggleLight() : dummyFn();
    	this.rowcol2index(col - 1, row) >= 0 ? this.refs[this.rowcol2index(col - 1, row)].onToggleLight() : dummyFn();
    	this.rowcol2index(col, row + 1) >= 0 ? this.refs[this.rowcol2index(col, row + 1)].onToggleLight() : dummyFn();
    	this.rowcol2index(col, row - 1) >= 0 ? this.refs[this.rowcol2index(col, row - 1)].onToggleLight() : dummyFn();
    	this.state.totalMoves++;

    	// check finished
    	if(this.isFinish()) {
    		clearInterval(this.state.timout);

    		let query = {
    			time: this.refs.timeCounter.getTime(),
    			currentLevel: this.state.currentLevel,
    			totalMoves: this.state.totalMoves,
    			timestamp: new Date().getTime(),
    		}

    		this.context.history.pushState(null, 'success', query);
    		//this.props.history.pushState(null, 'success', query);
    		// let timestamp = new Date().getTime();
    		// window.location.href=`#/success?time=${this.refs.timeCounter.getTime()}` +
    		// `&currentLevel=${this.state.currentLevel}&totalMoves=${this.state.totalMoves}&timestamp=${timestamp}`;
    	}
    }

    isFinish() {
        for (let i = 0; i < this.state.totrow * this.state.totcol; i++) {
        	if (!this.refs[i].getLightState()) {
        		return false;
        	}
        }
        console.log("Finished");
        return true;
    }

	render() {
		return(
			<div>
				<div data-theme="a" data-role="header">
            	    <h3>
            	        点亮爱立信图标
            	    </h3>
            	</div>
            	<div data-role="content">
					<div className={"ui-grid-" + leters[this.state.totcol - 2]}>
						{this.state.blocks.map(function(block) {
							let props = {
								key: 'id-' + block.idx,
								ref: block.idx,
								totcol: block.totcol,
								dataCol: block.dataCol,
            		        	blockId: block.idx,
            		        	lighted: block.lighted,
            		        	callbackFn: block.callbackFn
							}
            		        return <DataBlock {...props}/>; // Spread Attributes
            		    })}
					</div>
				</div>
				<div>
            	    <TimeCounter ref="timeCounter"/>
            	</div>
            	<div>
            		<TabBar level={this.state.currentLevel}/>
            	</div>
            </div>

		);
	}
}

GameApp.contextTypes = { history: PropTypes.history }

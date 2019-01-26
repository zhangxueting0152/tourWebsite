import React, { Component } from 'react';
import '../css/InfoTool.scss';

class InfoTour extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div className="tool">
				<h2>旅游百宝箱</h2>
				<div className="box">
					<a href="###" ><img src="../imgs/trea1.png" alt="1"/>天气预报</a>
					<a href="###"><img src="../imgs/trea2.png" alt="2"/>火车票查询</a>
					<a href="###"><img src="../imgs/trea3.png" alt="3"/>航空查询</a>
					<a href="###"><img src="../imgs/trea4.png" alt="4"/>地铁线路查询</a>
				</div>
			</div>
		);
	}
}
export default InfoTour;


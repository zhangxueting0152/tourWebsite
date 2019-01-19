import React, { Component } from 'react';
import '../css/InfoRecommend.css';

class InfoList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div className="recommend">
				<h2>景点推荐</h2>
				<div className="location">
				<ul>
					{this.props.value.map( item => {
						return <li className="myLi"><a href="###" className="myA">{item}</a></li>
					})}
				</ul>
				</div>
			</div>
		);
	}
}
export default InfoList;


import React, { Component } from 'react';
import '../css/SceneryList.css';


class SceneryList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div className="sceneryList">
				<h2>风景欣赏</h2>
				{this.props.value.map( item => {
					return (
						<figure>
							<img src={item.src} alt={item.alt}/>
							<figcaption>{item.caption}</figcaption>
						</figure>
					)
				})}
				<div class="more">加载更多...</div>
			</div>
		);
	}
}
export default SceneryList;


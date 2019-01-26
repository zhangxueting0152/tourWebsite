import React, { Component } from 'react';
import '../css/InfoTour.scss';

class InfoTour extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div>
				<h2>热门旅游</h2>
					{this.props.value.map( item => {
						return (
							<figure className="tour">
								<img src={item.src} alt={item.alt}/>
								<figcaption>{item.caption}</figcaption>
							</figure>
						);
					}
					)}
			</div>
		);
	}
}
export default InfoTour;


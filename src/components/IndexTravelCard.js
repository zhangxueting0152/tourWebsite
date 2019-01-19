import  React,{ Component } from 'react';
import '../css/IndexTravelCard.css'

export default class IndexTravelCard extends Component {
	constructor(props) {
		super(props);
	}
	render () {
		return(
			/* map函数的代码一定要包含在html标签中，这里是包含在了div标签中 */
			<div>
				{this.props.value.map( item => {
					return (
						<figure className="figGroup">
							<img src={item.src} alt={item.alt}/>
							<figcaption>
								<div className="category">{item.category}</div>
								<strong className="figTitle">{item.figTitle1}</strong>{item.figTitle2}
								<div>
									<span className="price">{item.price}</span>
									<span className="satis">{item.satis}</span>
								</div>
							</figcaption>
						</figure>
					);
				})}
			</div>
		);
	}
}
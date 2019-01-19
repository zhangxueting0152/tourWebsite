import React, { Component } from 'react';
import Side from './Side';
import '../css/InfoList.css';

class InfoList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div className="content" style={{width:"1263px"}}>
				<Side></Side>
				<div className="list">
					<div className="bar">
						<ul className="left" style={{float:"left"}}>
							<li style={{backgroundColor:"#fff", borderTop:"2px solid #458B00"}}><a href="###">限时特价</a></li>
							<li><a href="###">热门推荐</a></li>
						</ul>
						<ul className="right" style={{float:"right"}}>
							<li><a href="###"  style={{backgroundColor:"#458B00", padding:"0 2px"}}>推荐</a></li>
							<li><a href="###">折扣</a></li>
							<li><a href="###">价格</a></li>
						</ul>
					</div>
					<div className="detail" style={{clear:"both"}}>
						{this.props.value.map( item => {
							return (
								<figure>
									<img src={item.src} alt={item.alt}/>
									<figcaption style={{marginLeft:"0px"}}>
										<article>
											<header>{item.header}</header>
											<section>
												<div className="type">{item.type}</div>
												<div className="explain">{item.explain}</div>
												<div>
													<ol>
														<li><mark>交通</mark> {item.traffic}</li>
														<li><mark>团期</mark> {item.period}.</li>
													</ol>
												</div>
												<div  className="buy">
													<div className="price">
														¥<strong>{item.priceFrom}</strong><s>{item.priceTo}</s>
													</div>
													<button>立即抢购</button>
												</div>
												<div className="sale"><span>{item.sale}</span></div>
											</section>
											<div className="bottom">{item.bottom}<time>{item.time}</time></div>
										</article>
									</figcaption>
								</figure>
							);
						})}
						<div style={{width:"200px",height:"50px",textIndent:"2em",cursor:"pointer"}}>加载更多...</div>
					</div>

				</div>
			</div>

		);
	}
}
export default InfoList;


import React, { Component } from 'react';
import '../css/Footer.scss';

export default class Footer extends Component {
	constructor (props) {
		super(props);
	}
	render() {
		return (
			<footer id="footer">
				<div className="description">
					<div className="item">
						<h2 className="title">合作伙伴</h2>
						<ul>
							<li>途牛旅游网</li>
							<li>驴妈妈旅游网</li>
							<li>携程旅游</li>
							<li>中国青年旅行社</li>
						</ul>
					</div>
					<div className="item">
						<h2>旅游FAQ</h2>
						<ul>
							<li>旅游合同签订方式？</li>
							<li>儿童价是基于什么制定的？</li>
							<li>旅游的线路品质怎么界定的？</li>
							<li>单房差是什么？</li>
							<li>旅游保险有那些种类？</li>
						</ul>
					</div>
					<div className="item">
						<h2>联系方式</h2>
						<ul>
							<li>微博：weibo.com/ycku</li>
							<li>邮件：ycku@ycku.com</li>
							<li>地址：江苏盐城无名路123 号</li>
						</ul>
					</div>
				</div>
				<div className="copyright">
					Copyright © YCKU 瓢城旅行社| 苏ICP 备120110119 号| 旅行社经营许可证：L-YC-BK12345
				</div>
			</footer>
		);
	}
/*	render() {
		return (
			<div>
				<div className="description">
				{this.props.value.description.map( item => {
					return (
						<div className="item">
							<h2 className="title">{item.title}</h2>
							<ul>
								{item.content.map( item => {
									return <li>{item}</li>
								})}
							</ul>
						</div>
					);
				})}
				</div>
				<div className="copyright">
					{this.props.value.copyright2}
				</div>
			</div>
		);
	}*/
}
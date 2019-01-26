import React, { Component } from 'react';
import Nav from './Nav';
import MyFooter from './Footer';
import Side from './Side';
import '../css/Introduction.scss';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

class Introduction extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div>
				<Layout>
					<Header>
						<Nav />
					</Header>
					<Content>
						<div className="point">
							<h2>旅游资讯</h2>
							<h3>介绍各种最新旅游信息、资讯要闻、景点攻略等</h3>
						</div>
						<div className="content" style={{width:"1300px"}}>
							<Side></Side>
							<div class="introduction">
								<section>
									<h2>关于我们</h2>
									<p>瓢城旅行社旅游网创立于2006 年10 月，以“让旅游更简单”为使命，为
										消费者提供由北京、上海、广州、深圳等64 个城市出发的旅游产品预订服务，产品全面，
										价格透明，全年365 天24 小时400 电话预订，并提供丰富的后续服务和保障。</p>
									<p>目前，瓢城旅行社旅游网提供8 万余种旅游产品供消费者选择，涵盖跟团、
										自助、自驾、邮轮、酒店、签证、景区门票以及公司旅游等，已成功服务累计超过400 万
										人次出游。</p>
									<p>同时基于瓢城旅行社旅游网全球中文景点目录以及中文旅游社区，可以更
										好地帮助游客了解目的地信息，妥善制定好出游计划，并方便地预订旅程中的服务项目。
									</p>
								</section>
								<section>
									<h2>联系我们</h2>
									<address>
										<ul>
											<li>瓢城旅行社股份有限公司</li>
											<li>地址：江苏省盐城市亭湖区大庆中路1234 号</li>
											<li>邮编：1234567</li>
											<li>电话：010-88888888</li>
											<li>传真：010-88666666</li>
										</ul>
									</address>
								</section>
							</div>
						</div>
					</Content>
					<Footer style={{padding:"0"}}>
						<MyFooter></MyFooter>
					</Footer>
				</Layout>
			</div>
		);
	}
}
export default Introduction;


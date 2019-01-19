import React, { Component } from 'react';
import Nav from './Nav';
import MyFooter from './Footer';
import OrderContent from './OrderContent';
import '../css/Order.css';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

class Order extends Component {
	constructor(props) {
		super(props);
		this.state =  {}
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
						<OrderContent></OrderContent>
					</Content>
					<Footer style={{padding:"0"}}>
						<MyFooter></MyFooter>
					</Footer>
				</Layout>
			</div>
		);
	}
}
export default Order;


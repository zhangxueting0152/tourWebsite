import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';
import '../../css/Order/OrderTicket.scss';
import axios from 'axios';
const columns = [{
	title: '路线',
	dataIndex: 'route',
	key: 'name',
}, {
	title: '日期',
	dataIndex: 'time',
	key: 'time',
}, {
	title: '价格',
	dataIndex: 'price',
	key: 'price',
	render: price => (
		<span style={{color:"#f60"}}>
			{price}
		</span>
	)
}, {
	title: '税费',
	key: 'fax',
	dataIndex: 'fax',
}, {
	title: '餐食',
	key: 'food',
	dataIndex: 'food',
}, {
	title: '航班',
	key: 'flight',
	dataIndex: 'flight',
}, {
	title: '预定',
	key: 'action',
	render: (text, record) => (
		<button>预定</button>
	),
}];
export default class OrderTicket extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ticket: []
		}
	}
	componentDidMount = () => {
		axios.get('/tour-website/public/mock_data/OrderTicketData.json')
			.then(res => {
				this.setState(
					{
						ticket: res.data.OrderTicketData,
					}
				);
			})
			.catch(error => {
				console.log(error);
			});
	}
	render() {
		return (
			<div className="ticket">
				<ul>
					<li>热门城市：</li>
					<li className="active">北京</li>
					<li>上海</li>
					<li>广州</li>
					<li>深圳</li>
					<li>重庆</li>
					<li>成都</li>
					<li>杭州</li>
					<li>南京</li>
				</ul>
				<Table columns={columns} dataSource={this.state.ticket} />
			</div>
		)
	}
}
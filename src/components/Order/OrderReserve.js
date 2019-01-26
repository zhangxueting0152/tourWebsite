import React, { Component } from 'react';
import { Input, DatePicker  } from 'antd';
import '../../css/Order/OrderReserve.scss';
import OrderTicket from './OrderTicket';
class OrderReserve extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div className="reserve">
				<ul>
					<li>航程类型</li>
					<li className="active">单程</li>
					<li>往返</li>
				</ul>
				<div className="reserveInfo example-input">
					<label>出发城市</label>
					<Input placeholder="城市名" />
				</div>
				<div className="reserveInfo">
					<label>出发时间</label>
					<DatePicker onChange="" />
				</div>
				<div className="reserveInfo example-input">
					<label>返回城市</label>
					<Input placeholder="城市名" />
				</div>
				<div className="reserveInfo">
					<label>返回时间</label>
					<DatePicker onChange=""  />
				</div>
				<button className="submit">订票</button>
				<h2>最新机票</h2>
				<OrderTicket></OrderTicket>
			</div>

		);
	}
}
export default OrderReserve;


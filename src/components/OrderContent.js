import React, { Component } from 'react';
import Side from './Side';
import OrderReserve from '../components/OrderReserve';
import OrderTicket from '../components/OrderTicket';
import '../css/OrderContent.css';

class OrderContent extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
				<div className="content">
					<Side></Side>
					<div style={{width:"600px",float:"left"}}>
						<h2 className="orderh2">机票预订</h2>
						<OrderReserve></OrderReserve>
					</div>
				</div>
		);
	}
}
export default OrderContent;


import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router';
import '../css/Nav.css';


class Nav extends Component {
	handleClick = (e) => {
		if (e.key == "item_0") {
			console.log('c ');
		}
		console.log('click ', e.key);
		this.setState({
			current: e.key,
		});
	}
  render() {
    return (
		<div className="center">
			<h1 className="logo">瓢城旅行社</h1>
			<Menu
				onClick={this.handleClick}
				mode="horizontal"
			>
				<Menu.Item>
						<Link to="/"/>
					首页
				</Menu.Item>
				<Menu.Item>
					<Link to="/information"/>旅游资讯
				</Menu.Item>
				<Menu.Item>
					<Link to="/order"/>机票订购
				</Menu.Item>
				<Menu.Item>
					<Link to="/scenery"/>风景欣赏
				</Menu.Item>
				<Menu.Item>
					<Link to="/introduction"/>公司简介
				</Menu.Item>
			</Menu>
		</div>

    );
  }
}

export default Nav;

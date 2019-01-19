import React, { Component } from 'react';
import Nav from './Nav';
import MyFooter from './Footer';
import Side from './Side';
import SceneryList from '../components/SceneryList';
import '../css/Order.css';
import { Layout } from 'antd';
import axios from 'axios';
const { Header, Footer, Content } = Layout;

class Scenery extends Component {
	constructor(props) {
		super(props);
		this.state =  {
			sceneryList: []
		}
	}
	componentDidMount = () => {
		axios.get('../mock_data/SceneryData.json')
			.then(res => {
				this.setState(
					{
						sceneryList: res.data.SceneryList,
					}
				);
			})
			.catch(error => {
				console.log(error);
			});
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
							<SceneryList value={this.state.sceneryList}></SceneryList>
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
export default Scenery;


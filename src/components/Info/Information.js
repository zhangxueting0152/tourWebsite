import React, { Component } from 'react';
import Nav from '../Nav';
import MyFooter from '../Footer';
import Side from '../Side';
import InfoList from './InfoList';
import '../../css/Info/Information.scss';
import { Layout } from 'antd';
import axios from 'axios';

const { Header, Footer, Content } = Layout;

class Information extends Component {
	constructor(props) {
		super(props);
		this.state =  {
			detail:[]
		}
	}

	componentDidMount = () => {
		axios.get('../mock_data/InfoData.json')
			.then(res => {
				console.log(res.data);
				this.setState(
					{
						detail: res.data.InfoData,
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
						<InfoList value={this.state.detail}></InfoList>
					</Content>
					<Footer style={{padding:"0"}}>
						<MyFooter></MyFooter>
					</Footer>
				</Layout>
			</div>
		);
	}
}
export default Information;


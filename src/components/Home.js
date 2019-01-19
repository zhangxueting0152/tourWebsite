import React, { Component } from 'react';
import Nav from './Nav';
import SearchArea from './SearchArea';
import IndexTravelCard from './IndexTravelCard';
import MyFooter from './Footer';
import { Layout } from 'antd';
import axios from 'axios';

const { Header, Footer, Content } = Layout;

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		const _this=this;
		axios.get('../mock_data/HomeData.json')
			.then(function (res) {
				_this.setState({
					data: res.data.body.HomeData,
				});
			})
			.catch(function (error) {
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
					<Content style={{textAlign:"center"}}>
						<SearchArea />
						<h2 style={{ fontSize:"45px",margin:"10px 0",color:"#666",fontWeight:"bold" }}>热门旅游</h2>
						<p>国内旅游、国外旅游、自助旅游、自驾旅游、油轮签证、主题旅游等各种
							最新热门旅游推荐</p>
						<IndexTravelCard  value={this.state.data}/>
					</Content>
					<Footer style={{padding:"0"}}>
						<MyFooter ></MyFooter>
					</Footer>
				</Layout>
			</div>
		);
	}
}
export default Home;


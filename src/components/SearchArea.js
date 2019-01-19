import React, { Component } from 'react';
import { Input } from 'antd';
import '../css/Search.css'

const  Search = Input.Search;

class SearchArea extends Component {
	render() {
		return (
			<div className="search">
				<Search
					placeholder="请输入旅游景点或城市"
					onSearch={value => console.log(value)}
					/*style={{ width: 200 }}*/
				/>
			</div>
		);
	}
}
export default SearchArea;
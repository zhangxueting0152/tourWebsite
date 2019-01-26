import React, { Component } from 'react';
import InfoRecommend from './Info/InfoRecommend';
import InfoTour from './InfoTour';
import InfoTool from './InfoTool';
import '../css/Info/Information.scss';
import '../css/Side.scss';
import axios from 'axios';

class Side extends Component {
	constructor(props) {
		super(props);
		this.state =  {
			location: [],
			tour:[]
		}
	}
	componentDidMount = () => {
		axios.get('../mock_data/SideData.json')
			.then(res => {
				this.setState(
					{
						location: res.data.location,
						tour: res.data.tour,
					}
				);
			})
			.catch(error => {
				console.log(error);
			});
	}
	render() {
		return(
			<div className="side">
				<InfoRecommend value={this.state.location} className="block"/>
				<InfoTour value={this.state.tour} className="block"></InfoTour>
				<InfoTool className="block"></InfoTool>
			</div>
		);
	}
}
export default Side;


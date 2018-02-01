import React, { Component } from 'react';

// Needed to get Store!
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../store/actions";

class Feed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			feed: []
		};
	}
	loadData() {
		const __token = '0df11152c1122fbc81467dc9402b8bf8af4a2fac';
		const headers = {
			'Authorization': `Token ${__token}`,
			'Content-Type': 'application/json'
		}
		fetch('http://localhost:8080/api/feed/', {
				method: 'GET', // or 'PUT'
				headers: headers
			}).then(res => res.json())
			.catch(error => false)
			.then(response => {
				// if (response){
				// 	this.setState({feed:response});
				// 	console.log('response')
				// }
				this.setState(() => {
					return {
						feed: response
					}
				})
			});
	}
	componentDidMount() {
		this.loadData();
	}
	render() {
		const { token, dispatch } = this.props;
		let list;
		if (this.state.feed.length > 0) {
			list = this.state.feed.map((item,index) => {
				return (
					<li key={index}>
						<p>{token}</p>
						<a href={`/profile/${item.user_profile}`}>{item.status_text}</a>
						<br/>{item.created_on}
					</li>
				);
			});
		}
		return ( 
			<ul className="Feed">{list}</ul>
		);
	}
}

export default connect(state => state)(Feed);
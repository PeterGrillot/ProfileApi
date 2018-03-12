import React, { Component } from 'react';
import Cookies from 'js-cookie';

// Needed to get Store!
import { connect } from 'react-redux';

class Feed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			feed: []
		};
	}
	loadData() {
		const token = Cookies.get('token');
		console.log(token)
		const headers = {
			'Authorization': `Token ${token}`,
			'Content-Type': 'application/json'
		}
		fetch('http://localhost:8080/api/feed/', {
				method: 'GET',
				headers: headers
			}).then(res => res.json())
			.catch((error) => {
				console.log(error)
			})
			.then(response => {
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
		let list;
		if (this.state.feed.length > 0) {
			list = this.state.feed.map((item,index) => {
				return (
					<article key={index}>
							<header>
									<div>
											<h4><a className="uk-link-reset" href="#">{item.user_profile}</a></h4>
											<ul>
													<li>{item.created_on}</li>
											</ul>
									</div>
							</header>
							<section>
									<p>{item.status_text}</p>
							</section>
							<hr/>
					</article>
				);
			});
		} else {
			return (
			<div>
				<p>Please Login to View Content.</p>
			</div>
			)
		}
		return ( 
			<div className="Feed">
				<h2>Feed</h2>
				{list}
			</div>
		);
	}
}

export default connect(state => state)(Feed);
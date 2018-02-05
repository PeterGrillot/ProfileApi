import React, { Component } from 'react';

// Needed to get Store!
import { connect } from "react-redux";

class Feed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			feed: []
		};
	}
	loadData() {
		const { token } = this.props;
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
					<article key={index} class="uk-comment">
							<header class="uk-comment-header uk-grid-medium uk-flex-middle">
									<div class="uk-width-expand">
											<h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">{item.user_profile}</a></h4>
											<ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
													<li><a href="#">{item.created_on}</a></li>
											</ul>
									</div>
							</header>
							<div class="uk-comment-body">
									<p>{item.status_text}</p>
							</div>
							<hr/>
					</article>
				);
			});
		} else {
			return (
			<div class="uk-alert-primary uk-alert">
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
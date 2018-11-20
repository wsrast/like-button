import React, {Component} from 'react';
import './index.css';
import LikeEmoji from './LikeEmoji';

export default class Like extends Component {

	static defaultProps = {
		test: 'foo'
	};

	constructor () {
		super();
		this.state = {
			collapsed: false
		}
	}

	render () {
		return (
			<div className="like">
				<div>Hi from the Like button</div>
				<input type="button" value={this.state.collapsed} />
				<LikeEmoji />
			</div>
		);
	}
}

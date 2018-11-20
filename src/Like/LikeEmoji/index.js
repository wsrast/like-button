import React, {Component} from 'react';
import './index.css';

export default class LikeEmoji extends Component {

	render() {
		return (
			<div className="like-emoji">
				<span className="emoji like">like</span>
				<span className="emoji love">love</span>
				<span className="emoji haha">haha</span>
				<span className="emoji wow">wow</span>
				<span className="emoji sad">sad</span>
				<span className="emoji angry">angry</span>
			</div>
		)
	}
}
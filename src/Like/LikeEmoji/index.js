import React, {Component} from 'react';

export default class LikeEmoji extends Component {
	constructor () {
		super();
	}

	render() {
		return (
			<div class="like-emoji">
				<span class="emoji like">like</span>
				<span class="emoji love">love</span>
				<span class="emoji haha">haha</span>
				<span class="emoji wow">wow</span>
				<span class="emoji sad">sad</span>
				<span class="emoji angry">angry</span>
			</div>
		)
	}
}
import React, {Component} from 'react';
import './index.css';
import {ReactComponent as LikeSVG} from '../../assets/like.svg';
import {ReactComponent as LoveSVG} from '../../assets/love.svg';
import {ReactComponent as HahaSVG} from '../../assets/haha.svg';
import {ReactComponent as WowSVG} from '../../assets/wow.svg';
import {ReactComponent as SadSVG} from '../../assets/sad.svg';
import {ReactComponent as AngrySVG} from '../../assets/angry.svg';

export default class LikeEmoji extends Component {

	render() {
		return (
			<div className="like-emoji">
				<LikeSVG className="emoji"/>
				<LoveSVG className="emoji"/>
				<HahaSVG className="emoji"/>
				<WowSVG className="emoji"/>
				<SadSVG className="emoji"/>
				<AngrySVG className="emoji"/>
			</div>
		)
	}
}
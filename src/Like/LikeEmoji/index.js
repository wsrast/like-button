import React, {Component} from 'react';
import {ReactComponent as LikeSVG} from '../../assets/like.svg';
import {ReactComponent as LoveSVG} from '../../assets/love.svg';
import {ReactComponent as HahaSVG} from '../../assets/haha.svg';
import {ReactComponent as WowSVG} from '../../assets/wow.svg';
import {ReactComponent as SadSVG} from '../../assets/sad.svg';
import {ReactComponent as AngrySVG} from '../../assets/angry.svg';

import styled from 'styled-components';

const LikeEmojiStyled = styled.div`
	background-color: #383c44;
	border-radius: 4px;
	padding: 2px;
	
	&:hover {
		background-color: #444;
	}
	
	.emoji {
		display: inline-block;
		-webkit-transition: transform 0.2s;
		transition: transform 0.2s;
		transform: scale(1,1);
		cursor: pointer;
		width: 30px;
		height: 30px;
		margin: 4px;
		
		&:hover {
			transform: scale(1.3, 1.3);
		}
	}
`;

export default class LikeEmoji extends Component {

	render() {
		return (
			<LikeEmojiStyled className="like-emoji">
				<LikeSVG className="emoji"/>
				<LoveSVG className="emoji"/>
				<HahaSVG className="emoji"/>
				<WowSVG className="emoji"/>
				<SadSVG className="emoji"/>
				<AngrySVG className="emoji"/>
			</LikeEmojiStyled>
		)
	}
}
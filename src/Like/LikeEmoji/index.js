import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import C from '../../util/constants';

import styled from 'styled-components';

const LikeEmojiStyled = styled.div.attrs({
	'data-id': 'LikeEmoji'
})`
	background-color: #383c44;
	border-radius: ${props => props.size/2 + props.margin +4}px;
	opacity: ${({collapsed}) => (collapsed ? 1.0 : 0)};
	-webkit-transition: opacity 0.2s;
	transition: opacity 0.2s;

	position: absolute;
	top: ${props => props.offset}px;
	width: ${props => 6 * props.size + 12 * props.margin}px;

	&:hover {
		background-color: #444;
	}

	.emoji {
		-webkit-transition: transform 0.2s;
		transition: transform 0.2s;
		transform: scale(1, 1);
		cursor: pointer;
		width: ${props => props.size}px;
		height: ${props => props.size}px;
		margin: ${props => props.margin}px;
		&:hover {
			transform: scale(1.3, 1.3);
		}
	}
`;

const SlideContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(6,1fr);
	grid-template-rows: 100%;
	position: relative;
	top: 2px;
`;

export default class LikeEmoji extends Component {
	static defaultProps = {
		collapsed: true,
		margin: 4,
		offset: 50,
		offsetOutTarget: 70,
		offsetOverTarget: 50,
		size: 30
	};

	static propTypes = {
		collapsed: PropTypes.bool
	};

	render() {
		return (
			<LikeEmojiStyled className="like-emoji" {...this.props}>
				<SlideContainer>
					{Object.keys(C.EMOJI).map((emoji) => {
						return (
							<Icon
								key={emoji}
								type={C.EMOJI[emoji]}
								onClick={this.props.onClick}
							/>
						);
					})}
				</SlideContainer>
			</LikeEmojiStyled>
		);
	}
}

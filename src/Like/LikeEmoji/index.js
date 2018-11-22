import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

import styled from 'styled-components';

const LikeEmojiStyled = styled.div`
	background-color: #383c44;
	border-radius: 4px;
	padding: 2px;
	opacity: ${({collapsed}) => (collapsed ? 1.0 : 0)};
	-webkit-transition: opacity 0.2s;
	transition: opacity 0.2s;

	position: absolute;
	top: ${(props) => props.offset}px;
	width: ${(props) => 6 * props.size + 12 * props.margin}px;

	&:hover {
		background-color: #444;
	}

	.emoji {
		display: inline-block;
		-webkit-transition: transform 0.2s;
		transition: transform 0.2s;
		transform: scale(1, 1);
		cursor: pointer;
		width: ${(props) => props.size}px;
		height: ${(props) => props.size}px;
		margin: ${(props) => props.margin}px;

		&:hover {
			transform: scale(1.3, 1.3);
		}
	}
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
				<Icon type="like" />
				<Icon type="love" />
				<Icon type="haha" />
				<Icon type="wow" />
				<Icon type="sad" />
				<Icon type="angry" />
			</LikeEmojiStyled>
		);
	}
}

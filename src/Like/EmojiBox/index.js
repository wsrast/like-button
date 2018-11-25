import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import C from '../../util/constants';

import styled from 'styled-components';

const EmojiBoxStyled = styled.div.attrs({
	'data-id': 'EmojiBox'
})`
	height: ${props => `${props.theme.size.value + 2*props.theme.margin.value}px`}
	
	background-color: #383c44;
	border-radius: ${props => props.theme.size.value/2 + props.theme.margin.value }px;
	opacity: ${({collapsed}) => (collapsed ? 0 : 1.0)};
	-webkit-transition: opacity 0.2s;
	transition: opacity 0.2s;

	position: absolute;
	top: ${props => props.offset}px;
	width: ${props => 6 * props.theme.size.value + 12 * props.theme.margin.value}px;

	&:hover {
		background-color: #444;
	}

	.emoji {
		-webkit-transition: transform 0.2s;
		transition: transform 0.2s;
		transform: scale(1, 1);
		cursor: pointer;
		width: ${props => props.theme.size.value}px;
		height: ${props => props.theme.size.value}px;
		margin: ${props => props.theme.margin.value}px;
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
	top: 0px;
`;

export default class EmojiBox extends Component {
	static defaultProps = {
		collapsed: true,
		margin: 4,
		offset: 50,
		offsetOutTarget: 70,
		offsetOverTarget: 50
	};

	static propTypes = {
		collapsed: PropTypes.bool
	};

	render() {
		return (
			<EmojiBoxStyled className="like-emoji" {...this.props}>
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
			</EmojiBoxStyled>
		);
	}
}

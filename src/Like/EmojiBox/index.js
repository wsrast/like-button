import React from 'react';
import styled from 'styled-components';
import C from '../../util/constants';
import Icon from '../Icon';
import {LikeContextConsumer} from '../../util/like-context';

const EmojiBoxStyled = styled.div.attrs({
	'data-id': 'EmojiBox'
})`
	height: ${(props) =>
		`${props.theme.size.value + 2 * props.theme.margin.value}px`}
	
	background-color: #383c44;
	border-radius: ${(props) =>
		props.theme.size.value / 2 + props.theme.margin.value}px;
	opacity: ${({collapsed}) => (collapsed ? 0 : 1.0)};
	-webkit-transition: opacity 0.2s;
	transition: opacity 0.2s;

	position: absolute;
	top: ${(props) => props.offset}px;
	width: ${(props) =>
		6 * props.theme.size.value + 12 * props.theme.margin.value}px;

	&:hover {
		background-color: #444;
	}

	.emoji {
		-webkit-transition: transform 0.2s;
		transition: transform 0.2s;
		transform: scale(1, 1);
		cursor: pointer;
		width: ${({theme}) => theme.size.value}px;
		height: ${({theme}) => theme.size.value}px;
		margin: ${({theme}) => theme.margin.value}px;
		&:hover {
			transform: scale(1.3, 1.3);
		}
	}
`;

const SlideContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: 100%;
	position: relative;
	top: 0px;
`;

const EmojiBox = (props) => (
	<LikeContextConsumer>
		{({collapsed, handleClick}) => (
			<EmojiBoxStyled className="like-emoji" {...props} collapsed={collapsed}>
				<SlideContainer>
					{Object.keys(C.EMOJI).map((emoji) => {
						return (
							<Icon key={emoji} type={C.EMOJI[emoji]} onClick={handleClick} />
						);
					})}
				</SlideContainer>
			</EmojiBoxStyled>
		)}
	</LikeContextConsumer>
);
EmojiBox.defaultProps = {
	margin: 4,
	offset: 50,
	offsetOutTarget: 70,
	offsetOverTarget: 50
};

export default EmojiBox;

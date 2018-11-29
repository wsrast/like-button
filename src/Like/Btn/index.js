import React from 'react';
import styled from 'styled-components';
import {LikeContextConsumer} from '../../util/like-context';

const BtnStyled = styled.div.attrs({
	'data-id': 'Btn'
})`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	position: relative;

	color: ${(props) =>
		props.selected ? props.theme.selected : props.theme.unselected};
	background-color: #fff;
	min-width: 150px;
	border: 1px solid ${({theme}) => theme.unselected};
	border-radius: 4px;

	padding: 8px;

	&,
	& > * {
		cursor: pointer;
	}

	&:hover {
		background-color: #eee;
	}

	.thumb,
	.emoji {
		width: ${({theme: {size}}) => `${size.value}${size.units}`};
		height: ${({theme: {size}}) => `${size.value}${size.units}`};
	}
`;

const Btn = (props) => {
	return (
		<LikeContextConsumer>
			{({handleOver, handleAnimEnd, handleClick}) => (
				<BtnStyled
					onAnimationEnd={handleAnimEnd}
					onMouseOver={handleOver}
					onMouseOut={handleOver}
					onClick={handleClick}
				>
					{props.children}
				</BtnStyled>
			)}
		</LikeContextConsumer>
	);
};

export default Btn;

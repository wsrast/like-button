import React from 'react';
import styled from 'styled-components';
import Icon from '../../Icon';
import {LikeContextConsumer} from '../../../util/like-context';

const LabelStyled = styled.label`
	display: flex;
	align-items: center;
	justify-content: space-around;
	user-select: none;
	font-weight: bold;
	color: ${({theme, type}) => {
		return theme.emoji_text_colors[type] || theme.selected;
	}};

	span {
		margin-left: 8px;
	}

	&.active > .icon {
		animation-duration: 200ms;
		animation-name: bumpLeft;
		transform-origin: bottom left;
		animation-direction: alternate;
		animation-iteration-count: 2;
	}

	@keyframes bumpLeft {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(-15deg);
		}
	}
`;

const Label = () => {
	return (
		<LikeContextConsumer>
			{({likeValue, handleAnimEnd, isActive, getLikeValueLabel}) => (
				<LabelStyled className={isActive ? 'active' : ''} type={likeValue}>
					<Icon type={likeValue} handleAnimEnd={handleAnimEnd} />
					<span>{getLikeValueLabel()}</span>
				</LabelStyled>
			)}
		</LikeContextConsumer>
	);
};

export default Label;

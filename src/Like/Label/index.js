import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

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

const Label = (props) => {
	const {type, likeValueLabel, isActive, handleAnimEnd} = props;

	const clNames = `${isActive ? 'active' : ''}`;

	return (
		<LabelStyled className={clNames} {...props}>
			<Icon type={type} handleAnimEnd={handleAnimEnd} />
			<span>{likeValueLabel}</span>
		</LabelStyled>
	);
};

export default Label;

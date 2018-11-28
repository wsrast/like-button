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

	& > .icon {
		animation-duration: 500ms;
		animation-name: bumpLeft;
		transform-origin: bottom left;
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
	const {type, likeValueLabel} = props;
	return (
		<LabelStyled {...props}>
			<Icon type={type} />
			<span>{likeValueLabel}</span>
		</LabelStyled>
	);
};

export default Label;

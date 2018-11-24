import React, {Component} from 'react';
import LikeEmoji from './LikeEmoji';
import styled from 'styled-components';
import Icon from './Icon';
import C from '../util/constants';

const BtnStyled = styled.div.attrs({
	'data-id': 'Like'
})`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	position: relative;

	color: ${(props) => props.color};
	background-color: #fff;
	min-width: 150px;
	border: 1px solid ${(props) => props.color};
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
		width: ${(props) => props.size};
		height: ${(props) => props.size};
	}
`;

const LabelStyled = styled.label`
	display: flex;
	align-items: center;
	justify-content: space-around;
	min-width: 70%;
`;

export default class Like extends Component {
	static defaultProps = {
		color: '#616770',
		size: '30px'
	};

	constructor(props) {
		super(props);
		this.state = {
			collapsed: false,
			likeValue: C.THUMB
		};
	}

	/**
	 * Given a "like" value, set the new value. If clicking the main
	 * button, toggle between unselected and the default "like" emoji.
	 * @param {String} likeVal - current state value
	 * @param {String} newVal - new value from clicked button or emoji icon
	 * @returns {Object}
	 */
	getLikeState = (likeVal, newVal) => {
		if (newVal === C.THUMB) return {
			likeValue: (likeVal !== C.THUMB) ? C.THUMB : C.EMOJI.LIKE
		};
		else return {likeValue: newVal};
	};

	handleClick = (e) => {
		e.preventDefault();
		e.stopPropagation();

		const newValue = (e.currentTarget.tagName === 'svg') ?
			e.currentTarget.getAttribute('type') :
			C.THUMB;

		this.setState(({likeValue}) => {
			return this.getLikeState(likeValue, newValue);
		});
	};

	handleOver = (e) => {
		this.setState((state) => {
			return {
				collapsed: !state.collapsed
			};
		});
	};

	render() {
		return (
			<section>
				<h4>Like Button</h4>
				<BtnStyled
					{...this.props}
					onMouseOver={this.handleOver}
					onMouseOut={this.handleOver}
					onClick={this.handleClick}
				>
					<LabelStyled>
						<Icon type={this.state.likeValue} />
						<span>Like</span>
					</LabelStyled>
					<LikeEmoji
						collapsed={this.state.collapsed}
						onClick={this.handleClick}
					/>
				</BtnStyled>
			</section>
		);
	}
}

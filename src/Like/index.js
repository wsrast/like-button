import React, {Component} from 'react';
import EmojiBox from './EmojiBox';
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

	color: ${(props) => {
		//console.log(`props: `, props);
		return (props.selected) ? props.theme.selected: props.theme.unselected
	}};
	background-color: #fff;
	min-width: 150px;
	border: 1px solid ${(props) => props.unselected};
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
		width: ${({theme:{size}}) => `${size.value}${size.units}`};
		height: ${({theme:{size}}) => `${size.value}${size.units}`};
	}
`;

const LabelStyled = styled.label`
	display: flex;
	align-items: center;
	justify-content: space-around;
	min-width: 70%;
`;

export default class Like extends Component {
	static defaultProps = {};

	constructor(props) {
		super(props);
		this.state = {
			collapsed: true,
			likeValue: C.THUMB,
			selected: false
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
			likeValue: (likeVal !== C.THUMB) ? C.THUMB : C.THUMB_SEL,
			selected: likeVal === C.THUMB
		};
		else return {
			likeValue: newVal,
			selected: true
		};
	};

	handleClick = (e) => {
		e.preventDefault();
		e.stopPropagation();

		//if they click an emoji, just set the type
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
					selected={this.state.selected}
					onMouseOver={this.handleOver}
					onMouseOut={this.handleOver}
					onClick={this.handleClick}
				>
					<LabelStyled>
						<Icon type={this.state.likeValue} />
						<span>Like</span>
					</LabelStyled>
					<EmojiBox
						collapsed={this.state.collapsed}
						onClick={this.handleClick}
					/>
				</BtnStyled>
			</section>
		);
	}
}

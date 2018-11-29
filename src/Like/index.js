import React, {Component} from 'react';
import EmojiBox from './EmojiBox';
import styled from 'styled-components';
import C from '../util/constants';
import Label from './Label';
import {LikeContextProvider} from '../util/like-context';

const BtnStyled = styled.div.attrs({
	'data-id': 'Like'
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

export default class Like extends Component {
	static defaultProps = {};

	constructor(props) {
		super(props);
		this.state = {
			collapsed: true,
			likeValue: C.THUMB,
			selected: false,
			isActive: false
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
		if (newVal === C.THUMB)
			return {
				likeValue: likeVal !== C.THUMB ? C.THUMB : C.THUMB_SEL,
				selected: likeVal === C.THUMB
			};
		else
			return {
				likeValue: newVal,
				selected: true
			};
	};

	getLikeValueLabel = () => {
		const {likeValue} = this.state;
		let val = C.EMOJI.LIKE;

		if (
			likeValue !== C.THUMB && //no value = 'Like'
			likeValue !== C.THUMB_SEL && //thumb_sel or 'like' = 'Like'
			likeValue !== C.EMOJI.LIKE
		) {
			val = likeValue; //any other = likeValue
		}
		//capitalize first letter
		return val.charAt(0).toUpperCase() + val.slice(1);
	};

	handleClick = (e) => {
		e.preventDefault();
		e.stopPropagation();

		//if they click an emoji, just set the type
		const newValue =
			e.currentTarget.tagName === 'svg'
				? e.currentTarget.getAttribute('type')
				: C.THUMB;

		this.setState(({likeValue}) => {
			return Object.assign({}, this.getLikeState(likeValue, newValue), {
				isActive: true
			});
		});
	};

	handleOver = (e) => {
		this.setState((state) => {
			return {
				collapsed: !state.collapsed
			};
		});
	};

	handleAnimEnd = () => {
		this.setState({isActive: false});
	};

	render() {
		return (
			<LikeContextProvider value={this.state}>
				<h4>Like Button</h4>
				<BtnStyled
					{...this.props}
					selected={this.state.selected}
					onMouseOver={this.handleOver}
					onMouseOut={this.handleOver}
					onClick={this.handleClick}
				>
					<Label
						type={this.state.likeValue}
						likeValueLabel={this.getLikeValueLabel()}
						isActive={this.state.isActive}
						handleAnimEnd={this.handleAnimEnd}
					/>
					<EmojiBox
						collapsed={this.state.collapsed}
						onClick={this.handleClick}
					/>
				</BtnStyled>
			</LikeContextProvider>
		);
	}
}

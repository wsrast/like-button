import React, {Component} from 'react';
import C from './constants';

const LikeContext = React.createContext();

export class LikeContextProvider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collapsed: true,
			likeValue: C.THUMB,
			selected: false,
			isActive: false
		};

		this.handleOver = this.handleOver.bind(this);
		this.handleAnimEnd = this.handleAnimEnd.bind(this);
		this.handleClick = this.handleClick.bind(this);
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
		const {children} = this.props;

		return (
			<LikeContext.Provider
				value={{
					getLikeValueLabel: this.getLikeValueLabel,
					handleOver: this.handleOver,
					handleAnimEnd: this.handleAnimEnd,
					handleClick: this.handleClick,
					...this.state
				}}
			>
				{children}
			</LikeContext.Provider>
		);
	}
}

export const LikeContextConsumer = LikeContext.Consumer;

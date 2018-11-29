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
	}

	render() {
		const {children} = this.props;

		return (
			<LikeContext.Provider
				value={{
					...this.state
				}}
			>
				{children}
			</LikeContext.Provider>
		);
	}
}

export const LikeContextConsumer = LikeContext.Consumer;

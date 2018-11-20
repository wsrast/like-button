import React, {Component} from 'react';
import LikeEmoji from './LikeEmoji';
import styled from 'styled-components';

const BtnStyled = styled.input`
	background-color: #61dafb;
	border: 1px solid red;
	min-width: 50px;
	border-radius: 4px;
	padding: 8px;
	
	&:hover {
		background-color: #fc0;
	}
`;

export default class Like extends Component {

	static defaultProps = {
		test: 'foo'
	};

	constructor (props) {
		super(props);
		this.state = {
			collapsed: false
		}
	}

	render () {
		return (
			<div className="like">
				<div>Like Button</div>
				<BtnStyled type="button" value={this.state.collapsed} />
				<LikeEmoji />
			</div>
		);
	}
}

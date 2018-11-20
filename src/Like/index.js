import React, {Component} from 'react';
import LikeEmoji from './LikeEmoji';
import styled from 'styled-components';
import {ReactComponent as ThumbIcon} from '../assets/thumb-icon.svg';

const BtnStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content:center;
	flex-direction: column;
	
	position: relative;
	
	color: ${props => props.color};
	background-color: #fff; 
	min-width: 150px;
	border: 1px solid ${props => props.color};
	border-radius: 4px;
	
	padding: 8px;
	
	&, & > * {
		cursor: pointer;
	}
	
	&:hover {
		background-color: #eee;
	}
	
	.thumb {
		width: ${props => props.size};
		height: ${props => props.size};
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
		size: 'calc(10px + 3vmin)'
	};

	constructor (props) {
		super(props);
		this.state = {
			collapsed: false,
			liked: false,
			likeValue: -1,
			over: false
		}
	}

	render () {
		return (
			<div className="like">
				<div>Like Button</div>
				<BtnStyled {...this.props}>
					<LabelStyled><ThumbIcon className="thumb" /><span>Like</span></LabelStyled>
                    <LikeEmoji collapsed={this.state.collapsed} />
				</BtnStyled>

			</div>
		);
	}
}

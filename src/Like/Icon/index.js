import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {ReactComponent as ThumbIcon} from '../../assets/thumb-icon.svg';

import {ReactComponent as LikeSVG} from '../../assets/like.svg';
import {ReactComponent as LoveSVG} from '../../assets/love.svg';
import {ReactComponent as HahaSVG} from '../../assets/haha.svg';
import {ReactComponent as WowSVG} from '../../assets/wow.svg';
import {ReactComponent as SadSVG} from '../../assets/sad.svg';
import {ReactComponent as AngrySVG} from '../../assets/angry.svg';

export default class Icon extends Component {
	static defaultProps = {
		type: 'thumb'
	};

	static propTypes = {
		type: PropTypes.string
	};

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {type} = this.props;
		return (
			<span>
				{type === 'thumb' && <ThumbIcon className="thumb" />}
				{type === 'like' && <LikeSVG className="emoji" />}
				{type === 'love' && <LoveSVG className="emoji" />}
				{type === 'haha' && <HahaSVG className="emoji" />}
				{type === 'wow' && <WowSVG className="emoji" />}
				{type === 'sad' && <SadSVG className="emoji" />}
				{type === 'angry' && <AngrySVG className="emoji" />}
			</span>
		);
	}
}

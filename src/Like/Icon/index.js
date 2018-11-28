import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {ReactComponent as ThumbSel} from '../../assets/thumb-selected2.svg';
import {ReactComponent as ThumbUnsel} from '../../assets/thumb-unselected.svg';

import {ReactComponent as LikeSVG} from '../../assets/like.svg';
import {ReactComponent as LoveSVG} from '../../assets/love.svg';
import {ReactComponent as HahaSVG} from '../../assets/haha.svg';
import {ReactComponent as WowSVG} from '../../assets/wow.svg';
import {ReactComponent as SadSVG} from '../../assets/sad.svg';
import {ReactComponent as AngrySVG} from '../../assets/angry.svg';

import C from '../../util/constants';

const SIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Icon = (props) => {
	const {type} = props;
	return (
		<SIcon className="icon">
			{type === C.THUMB && <ThumbUnsel {...props} className="thumb" />}
			{type === C.THUMB_SEL && <ThumbSel {...props} className="thumb" />}
			{type === C.EMOJI.LIKE && <LikeSVG {...props} />}
			{type === C.EMOJI.LOVE && <LoveSVG {...props} />}
			{type === C.EMOJI.HAHA && <HahaSVG {...props} />}
			{type === C.EMOJI.WOW && <WowSVG {...props} />}
			{type === C.EMOJI.SAD && <SadSVG {...props} />}
			{type === C.EMOJI.ANGRY && <AngrySVG {...props} />}
		</SIcon>
	);
};

Icon.defaultProps = {
	type: C.THUMB,
	className: 'emoji'
};

Icon.propTypes = {
	type: PropTypes.string,
	className: PropTypes.string
};

export default Icon;

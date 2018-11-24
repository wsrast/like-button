import React from 'react';
import PropTypes from 'prop-types';

import {ReactComponent as ThumbIcon} from '../../assets/thumb-icon.svg';

import {ReactComponent as LikeSVG} from '../../assets/like.svg';
import {ReactComponent as LoveSVG} from '../../assets/love.svg';
import {ReactComponent as HahaSVG} from '../../assets/haha.svg';
import {ReactComponent as WowSVG} from '../../assets/wow.svg';
import {ReactComponent as SadSVG} from '../../assets/sad.svg';
import {ReactComponent as AngrySVG} from '../../assets/angry.svg';

import C from '../../util/constants';

const Icon = (props) => {
	const {type} = props;
	return (
		<span>
			{type === C.THUMB && <ThumbIcon {...props} className="thumb" />}
			{type === C.EMOJI.LIKE && <LikeSVG {...props} />}
			{type === C.EMOJI.LOVE && <LoveSVG {...props} />}
			{type === C.EMOJI.HAHA && <HahaSVG {...props} />}
			{type === C.EMOJI.WOW && <WowSVG {...props} />}
			{type === C.EMOJI.SAD && <SadSVG {...props} />}
			{type === C.EMOJI.ANGRY && <AngrySVG {...props} />}
		</span>
	);
};

Icon.defaultProps = {
	type: 'thumb',
	className: 'emoji'
};

Icon.propTypes = {
	type: PropTypes.string,
	className: PropTypes.string
};

export default Icon;

import React from 'react';
import EmojiBox from './EmojiBox';
import Label from './Label';
import {LikeContextProvider} from '../util/like-context';
import Btn from './Btn';

const Like = () => (
	<LikeContextProvider>
		<h4>Like Button</h4>
		<Btn>
			<Label />
			<EmojiBox />
		</Btn>
	</LikeContextProvider>
);

export default Like;

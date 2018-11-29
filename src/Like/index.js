import React from 'react';
import {LikeContextProvider} from '../util/like-context';
import Btn from './Btn';

const Like = () => (
	<LikeContextProvider>
		<h4>Like Button</h4>
		<Btn />
	</LikeContextProvider>
);

export default Like;

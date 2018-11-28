import React, {Component} from 'react';
import Like from './Like';
import styled, {ThemeProvider} from 'styled-components';
import C from './util/constants';

const theme = {
	selected: '#3578e5',
	unselected: '#606770',
	size: {value: 40, units: 'px'},
	margin: {value: 4, units: 'px'},
	emoji_text_colors: {
		[C.THUMB_SEL]: '#3578e5',
		[C.THUMB]: '#606770',
		like: '#3578e5',
		love: '#f35369',
		haha: '#f0ba15',
		wow: '#f0ba15',
		sad: '#f0ba15',
		angry: '#f7714b'
	}
};

const AppStyled = styled.div`
	text-align: center;
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<AppStyled className="App">
					<Like />
				</AppStyled>
			</ThemeProvider>
		);
	}
}

export default App;

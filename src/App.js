import React, {Component} from 'react';
import Like from './Like';
import styled, {ThemeProvider} from 'styled-components';

const theme = {
	selected: '#3578e5',
	unselected: '#606770',
	size: {value: 40, units: 'px'},
	margin: {value: 4, units: 'px'}
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

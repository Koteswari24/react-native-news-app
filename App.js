import React, { Component } from 'react';
import News from './src/components/News';
import { Provider } from "react-redux";
import store from "./src/store/store";

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<News />
			</Provider>
		)
	}
}
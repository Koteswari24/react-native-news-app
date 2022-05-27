import React, { Component } from 'react';
import { FlatList } from 'react-native';

// import { getIndiaNews } from '../utils/fetchNews';
import Article from './Article';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../actions/actions";

class News extends Component {
	state = {
		// articles: [],
		refreshing: true,
	};

	componentDidMount = () => {
		// this.fetchNews();
        this.props.requestApiData();
	};

	// fetchNews = () => {
	// 	getIndiaNews()
	// 		.then(articles => {
	// 			this.setState({ articles, refreshing: false });
	// 		})
	// 		.catch(() => this.setState({ refreshing: false }));
	// };

	// handleRefresh = () => {
	// 	this.setState({ refreshing: true }, () => this.fetchNews());
	// };

    handleRefresh = () => {
		this.setState({ refreshing: true }, () => this.props.requestApiData());
	};

	fetchMoreData = () => {
		this.props.requestApiData();
	}

	render() {
        const { articles = [] } = this.props.data;
        this.state.refreshing = false;
        console.log(articles);

		return (
			<FlatList
				data={articles}
				renderItem={({ item }) => <Article article={item} />}
				keyExtractor={item => item.url}
				refreshing={this.state.refreshing}
				onRefresh={this.handleRefresh}
                extraData={articles}
				onEndReachedThreshold={0.2}
				onEndReached={()=> this.fetchMoreData()}
			/>
		);
	}
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(News);
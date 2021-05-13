import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { getNewsArticles } from '../services/getNewsArticles';
import Search from '../components/search/Search';
import ArticleList from '../components/articleList/ArticleList';

export default class NewsSearch extends Component {
    state = {
        articles: [],
        search: '',
        loading: false,
    };
    // static propTypes = {
    //     prop: PropTypes,
    // };
    // async componentDidMount() {

    //     const articles = await getNewsArticles(this.state.search);
    //     this.setState({
    //         articles,
    //         loading: false,
    //     });
    // }
    handleInputChange = ({ target }) => {
        this.setState({
            search: target.value,
        });
    };
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ loading: true }, async () => {
            const articles = await getNewsArticles(this.state.search);
            this.setState({
                articles,
                loading: false,
            });
        });
    };

    render() {
        return (
            <div>
                <Search
                    value={this.state.search}
                    onChange={this.handleInputChange}
                    onSubmit={this.handleSubmit}
                />
                {this.state.loading && <img src="https://media.giphy.com/media/oVtYtD1k0SSDivz4rS/giphy.gif" alt="loading-gif"/>}
                {!this.state.articles.length && <h1>Search for articles</h1> }
                <ArticleList articles={this.state.articles} />
            </div>
        );
    }
}

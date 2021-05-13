import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getNewsArticles } from '../services/getNewsArticles';
import Search from '../components/search/Search';
import ArticleList from '../components/articleList/ArticleList';

export default class NewsSearch extends Component {
    state = {
        articles: [],
        search: '',
        loading: true,
    };
    static propTypes = {
        prop: PropTypes,
    };
    async componentDidMount() {
        const articles = await getNewsArticles(this.state.search);
        this.setState({
            articles,
            loading: false,
        });
    }
    handleInputChange = ({ target }) => {
        this.setState({
            search: target.value,
        });
    };
    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const articles = await getNewsArticles(this.state.search);
        this.setState({
            articles,
            loading: false,
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
                <ArticleList articles={this.state.articles} />
            </div>
        );
    }
}

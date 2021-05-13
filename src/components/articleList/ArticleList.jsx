import React from 'react';
import PropTypes from 'prop-types';
import Article from '../article/Article';
import '../article/article.css';

const ArticleList = ({ articles }) => {
    return (
        <ul>
            {articles.map((article) => {
                return <Article article={article} key={article.description} />;
            })}
        </ul>
    );
};

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            source: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ),
};

export default ArticleList;

import React from 'react';
import PropTypes from 'prop-types';
import './article.css';

const Article = ({ article }) => {
    return <li data-testid="list-element">
        <h2>{article.title}</h2>
        <img src={article.image} alt="article image"/>
        <h3>{article.source}</h3>
        <p>{article.description}</p>
        <a href={article.url}>Link to story</a>
    </li>;
};

Article.propTypes = {
    article: PropTypes.shape({
        source: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    })
};

export default Article;

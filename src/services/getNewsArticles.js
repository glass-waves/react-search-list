import dotenv from 'dotenv';
dotenv.config();

export const getNewsArticles = async (keyword) => {
    const res = await fetch(
        // eslint-disable-next-line max-len
        `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${process.env.NEWS_API_KEY}`
    );

    const { articles } = res.json();

    return articles.map((article) => {
        return ({
            source: article.source.name,
            title: article.title,
            description: article.description,
            url: article.url,
            image: article.urlToImage,
            date: article.publishedAt,
            content: article.content
        });
    });
};

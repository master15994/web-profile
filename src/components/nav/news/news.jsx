import React from 'react';
import n from './news.module.css';

import NewsContainer from './newsContainer';

const News = props => {
    return (
        <div className={n.wrapper}>
            <NewsContainer />
        </div>
    );
};

export default News;
